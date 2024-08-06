import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ email }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    navigate("/ec-frontend/login"); // Redirect to login page
  };

  return (
    <header className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white p-4 flex items-center justify-between shadow-xl">
      <h1 className="text-3xl font-extrabold tracking-tight">EC Store</h1>
      <div className="flex items-center space-x-6">
        {email ? (
          <>
            <span className="text-lg font-medium">Logged in as: {email}</span>
            <button
              onClick={handleLogout}
              className="bg-white text-blue-600 font-semibold hover:bg-gray-200 py-1 px-4 rounded transition-colors duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/ec-frontend/login"
            className="bg-white text-blue-600 font-semibold hover:bg-gray-200 py-1 px-4 rounded transition-colors duration-300"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
