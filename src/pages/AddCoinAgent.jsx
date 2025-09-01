import React, { useState } from "react";
import "../Css/AddCoinAgent.css";

const mockAgents = {
  "101": { id: "101", name: "John Doe" },
  "102": { id: "102", name: "Jane Smith" },
  "103": { id: "103", name: "Ali Khan" },
};

const AddCoinAgent = () => {
  const [agentId, setAgentId] = useState("");
  const [agentInfo, setAgentInfo] = useState(null);
  const [coinAmount, setCoinAmount] = useState("");
  const [records, setRecords] = useState([]);

  const handleIdChange = (e) => {
    const id = e.target.value;
    setAgentId(id);
    setAgentInfo(mockAgents[id] || null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agentInfo || !coinAmount) return;

    const newRecord = {
      id: agentInfo.id,
      name: agentInfo.name,
      coins: coinAmount,
      date: new Date().toLocaleString(),
    };

    setRecords([newRecord, ...records]);
    setAgentId("");
    setAgentInfo(null);
    setCoinAmount("");
  };

  return (
    <div className="addcoin-container">
      <h2 className="page-title">Add Coins to Agent</h2>

      {/* Form */}
      <form className="addcoin-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Agent ID</label>
          <input
            type="text"
            value={agentId}
            onChange={handleIdChange}
            placeholder="Enter Agent ID"
          />
          {agentInfo && (
            <div className="agent-preview">
              <strong>{agentInfo.name}</strong> (ID: {agentInfo.id})
            </div>
          )}
        </div>

        <div className="form-group">
          <label>Coin Amount</label>
          <input
            type="number"
            value={coinAmount}
            onChange={(e) => setCoinAmount(e.target.value)}
            placeholder="Enter coins to send"
          />
        </div>

        <button type="submit" className="submit-btn">
          Send & Confirm
        </button>
      </form>

      {/* Table */}
      <div className="table-wrapper">
        <h3 className="table-title">Coin Transactions</h3>
        <table className="records-table">
          <thead>
            <tr>
              <th>Agent ID</th>
              <th>Agent Name</th>
              <th>Coin Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {records.length === 0 ? (
              <tr>
                <td colSpan="4" className="no-data">
                  No records found
                </td>
              </tr>
            ) : (
              records.map((rec, index) => (
                <tr key={index}>
                  <td>{rec.id}</td>
                  <td>{rec.name}</td>
                  <td>{rec.coins}</td>
                  <td>{rec.date}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddCoinAgent;
