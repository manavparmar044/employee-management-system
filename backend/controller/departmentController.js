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

export const updateDepartment = async (req, res) => {
    try {
      const { name,newName, description } = req.body;
  
      // Validate inputs
      if (!name || !description) {
        return res.status(400).json({ success: false, error: "All fields are required" });
      }
  
      const updatedDepartment = await Department.findOneAndUpdate(
        { departmentName: name }, // Search criteria
        { departmentName: newName, description }, // Update fields
        { new: true, runValidators: true } // Options
      );
  
      if (!updatedDepartment) {
        return res.status(404).json({ success: false, error: "Department not found" });
      }
  
      res.status(200).json({
        success: true,
        message: "Department updated successfully",
        department: updatedDepartment,
      });
    } catch (err) {
      console.error("Error in updateDepartment:", err);
      return res.status(500).json({ success: false, error: "Server error" });
    }
};

export const deleteDepartment = async (req, res) => {
    try {
      const { departmentName } = req.body;
  
      // Find and delete the department
      const deletedDepartment = await Department.findOneAndDelete({
        departmentName: departmentName,
      });
  
      if (!deletedDepartment) {
        // If no department is found to delete
        return res.status(404).json({
          message: `Department with name ${departmentName} not found.`,
        });
      }
  
      // Send success response
      res.status(200).json({
        message: `Department '${departmentName}' deleted successfully.`,
        deletedDepartment,
      });
    } catch (err) {
      console.error(err);
      // Send error response
      res.status(500).json({
        message: 'Failed to delete the department. Please try again.',
        error: err.message,
      });
    }
  };