import React, { useState } from 'react';
import AddDepartment from './AddDepartment';

const Department = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="p-6">
      <div className="mb-4">
        <h3 className="text-xl font-bold">Manage Departments</h3>
      </div>
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search department"
          className="border p-2 rounded w-1/2"
        />
        <button
          onClick={togglePopup}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add New Department
        </button>
      </div>

      {showPopup && <AddDepartment onClose={togglePopup} />}
    </div>
  );
};

export default Department;
