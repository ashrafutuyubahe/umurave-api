
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./DbConfig/databaseConnection");
const challengeRoutes= require("./routes/challengeRoutes");
const SubscribeToNewsLetter= require('./routes/NewsLetterRoute');
dotenv.config();
const PORT = process.env.PORT || 3000;
connectDB();


app.use(express.json());

app.use("/api/v1",challengeRoutes);
app.use("/api/v1/news-letter",SubscribeToNewsLetter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});