import axios from 'axios';
import React, { useState } from 'react';

const AddDepartment = ({ onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = async () => {
    if (!name || !description) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("You are not authorized. Please log in.");
        return;
      }

      const department = { name, description };
      const res = await axios.post(
        "http://localhost:5001/api/department/add",
        department,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        alert("Department added successfully!");
        onClose();
      } else {
        alert("Failed to add department. Please try again.");
      }
    } catch (err) {
      console.error(err);
      if (err.response) {
        alert(err.response.data.message || "An error occurred.");
      } else {
        alert("An error occurred. Please check your network.");
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h3 className="text-xl font-semibold mb-4">Add New Department</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
        >
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Department Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter department name"
              className="w-full border rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              className="w-full border rounded p-2"
              rows="3"
            ></textarea>
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Save Department
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDepartment;
