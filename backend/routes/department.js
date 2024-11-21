import express from "express"
import verifyUser from "../middlewares/authMiddleware.js"
import {addDepartment} from "../controller/departmentController.js"

const router = express.Router()

router.post("/add",verifyUser,addDepartment)

export default router