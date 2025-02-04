
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./DbConfig/databaseConnection");
dotenv.config();
const PORT = process.env.PORT || 3000;
connectDB();


app.use(express.json());



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});