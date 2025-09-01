import React, { useState, useEffect } from "react";
import "../Css/Agents.css"; // Import CSS file

const Agents = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const sampleAgents = [
      { id: 1, name: "John Doe", payment: 2500, coins: 500 },
      { id: 2, name: "Alice Smith", payment: 1800, coins: 320 },
      { id: 3, name: "Michael Brown", payment: 4000, coins: 950 },
      { id: 4, name: "Emma Wilson", payment: 1200, coins: 200 },
      { id: 5, name: "David Johnson", payment: 3000, coins: 700 },
    ];

    // Add random status
    const agentsWithStatus = sampleAgents.map((agent) => ({
      ...agent,
      status: Math.random() > 0.5 ? "Active" : "Blocked",
    }));

    setAgents(agentsWithStatus);
  }, []);

  return (
    <div className="agents-container">
      <h1 className="agents-title">Agents Data</h1>

      <div className="table-wrapper">
        <table className="agents-table">
          <thead>
            <tr>
              <th>Agent ID</th>
              <th>Name</th>
              <th>Total Payment ($)</th>
              <th>Coins</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent) => (
              <tr key={agent.id}>
                <td>{agent.id}</td>
                <td>{agent.name}</td>
                <td>${agent.payment.toLocaleString()}</td>
                <td>{agent.coins}</td>
                <td>
                  {agent.status === "Active" ? (
                    <button className="status-btn active">Active</button>
                  ) : (
                    <button className="status-btn blocked">Blocked</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Agents;
