import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try{
        const uri = process.env.MONGO_DB_URI;
        console.log("MongoDB URI should be a string check:", typeof(uri));
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDB");

    } catch(error){
        console.log("Failed to connect to MongoDB",error.message);
    }
};
export default connectToMongoDB;