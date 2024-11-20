import React from 'react';
import { useAuth } from '../../context/authContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-indigo-600 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Welcome Message */}
        <p className="text-sm sm:text-base">
          Welcome, <span className="font-semibold">{user.name}</span>
        </p>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-sm px-4 py-2 rounded-md transition-all duration-300"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
