import express from "express"
import verifyUser from "../middlewares/authMiddleware.js"
import {addDepartment, getDepartments} from "../controller/departmentController.js"

const router = express.Router()

router.get("/",verifyUser,getDepartments)
router.post("/add",verifyUser,addDepartment)

export default router