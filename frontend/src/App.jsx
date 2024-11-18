import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Navigate to = "/"/>}/>
        <Route path="/login" element = {<Login />}/>
        <Route path="/admin-dashboard" element = {<AdminDashboard />}/>
        <Route path="employee-dashboard" element = {<EmployeeDashboard />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
