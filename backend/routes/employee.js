import express from "express";
import { getPendingEmployees, handleDecision } from "../controller/employeeController.js";
// import { adminMiddleware } from "../middleware/authMiddleware.js";
import verifyUser from "../middlewares/authMiddleware.js";
import Employee from "../models/EmployeeModel.js";

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find(); // Fetch all employees from the database
        res.json(employees);  // Send employees as JSON response
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

router.get("/pending-employees", getPendingEmployees);
router.post("/employee-decision", verifyUser, handleDecision);

export default router;
