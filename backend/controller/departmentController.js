export const addDepartment = async (req,res) => {
    try{
        const {deptName,description} = req.body
    }
    catch(err){
        return res.status(500).json({success: false,error: "Server error"})
    }
};