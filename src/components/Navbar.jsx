import React from "react";
import "../Css/Navbar.css";

const Navbar = () => {
  return (
    <div className="withdraw-sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li>Dashboard</li>
        <li>Users</li>
        <li>Games</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Navbar;
