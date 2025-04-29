import mongoose from 'mongoose'; // Import mongoose
import dotenv from 'dotenv'; // Import dotenv
const result = dotenv.config();    // Configure dotenv

const mongoURI = process.env.MONGO_URI; // Get URI from .env file



if (!mongoURI) {
    console.error("❌ MONGO_URI is not defined in the environment variables");
    process.exit(1); // Exit process if MONGO_URI is not defined
}
else {
    console.log("✅ MONGO_URI is defined in the environment variables");
}

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ MongoDB Connected Successfully");
    } catch (err) {
        console.error("❌ MongoDB Connection Error:", err);
        process.exit(1); // Exit process on failure
    }
};

export default connectDB;
