import express from "express";
import { getPendingEmployees, handleDecision } from "../controller/employeeController.js";
// import { adminMiddleware } from "../middleware/authMiddleware.js";
import verifyUser from "../middlewares/authMiddleware.js";
import Employee from "../models/EmployeeModel.js";

const router = express.Router();

router.get('/',verifyUser, getPendingEmployees
);

router.get("/pending-employees", getPendingEmployees);
router.post("/employee-decision", verifyUser, handleDecision);

export default router;
