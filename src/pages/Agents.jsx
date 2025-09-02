import React, { useState, useEffect } from "react";
import "../Css/Agents.css";

const sampleAccounts = [
  { id: "1001", name: "John Doe", payment: 2500, coins: 500 },
  { id: "1002", name: "Alice Smith", payment: 1800, coins: 320 },
  { id: "1003", name: "Michael Brown", payment: 4000, coins: 950 },
  { id: "1004", name: "Emma Wilson", payment: 1200, coins: 200 },
  { id: "1005", name: "David Johnson", payment: 3000, coins: 700 },
];

const Agents = () => {
  const [agents, setAgents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accountId, setAccountId] = useState("");
  const [accountDetails, setAccountDetails] = useState(null);

  useEffect(() => {
    // Preload dummy agents with random status
    const initialAgents = sampleAccounts.slice(0, 3).map((agent) => ({
      ...agent,
      status: Math.random() > 0.5 ? "Active" : "Blocked",
    }));
    setAgents(initialAgents);
  }, []);

  // Fetch account details by ID
  const handleFetchAccount = () => {
    const found = sampleAccounts.find((acc) => acc.id === accountId);
    if (found) {
      setAccountDetails(found);
    } else {
      setAccountDetails(null);
      alert("Account not found!");
    }
  };

  // Add agent
  const handleAddAgent = () => {
    if (!accountDetails) return;

    const newAgent = {
      ...accountDetails,
      status: "Active",
    };

    setAgents((prev) => [...prev, newAgent]);
    setIsModalOpen(false);
    setAccountId("");
    setAccountDetails(null);
  };

  return (
    <div className="agents-container">
      <h1 className="agents-title">Agents Data</h1>

      {/* Add Agent Button */}
      <button className="add-agent-btn" onClick={() => setIsModalOpen(true)}>
        + Add Agent
      </button>

      {/* Agents Table */}
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
            {agents.map((agent, index) => (
              <tr key={index}>
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

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Add New Agent</h2>

            <label>Enter Account ID:</label>
            <input
              type="text"
              value={accountId}
              onChange={(e) => setAccountId(e.target.value)}
              placeholder="e.g. 1002"
            />
            <button onClick={handleFetchAccount} className="make-agent-btn">Fetch Account</button>

            {/* Show fetched details */}
            {accountDetails && (
              <div className="account-preview">
                <p><strong>Name:</strong> {accountDetails.name}</p>
                <p><strong>Payment:</strong> ${accountDetails.payment}</p>
                <p><strong>Coins:</strong> {accountDetails.coins}</p>
                <button className="make-agent-btn" onClick={handleAddAgent}>
                  ✅ Make Agent
                </button>
              </div>
            )}

            <button className="close-btn" onClick={() => setIsModalOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Agents;
