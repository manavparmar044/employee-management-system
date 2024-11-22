import React, { useState } from "react";
import EditPopup from "./EditPopup";  // Import EditPopup
import DeletePopup from "./DeletePopup";  // Import DeletePopup
import { Pencil, Trash2 } from "lucide-react";

const DepartmentCard = ({
  departmentName,
  description,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-200">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">{departmentName}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={onEdit}
          className="text-blue-500 hover:text-blue-700"
          title="Edit"
        >
          <Pencil />
        </button>
        <button
          onClick={onDelete}
          className="text-red-500 hover:text-red-700"
          title="Delete"
        >
          <Trash2 />
        </button>
      </div>
    </div>
  );
};

const DepartmentList = ({ departments }) => {
  const [editPopupOpen, setEditPopupOpen] = useState(false);
  const [deletePopupOpen, setDeletePopupOpen] = useState(false);
  const [currentDepartment, setCurrentDepartment] = useState(null);

  const handleEdit = (index) => {
    setCurrentDepartment(departments[index]);
    setEditPopupOpen(true);
  };

  const handleDelete = (index) => {
    setCurrentDepartment(departments[index]);
    setDeletePopupOpen(true);
  };

  const handleSaveEdit = (newName) => {
    // Handle the department name change
    console.log("New Name:", newName);
    // Close the popup
    setEditPopupOpen(false);
  };

  const handleConfirmDelete = () => {
    // Handle delete confirmation
    console.log("Deleting department:", currentDepartment.departmentName);
    // Close the popup
    setDeletePopupOpen(false);
  };

  return (
    <div>
      {departments.map((dept, index) => (
        <DepartmentCard
          key={index}
          departmentName={dept.departmentName}
          description={dept.description}
          onEdit={() => handleEdit(index)} // Pass index or other identifiers to the callback
          onDelete={() => handleDelete(index)} // Same here
        />
      ))}

      {/* Edit Popup Modal */}
      <EditPopup
        isOpen={editPopupOpen}
        onClose={() => setEditPopupOpen(false)}
        departmentName={currentDepartment ? currentDepartment.departmentName : ""}
        description={currentDepartment ? currentDepartment.description : ""}
        onSave={handleSaveEdit}
      />

      {/* Delete Popup Modal */}
      <DeletePopup
        isOpen={deletePopupOpen}
        onClose={() => setDeletePopupOpen(false)}
        onDelete={handleConfirmDelete}
        departmentName={currentDepartment ? currentDepartment.departmentName : ""}
      />
    </div>
  );
};

export default DepartmentList;
