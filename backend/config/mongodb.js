import mongoose from "mongoose";


const connectDB = async () => {
    console.log("Connecting to MongoDB...");
    mongoose.connection.on('connected', () => {
        console.log("DB Connected");
    });

    mongoose.connection.on('error', (err) => {
        console.error("MongoDB connection error:", err);
    });

    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
    return null;
};

export default connectDB;