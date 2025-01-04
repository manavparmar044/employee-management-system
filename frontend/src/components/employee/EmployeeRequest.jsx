import React, { useEffect, useState } from 'react';

const EmployeeRequest = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/employees");
        const data = await response.json();

        if (response.ok) {
          setEmployees(data);
        } else {
          throw new Error("Failed to fetch employees");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Employee Requests</h1>
      {employees.length > 0 ? (
        <ul>
          {employees.map((employee) => (
            <li key={employee._id}>
              {employee.name} - {employee.designation}
            </li>
          ))}
        </ul>
      ) : (
        <p>No employees found.</p>
      )}
    </div>
  );
};

export default EmployeeRequest;
