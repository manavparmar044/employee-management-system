import React, { useState } from "react";

const EditPopup = ({ isOpen, onClose, departmentName, description, onSave }) => {
  // State to hold the new values for name and description
  const [newName, setNewName] = useState(departmentName);
  const [newDescription, setNewDescription] = useState(description);

  const handleSave = () => {
    // Call onSave with both the new name and description
    onSave(newName, newDescription);
    onClose();
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
          placeholder="Department Name"
        />
        
        {/* Input for department description */}
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="Department Description"
          rows="4"
        />

        <div className="flex justify-between">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Save
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

export default EditPopup;
