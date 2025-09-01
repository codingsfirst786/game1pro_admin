import React, { useState } from "react";
import "../Css/RemoveCoin.css";

const RemoveCoin = () => {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);
  const [coinAmount, setCoinAmount] = useState("");
  const [transactions, setTransactions] = useState([]);

  // Simulate fetching user data from API
  const fetchUserData = (id) => {
    // Fake users data
    const mockUsers = {
      "101": { id: "101", name: "John Doe" },
      "102": { id: "102", name: "Sarah Smith" },
      "103": { id: "103", name: "Michael Johnson" },
    };
    setUserData(mockUsers[id] || null);
  };

  const handleUserIdChange = (e) => {
    const id = e.target.value;
    setUserId(id);
    if (id) {
      fetchUserData(id);
    } else {
      setUserData(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userData || !coinAmount) return;

    const newTransaction = {
      id: userData.id,
      name: userData.name,
      coins: coinAmount,
      date: new Date().toLocaleString(),
      action: "Removed",
    };

    setTransactions([newTransaction, ...transactions]);
    setUserId("");
    setUserData(null);
    setCoinAmount("");
  };

  return (
    <div className="remove-container">
      <h1 className="remove-title">Remove Coins from Agent / User</h1>

      <form className="remove-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Enter ID</label>
          <input
            type="text"
            value={userId}
            onChange={handleUserIdChange}
            placeholder="Enter  ID"
          />
        </div>

        {userData && (
          <div className="user-preview">
            <p>
              <strong>ID:</strong> {userData.id}
            </p>
            <p>
              <strong>Name:</strong> {userData.name}
            </p>
          </div>
        )}

        <div className="form-group">
          <label>Coin Amount</label>
          <input
            type="number"
            value={coinAmount}
            onChange={(e) => setCoinAmount(e.target.value)}
            placeholder="Enter Coin Amount to Remove"
          />
        </div>

        <button type="submit" className="remove-btn">
          Confirm Remove
        </button>
      </form>

      {transactions.length > 0 && (
        <div className="transactions">
          <h2>Removed Coins History</h2>
          <table className="transactions-table">
            <thead>
              <tr>
                <th>Agent ID</th>
                <th>Name</th>
                <th>Coins Removed</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, index) => (
                <tr key={index}>
                  <td>{tx.id}</td>
                  <td>{tx.name}</td>
                  <td>{tx.coins}</td>
                  <td>{tx.date}</td>
                  <td className="removed">{tx.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RemoveCoin;
