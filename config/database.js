import mongoose from "mongoose"
import dotenv from "dotenv" // import .env package
dotenv.config() // .env ki configuration ko use krne ke liye iska use hota hai

// connect to mongodb
export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("Database Connected");
    }).catch((err) => {
        console.log("Error: ", err);
    });
}
