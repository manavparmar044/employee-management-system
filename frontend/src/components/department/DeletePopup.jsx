import React from "react";
import axios from "axios";

const DeletePopup = ({ isOpen, onClose, onDelete, departmentName }) => {
  if (!isOpen) return null;

  const onDeleteHandler = async () => {
    // Call the onDelete function to perform the deletion
    console.log(`Deleting department: ${departmentName}`);
    onDelete(departmentName); // Pass the departmentName to the onDelete function
    
    try {
      // Correct way to send data in DELETE request (as part of the body)
      const res = await axios.delete(
        "http://localhost:5001/api/department",
        {
          data: { departmentName }, // Send departmentName in the body
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
          }
        }
      );
      console.log(res.data);
    } catch (err) {
      console.error("Error deleting department:", err);
    }

    onClose(); // Close the popup after deleting
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Delete Department</h2>
        <p className="mb-4">
          Are you sure you want to delete the department: <strong>{departmentName}</strong>?
        </p>
        <div className="flex justify-between">
          <button
            onClick={onDeleteHandler} // Trigger the delete handler
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            Yes, Delete
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-black py-2 px-4 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
