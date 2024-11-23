import mongoose from "mongoose";
import bcrypt from "bcrypt"

const employeeSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      employee_id: { type: String, required: true, unique: true },
      dob: { type: Date, required: true },
      gender: { type: String, required: true },
      maritalStatus: { type: String, required: true },
      designation: { type: String, required: true },
      department: { type: String, required: true },
      salary: { type: Number, required: true },
      password: { type: String, required: true },
      role: { type: String, default: "employee" }, // Default role
      isApproved: { type: Boolean, default: false }, // Admin approval required
    },
    { timestamps: true }
  );
  
  // Hash the password before saving
  employeeSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
  
  // Compare entered password with hashed password
  employeeSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };
  
  const Employee = mongoose.model("Employee", employeeSchema);

  export default Employee