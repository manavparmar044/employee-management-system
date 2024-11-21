// DeletePopup.jsx
import React from "react";

const DeletePopup = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Delete Department</h2>
        <p className="mb-4">Are you sure you want to delete this department?</p>
        <div className="flex justify-between">
          <button
            onClick={onDelete}
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
