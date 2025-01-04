import Employee from "../models/EmployeeModel.js";

export const getPendingEmployees = async (req, res) => {
  try {
    const pendingEmployees = await Employee.find({ isApproved: false });
    res.status(200).json(pendingEmployees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const handleDecision = async (req, res) => {
  try {
    const { id, decision } = req.body;

    if (decision === "accept") {
      await Employee.findByIdAndUpdate(id, { isApproved: true });
      return res.status(200).json({ message: "Employee approved successfully." });
    }

    if (decision === "reject") {
      await Employee.findByIdAndDelete(id);
      return res.status(200).json({ message: "Employee rejected successfully." });
    }

    res.status(400).json({ message: "Invalid decision." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
