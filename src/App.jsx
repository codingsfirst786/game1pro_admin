import React from "react";
import Navbar from "./components/Navbar";
import UserTable from "./components/UsersTable";
import "./App.css";

const App = () => {
  return (
    <div className="withdraw-page">
      <div className="withdraw-layout">
        <Navbar />
        <div className="withdraw-content">
          <h1 className="withdraw-heading">Admin Panel</h1>
          <UserTable />
        </div>
      </div>
    </div>
  );
};

export default App;
