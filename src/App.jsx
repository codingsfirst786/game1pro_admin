import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Withdraw from "./pages/Withdraw";
import UsersData from "./pages/UsersData";
import Settings from "./pages/Settings";
import './App.css'
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import ActiveUsers from "./pages/Activeusers";
import BlockUsers from "./pages/BlockUsers";
import Agents from "./pages/Agents";
import AgentsPurchasedData from "./pages/AgentsPurchasedData";
import AddCoinAgent from "./pages/AddCoinAgent";
import RemoveCoin from "./pages/RemoveCoin";

const App = () => {
  return (
    <Router>
      <div className="withdraw-layout">
        <Sidebar />
        <div className="withdraw-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/users" element={<UsersData />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/addcoin" element={<AddCoinAgent />} />
            <Route path="/removecoin" element={<RemoveCoin />} />
            <Route path="/agentpayments" element={<AgentsPurchasedData />} />
            <Route path="/activeusers" element={<ActiveUsers />} />
            <Route path="/blockusers" element={<BlockUsers />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
