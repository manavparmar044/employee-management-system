import express from "express"
import verifyUser from "../middlewares/authMiddleware.js"
import {addDepartment, deleteDepartment, getDepartments, updateDepartment} from "../controller/departmentController.js"

const router = express.Router()

router.get("/",verifyUser,getDepartments)
router.post("/add",verifyUser,addDepartment)
router.put("/",verifyUser,updateDepartment)
router.delete("/",verifyUser,deleteDepartment)

export default router