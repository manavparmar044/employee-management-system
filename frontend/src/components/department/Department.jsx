import React, { useEffect, useState } from "react";
import AddDepartment from "./AddDepartment";
import DepartmentList from "./DepartmentList";
import axios from "axios";

const Department = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const [departments,setDepartments] = useState([])

  useEffect(()=>{
    const mockDepartments = [
    { departmentName: "HR", description: "Handles employee relations" },
    { departmentName: "IT", description: "Manages technical infrastructure" },
  ];
  // setDepartments(mockDepartments)
    const getDepartments = async () => {
        try{
            const res = await axios.get("http://localhost:5001/api/department", {
                headers: {
                    "Authorization" : `Bearer ${localStorage.getItem("token")}`
                }
            })
            if(res.data.success){
                setDepartments(res.data.departments)
            }
            else {
                console.error("Failed to fetch departments:", res.data.message);
              }
        }
        catch(err){
            console.log(err);
        }
    }
    getDepartments();
  },[])

//   const departments = [
//     { departmentName: "HR", description: "Handles employee relations" },
//     { departmentName: "IT", description: "Manages technical infrastructure" },
//     { departmentName: "Finance", description: "Oversees budgets and expenditures" },
//   ];

  // Filtered departments based on search query
  const filteredDepartments = departments.filter((dept) =>
    dept.departmentName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-800">Manage Departments</h3>
      </div>

      {/* Search and Add New */}
      <div className="flex justify-between items-center mb-6 text-black">
        <input
          type="text"
          placeholder="Search department"
          value={searchQuery} // Bind input value to searchQuery
          onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on change
          className="border border-gray-300 p-2 rounded w-2/3"
        />
        <button
          onClick={togglePopup}
          className="bg-primOr text-white px-4 py-2 rounded hover:bg-secOr ml-4"
        >
          Add New Department
        </button>
      </div>

      {/* Add Department Popup */}
      {showPopup && <AddDepartment onClose={togglePopup} />}

      {/* Department List */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h1 className="text-xl font-bold text-gray-800 mb-4">Department List</h1>
        <DepartmentList departments={filteredDepartments} /> {/* Pass filtered list */}
        {filteredDepartments.length === 0 && (
          <p className="text-gray-600">No departments found.</p>
        )}
      </div>
    </div>
  );
};

export default Department;
