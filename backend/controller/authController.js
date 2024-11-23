import User from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import Employee from "../models/EmployeeModel.js";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            console.log("User not found");
            return res.status(404).json({ success: false, error: "User not found" });
        }

        // Compare password
        const ifExists = await bcrypt.compare(password, user.password);
        if (!ifExists) {
            console.log("Wrong password");
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

export const verify = (req,res) => {
    return res.status(200).json({success: true,user: req.user})
}

// export default {login,verify};

export const register = async (req,res) => {
    const {
        name,
        email,
        employee_id,
        dob,
        gender,
        maritalStatus,
        designation,
        department,
        salary,
        password,
        role,
      } = req.body;
      try {
        // Check if email or employee ID already exists
        const existingEmail = await Employee.findOne({ email });
        const existingID = await Employee.findOne({ employee_id });
    
        if (existingEmail) {
          return res.status(400).json({ success: false, message: "Email already exists." });
        }
        if (existingID) {
          return res.status(400).json({ success: false, message: "Employee ID already exists." });
        }
    
        // Create a new employee
        const employee = new Employee({
          name,
          email,
          employee_id,
          dob,
          gender,
          maritalStatus,
          designation,
          department,
          salary,
          password,
          role,
        });
    
        await employee.save();
    
        res.status(201).json({
          success: true,
          message: "Employee registered successfully. Await admin approval.",
        });
      } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: "Server error. Please try again." });
      }
}
