import React, { useState } from "react";
import axios from "axios";

const EditPopup = ({ isOpen, onClose, departmentName, description, onSave }) => {
    // console.log(departmentName);
  const [newName, setNewName] = useState(departmentName);
  const [newDescription, setNewDescription] = useState(description);
  const [isSaving, setIsSaving] = useState(false); // State to track saving process

  const handleSave = async () => {
    setIsSaving(true); // Indicate the request is in progress
    try {
      const response = await axios.put(
        "http://localhost:5001/api/department",
        { name: departmentName,newName: newName, description: newDescription },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log("Update successful:", response.data);
      onSave(newName, newDescription); // Call the parent callback with updated values
      onClose(); // Close the popup
    } catch (err) {
      console.error("Error updating department:", err);
      alert("Failed to update the department. Please try again.");
    } finally {
      setIsSaving(false); // Reset saving state
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Edit Department</h2>

        {/* Input for department name */}
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder={departmentName}
        />

        {/* Input for department description */}
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder={description}
          rows="4"
        ></textarea>

        <div className="flex justify-between">
          <button
            onClick={handleSave}
            className={`py-2 px-4 rounded ${
              isSaving
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-700"
            }`}
            disabled={isSaving} // Disable button while saving
          >
            {isSaving ? "Saving..." : "Save"}
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400"
            disabled={isSaving} // Disable cancel button while saving
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPopup;
