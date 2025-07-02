import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();

// request valata athara madiyek set kra gnnva=requests manage kranna.
// req.body gen pilivelata data ganna thami meka pavichchi kranne.
app.use(bodyParser.json());
//app kiyana eken avith thiyenne, http requests yavanna ha ganna puluvan his thanak

mongoose.connect("mongodb+srv://admin:12345@cluster0.irpqghg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => { 
    console.log("Connected to MongoDB database");
})

app.get("/",
    (req, res) => {
        // triggering a response for a request
        res.json(
            {message: "response send"}
        )
        console.log(req.body
        
        );
        
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


// mongodb+srv://admin:12345@cluster0.irpqghg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0