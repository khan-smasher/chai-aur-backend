// require('dotenv').config({path: './env'});
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({ path: "./.env " });

const port = process.env.PORT || 8080;

connectDB()
    .then(() => {
        // Listen for server-level errors (like port in use)
        app.on("error", (err) => {
            console.error("App error event:", err);
        });

        app.listen(port, () => {
            console.log(`⚙️  Server listening on port ${port}`);
        });
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB", err);
        process.exit(1);
    });

/*
import express from "express";
const app = express();

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error  
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })

    } catch (error) {
        console.error("ERROR: ", error);
        throw error
        
    }
})()
*/
