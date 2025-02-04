const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");



exports.registerUser = async (req, res) => {
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
     userPassword: hashedPassword
     
    });


    res.status(201).json({ message: "you have successfully registered",
        newAdmin

     });
  } catch (err) {
    console.log(err);
    
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;

    const user = await User.findOne({userEmail});


    if (!user || !(await bcrypt.compare(userPassword, user.userPassword))) {
      return res.status(401).json({ error: "Invalid email or password" });
    }


    const token = generateJWT(user);
    res.json({ 
        message:"logged in successfully",
        token 
    });
  } catch (err) {
    
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
    
    return res.status(500).json({
      message: "Internal server error",
      error: true
    });
  }
};


function generateJWT(user) {
  return jwt.sign({ userId: User.id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
}

exports.getGreetings = async (req, res) => {
  return res.status(200).json({ message: "Helloo there.." });
};
