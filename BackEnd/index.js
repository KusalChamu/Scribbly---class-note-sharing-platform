import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Importing express module 
const app = express();
dotenv.config(); // Load environment variables from .env file
// calling the function. This returns a object of type express

// this app has http methods like get, post, put, delete etc.

const PORT = process.env.PORT || 7000; // Use PORT from .env or default to 7000
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL).then(() => {
    console.log("Database connected successfully.");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error("Database connection failed:", error);
});