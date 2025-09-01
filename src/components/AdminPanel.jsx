import React from "react";
import Navbar from "./Navbar";
import UsersTable from "./UsersTable";
import "../Css/AdminPanel.css";

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <div className="navbar-section">
        <Navbar />
      </div>
      <div className="table-section">
        <UsersTable />
      </div>
    </div>
  );
};

export default AdminPanel;
