import connectToDB from "./database/database.js";
import User from "./models/userModel.js";
import bcrypt from "bcrypt"

const userRegister = async() => {
    await connectToDB()
    try{
        const existingUser = await User.findOne({ email: "admin@gmail.com" });
        if (existingUser) {
            console.log("Admin user already exists");
            return; // Exit if the user already exists
        } 
        const hashPassword = await bcrypt.hash("admin",8)
        const newUser = new User({
            name: "Admin",
            email: "admin@gmail.com",
            password: hashPassword,
            role: "admin"
        });
        const savedUser = await newUser.save();
        console.log("Admin user created successfully:", savedUser);
    }catch(err){
        console.log(err);
    }
}

userRegister()