// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";

// import express from "express";

// const app = express();
// const port = process.env.PORT || 8000
//     ; (async () => {
//         try {
//             await mongoose.connect(`${process.env.MONGODB_URI || "mongodb+srv://neerajkumarsharma013:neeraj__143@cluster0.0kmmgro.mongodb.net"}/${DB_NAME}`)
//             app.on("error", (error) => {
//                 console.log("ERROR :", error);
//             })
//             app.listen(port, () => {
//                 console.log(` we are on port  ${port}`);
//             })
//         } catch (error) {
//             console.log("ERROR :", error);
//             throw error
//         }
//     })()

import connectDB from "./db/db.js";
import dotenv from "dotenv";
dotenv.config({
    path: '../env'
})

connectDB();