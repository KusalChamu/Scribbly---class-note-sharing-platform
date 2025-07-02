import express from "express";

const app = express();
//app kiyana eken avith thiyenne, http requests yavanna ha ganna puluvan his thanak

// const mongoose = require("mongoose");

 // Load environment variables from .env file
// calling the function. This returns a object of type express

// mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true})
// const db = mongoose.connection;
// db.on('error', (error) => {
//     console.error("Database connection error:", error);
// });

// db.once('open', () => {
//     console.log("Database connected successfully.");

// Postman is a http request sending client.

app.get("/",
    (req, res) => {
        // triggering a response for a request
        res.json(
            {message: "response send"}
        )
        console.log("This is a get request");
        
    });

app.delete("/",
    (req, res) => {
        res.json(
            {message: "Delete response send"}
        )
        console.log("This is a delete request");
    });

app.post("/",
    (req, res) => { 
        res.json(
            {message: "Post response send"}
        )
        console.log("This is a post request");
    }
)




// starting the backend    
app.listen(3000, () => console.log("Server is running on port 3000"));
