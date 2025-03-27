import mongoose from "mongoose"

// connect to mongodb
export const connectDB = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/contacts-crud').then(() => {
        console.log("Database Connected");
    }).catch((err) => {
        console.log("Error: ", err);
    });
}
