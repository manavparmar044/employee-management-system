import axios from 'axios';
import React, { useEffect, useState } from 'react';

const EmployeeRequest = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/employees/pending-employees");
        setEmployees(response.data);
      } catch (error) {
        setError(error.response?.data?.message || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const handleAccept = async (id) => {
    try {
      await axios.put(`http://localhost:5001/api/employees/accept/${id}`);
      setEmployees((prev) => prev.filter((employee) => employee._id !== id));
    } catch (error) {
      console.error("Error accepting employee:", error.message);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/employees/reject/${id}`);
      setEmployees((prev) => prev.filter((employee) => employee._id !== id));
    } catch (error) {
      console.error("Error rejecting employee:", error.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Employee Requests</h1>
      {employees.length > 0 ? (
        <div className="space-y-6">
          {employees.map((employee) => (
            <div
              key={employee._id}
              className="bg-white shadow-md rounded-lg p-6 border border-gray-200 w-full"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">{employee.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <p><span className="font-medium">Email:</span> {employee.email}</p>
                <p><span className="font-medium">Employee ID:</span> {employee.employee_id}</p>
                <p><span className="font-medium">Date of Birth:</span> {new Date(employee.dob).toLocaleDateString()}</p>
                <p><span className="font-medium">Gender:</span> {employee.gender}</p>
                <p><span className="font-medium">Marital Status:</span> {employee.maritalStatus}</p>
                <p><span className="font-medium">Designation:</span> {employee.designation}</p>
                <p><span className="font-medium">Department:</span> {employee.department}</p>
                <p><span className="font-medium">Salary:</span> ₹{employee.salary}</p>
                <p><span className="font-medium">Role:</span> {employee.role}</p>
                <p>
                  <span className="font-medium">Approved:</span>{" "}
                  {employee.isApproved ? "Yes" : "No"}
                </p>
              </div>
              <div className="flex justify-between mt-6">
                <button
                  onClick={() => handleAccept(employee._id)}
                  className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleReject(employee._id)}
                  className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-700">No employees found.</p>
      )}
    </div>
  );
};

export default EmployeeRequest;
