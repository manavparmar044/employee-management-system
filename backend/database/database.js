import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();


const connectToDB = async()=> {
    try{
        console.log("Database connected successfully");
        await mongoose.connect(process.env.MONGO_URL)
    }
    catch(err){
        console.log(err);
    }
}

export default connectToDB