import { Building2, CalendarDays, FileUser, LayoutDashboard, Settings, Users } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className="bg-primOr text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64 px-4 pt-4">
      <div className="h-12 flex items-center justify-center">
        <h2 className="text-2xl">AMCROS</h2>
      </div>
      <div className="pt-4 flex flex-col gap-2">
        {/* Dashboard */}
        <NavLink
          to="/admin-dashboard"
          end
          className={({ isActive }) =>
            `flex items-center space-x-4 py-2.5 px-4 rounded-md ${
              isActive ? "bg-secOr" : "hover:bg-hoverOr"
            }`
          }
        >
          <LayoutDashboard />
          <span>Dashboard</span>
        </NavLink>

        {/* Staff */}
        <NavLink
          to="/admin-dashboard/staff"
          className={({ isActive }) =>
            `flex items-center space-x-4 py-2.5 px-4 rounded-md ${
              isActive ? "bg-secOr" : "hover:bg-hoverOr"
            }`
          }
        >
          <Users />
          <span>Staff</span>
        </NavLink>

        {/* Departments */}
        <NavLink
          to="/admin-dashboard/department"
          className={({ isActive }) =>
            `flex items-center space-x-4 py-2.5 px-4 rounded-md ${
              isActive ? "bg-secOr" : "hover:bg-hoverOr"
            }`
          }
        >
          <Building2 />
          <span>Departments</span>
        </NavLink>

        {/* Calendar */}
        <NavLink
          to="/admin-calendar"
          className={({ isActive }) =>
            `flex items-center space-x-4 py-2.5 px-4 rounded-md ${
              isActive ? "bg-secOr" : "hover:bg-hoverOr"
            }`
          }
        >
          <CalendarDays />
          <span>Calendar</span>
        </NavLink>

        {/* Employee Requests */}
        <NavLink
          to="/admin-dashboard/new-requests"
          className={({ isActive }) =>
            `flex items-center space-x-4 py-2.5 px-4 rounded-md ${
              isActive ? "bg-secOr" : "hover:bg-hoverOr"
            }`
          }
        >
          <FileUser />
          <span>New Requests</span>
        </NavLink>

        {/* Settings */}
        <NavLink
          to="/admin-settings"
          className={({ isActive }) =>
            `flex items-center space-x-4 py-2.5 px-4 rounded-md ${
              isActive ? "bg-secOr" : "hover:bg-hoverOr"
            }`
          }
        >
          <Settings />
          <span>Settings</span>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminSidebar;
