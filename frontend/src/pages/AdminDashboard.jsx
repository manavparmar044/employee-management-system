import React from "react";
import { useAuth } from "../context/authContext";
import AdminSidebar from "../components/dashboard/AdminSidebar";
import Navbar from "../components/dashboard/Navbar";
import AdminDetails from "../components/dashboard/AdminDetails";

function AdminDashboard() {
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout()
  }
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 ml-64">
        <Navbar />
        <AdminDetails />
      </div>
    </div>
  );
}

export default AdminDashboard;
