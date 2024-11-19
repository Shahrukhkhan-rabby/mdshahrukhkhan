import  express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import contactRoute from "./routes/contact.route.js"; // New route for the contact form

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

// MongoDB connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    credentials: true, // Allow credentials (e.g., cookies)
  })
);
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/contact", contactRoute); // Route for handling form submissions

// Error handling middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  res.status(errorStatus).send(errorMessage);
});

// Start the server
app.listen(8800, () => {
  connect();
  console.log("Backend server is running on http://localhost:8800");
});
