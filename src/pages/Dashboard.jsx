import React from "react";
import "../Css/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">📊 Game1Pro Dashboard</h1>

      {/* Stats Cards */}
      <div className="dashboard-cards">
        <div className="card users">
          <h2>Total Users</h2>
          <p>1,245</p>
        </div>
        <div className="card withdraws">
          <h2>Total Withdraws</h2>
          <p>530</p>
        </div>
        <div className="card active-users">
          <h2>Active Users</h2>
          <p>980</p>
        </div>
        <div className="card blocked-users">
          <h2>Blocked Users</h2>
          <p>65</p>
        </div>
        <div className="card today-requests">
          <h2>Today's Withdraw Requests</h2>
          <p>23</p>
        </div>
        <div className="card agents">
          <h2>Total Agents</h2>
          <p>150</p>
        </div>
        <div className="card coins">
          <h2>Agents Purchased Coins</h2>
          <p>12,500</p>
        </div>
        <div className="card today-earning">
          <h2>Today's Earning</h2>
          <p>$1,200</p>
        </div>
        <div className="card weekly-earning">
          <h2>This Week's Earning</h2>
          <p>$8,450</p>
        </div>
        <div className="card total-earning">
          <h2>Total Earning</h2>
          <p>$95,000</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
