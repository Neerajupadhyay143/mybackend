import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

import express from "express"
const app = express()
const port = process.env.PORT || 8000;
const MONGODB_URI = 'mongodb+srv://neerajkumarsharma013:neeraj1234@cluster0.0kmmgro.mongodb.net'
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${MONGODB_URI || "mongodb+srv://neerajkumarsharma013:neeraj1234@cluster0.0kmmgro.mongodb.net"}/${DB_NAME}`)
        app.on("ERROR :", (error) => {
            console.log("Error :", error)
        })

        console.log(`/n mongoDB connected !! ${connectionInstance.connection.host} ${DB_NAME} ${port}`);
        


    } catch (error) {
        console.log("MONGODB ERROR", error);
        process.exit(1)
    }
}

export default connectDB;