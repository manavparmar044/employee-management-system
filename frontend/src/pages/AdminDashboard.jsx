import React from "react";
import { useAuth } from "../context/authContext";
import AdminSidebar from "../components/dashboard/AdminSidebar";
import Navbar from "../components/dashboard/Navbar";
import AdminDetails from "../components/dashboard/AdminDetails";
import { Outlet } from "react-router-dom";

function AdminDashboard() {
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout()
  }
  return (
    <div className="flex text-white">
      <AdminSidebar />
      <div className="flex-1 ml-64">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminDashboard;
