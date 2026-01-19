import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
        console.log("\nMongoDB Connected Successfully!\n");
        return connectionInstance;
    } catch (error) {
        console.error("\nMongoDB Connection Failed!\n", error);
        process.exit(1);
    }
}