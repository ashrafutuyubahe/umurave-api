const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./DbConfig/databaseConnection");
const challengeRoutes = require("./routes/challengeRoutes");
const SubscribeToNewsLetter = require("./routes/NewsLetterRoute");
const authRoutes = require("./routes/authRoutes");
const cors= require("cors");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./DbConfig/swagger");

dotenv.config();
const PORT = process.env.PORT || 3000;
connectDB();

app.use(
  cors({
    credentials: true,
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
  })
);

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1", challengeRoutes);
app.use("/api/v1/news-letter", SubscribeToNewsLetter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
