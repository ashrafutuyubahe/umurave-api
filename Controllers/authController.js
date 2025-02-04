const User = require("../models/admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const logger = require("../utils/logger");


exports.registerAdmin = async (req, res) => {
  try {
    const { userName, userEmail, adminPassword } = req.body;

    const existingUser= await User.findOne({userEmail});
    if (existingUser) {
      return res
        .status(400)
        .json({
          error: "user already exists with this email or phone number",
        });
    }

    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    const newAdmin = await User.create({
     userName,
     userEmail,
     userPassword: hashedPassword,
     userPhoneNumber,
    });

    
    res.status(201).json({ message: "you have successfully registered",
        newAdmin

     });
  } catch (err) {
    console.log(err);
    logger.error("Error registeringuser:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.loginAdmin = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;

    const user = await User.findOne({userEmail});
    if (!user || !(await bcrypt.compare(userPassword, user.adminPassword))) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = generateJWT(user);
    res.json({ 
        userEmail,
        token 
    });
  } catch (err) {
    logger.error("Error logging in user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};



exports.logOutUser = async (req, res) => {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(400).json({
        message: "No token provided in the request header",
        error: true
      });
    }

    const tokenValue = token.split(" ")[1];

    
    jwt.verify(tokenValue, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
       
        return res.status(401).json({
          message: "Unauthorized, token is invalid or already logged out",
          error: true
        });
      }

      
      res.clearCookie("token");

     
      return res.status(200).json({
        message: "Successfully logged out. Token invalidated.",
        error: false
      });
    });
  } catch (err) {
    logger.error("Error logging outuser:", err);
    return res.status(500).json({
      message: "Internal server error",
      error: true
    });
  }
};


function generateJWT(admin) {
  return jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
}

exports.getGreetings = async (req, res) => {
  return res.status(200).json({ message: "Helloo there.." });
};
