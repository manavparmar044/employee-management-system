import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import PrivateRoutes from "./utils/PrivateRoutes";
import RoleBasedRoutes from "./utils/RoleBasedRoutes";
import AdminDetails from "./components/dashboard/AdminDetails";
import Department from "./components/department/Department";
import AddDepartment from "./components/department/AddDepartment";
import EmployeeList from "./components/employee/EmployeeList";
import EmployeeRegister from "./pages/EmployeeRegister";
import EmployeeRequest from "./components/employee/EmployeeRequest";
// import EmployeeList from "./components/employee/EmployeeList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<EmployeeRegister />} />

        {/* Private and Role-Based Routes */}
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoutes>
              <RoleBasedRoutes requiredRole={["admin"]}>
                <AdminDashboard />
              </RoleBasedRoutes>
            </PrivateRoutes>
          }
        >
          <Route index element = {<AdminDetails />}/>
          <Route path = "/admin-dashboard/department" element = {<Department />}/>
          <Route path = "/admin-dashboard/add-department" element = {<AddDepartment />}/>
          <Route path = "/admin-dashboard/staff" element = {<EmployeeList />}/>
          <Route path = "/admin-dashboard/new-requests" element = {<EmployeeRequest />}/>
          </Route>
        <Route
          path="/employee-dashboard"
          element={
            <PrivateRoutes>
              <RoleBasedRoutes requiredRole={["employee"]}>
                <EmployeeDashboard />
              </RoleBasedRoutes>
            </PrivateRoutes>
          }
        />

        {/* Default Redirect */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
