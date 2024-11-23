import React, { useState } from "react";

const EmployeeRequest = () => {
  // Dummy data for initial testing
  const [requests, setRequests] = useState([
    {
      _id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      department: "Engineering",
      employeeId: "EMP001",
      dob: "1990-01-15",
      gender: "Male",
      maritialStatus: "Single",
      designation: "Software Engineer",
      salary: "$70,000",
    },
    {
      _id: "2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      department: "Marketing",
      employeeId: "EMP002",
      dob: "1992-06-20",
      gender: "Female",
      maritialStatus: "Married",
      designation: "Marketing Specialist",
      salary: "$65,000",
    },
  ]);

  const handleDecision = (id, decision) => {
    alert(`Employee ${decision}ed: ${id}`);
    setRequests((prev) => prev.filter((req) => req._id !== id)); // Remove processed request
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Employee Requests
      </h2>
      {requests.length === 0 ? (
        <p className="text-center text-gray-500">No pending requests.</p>
      ) : (
        <div className="space-y-6">
          {requests.map((req) => (
            <div
              key={req._id}
              className="w-full bg-white p-6 rounded-lg shadow-md text-gray-800"
            >
              <h3 className="text-xl font-semibold mb-4">{req.name}</h3>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Email:</span> {req.email}
                </p>
                <p>
                  <span className="font-medium">Employee ID:</span>{" "}
                  {req.employeeId}
                </p>
                <p>
                  <span className="font-medium">Department:</span>{" "}
                  {req.department}
                </p>
                <p>
                  <span className="font-medium">Designation:</span>{" "}
                  {req.designation}
                </p>
                <p>
                  <span className="font-medium">Salary:</span> {req.salary}
                </p>
                <p>
                  <span className="font-medium">DOB:</span> {req.dob}
                </p>
                <p>
                  <span className="font-medium">Gender:</span> {req.gender}
                </p>
                <p>
                  <span className="font-medium">Maritial Status:</span>{" "}
                  {req.maritialStatus}
                </p>
              </div>
              <div className="mt-4 flex justify-end space-x-4">
                <button
                  className="px-4 py-2 text-white bg-green-600 hover:bg-green-700 rounded-md"
                  onClick={() => handleDecision(req._id, "accept")}
                >
                  Accept
                </button>
                <button
                  className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-md"
                  onClick={() => handleDecision(req._id, "reject")}
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EmployeeRequest;
