import Department from "../models/departmentModel.js";

export const addDepartment = async (req,res) => {
    try{
        const {departmentName,description} = req.body
        const newDept = new Department({
            departmentName,
            description
        });
        await newDept.save()
        return res.status(200).json({success: true,department: newDept})
    }
    catch(err){
        return res.status(500).json({success: false,error: "Server error"})
    }
};

export const getDepartments = async (req,res) => {
    try{
        const departments = await Department.find();
        return res.status(200).json({success: true,departments})
    }
    catch(err){
        return res.status(500).json({success: false,error: "Server error"})
    }
}