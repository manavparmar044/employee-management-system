import { Building2, CalendarDays, LayoutDashboard, Settings, Users } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className="bg-slate-500 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64 px-4 pt-4">
      <div className="h-12 flex items-center justify-center">
        <h2 className="text-2xl">MCROSS</h2>
      </div>
      <div className="pt-4 flex flex-col gap-2">
        <NavLink
          to="/admin-dashboard"
          className={({ isActive }) =>
            `flex items-center space-x-4 py-2.5 px-4 rounded-md ${
              isActive ? "bg-slate-700" : "hover:bg-slate-600"
            }`
          }
        >
          <LayoutDashboard />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/admin-staff"
          className={({ isActive }) =>
            `flex items-center space-x-4 py-2.5 px-4 rounded-md ${
              isActive ? "bg-slate-700" : "hover:bg-slate-600"
            }`
          }
        >
          <Users />
          <span>Staff</span>
        </NavLink>
        <NavLink
          to="/admin-departments"
          className={({ isActive }) =>
            `flex items-center space-x-4 py-2.5 px-4 rounded-md ${
              isActive ? "bg-slate-700" : "hover:bg-slate-600"
            }`
          }
        >
          <Building2 />
          <span>Departments</span>
        </NavLink>
        <NavLink
          to="/admin-calendar"
          className={({ isActive }) =>
            `flex items-center space-x-4 py-2.5 px-4 rounded-md ${
              isActive ? "bg-slate-700" : "hover:bg-slate-600"
            }`
          }
        >
          <CalendarDays />
          <span>Calendar</span>
        </NavLink>
        <NavLink
          to="/admin-settings"
          className={({ isActive }) =>
            `flex items-center space-x-4 py-2.5 px-4 rounded-md ${
              isActive ? "bg-slate-700" : "hover:bg-slate-600"
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
