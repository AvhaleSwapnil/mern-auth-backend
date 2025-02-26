import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoute.js";
import userRoutes from "./routes/userRoute.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

export default app;
