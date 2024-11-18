import User from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, error: "User not found" });
        }

        // Compare password
        const ifExists = await bcrypt.compare(password, user.password);
        if (!ifExists) {
            return res.status(404).json({ success: false, error: "Wrong password" });
        }

        // Generate JWT token
        const token = jwt.sign({ _id: user.id, role: user.role }, process.env.TOKEN_SECRET, { expiresIn: "15d" });

        // Send response with token and user info
        return res.status(200).json({
            success: true,
            token,
            user: { _id: user.id, name: user.name, role: user.role }
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, error: err.message });
    }
};

export default login;
