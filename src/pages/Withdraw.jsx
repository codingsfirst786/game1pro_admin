import React, { useEffect, useState } from "react";
import "../Css/Withdraw.css";

const Withdraw = () => {
  const [requests, setRequests] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") // replace with your API
      .then((res) => res.json())
      .then((data) => setRequests(data.slice(0, 10))) // take first 10 requests
      .catch((err) => console.error("Error fetching withdraw requests:", err));
  }, []);

  const filteredRequests = requests.filter((req) =>
    req.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="withdraw-container">
      <h1 className="withdraw-title">Withdraw Requests</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search request..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      <div className="table-wrapper">
        <table className="withdraw-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Request</th>
              <th>Account No</th>
              <th>Account Name</th>
              <th>Bank Name</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.length > 0 ? (
              filteredRequests.map((req) => (
                <tr key={req.id}>
                  <td>{req.id}</td>
                  <td>{req.id}</td>
                  <td>{req.id}</td>
                  <td>{req.id}</td>
                  <td>{req.id}</td>
                  <td>{req.id}</td>
                  <td>
                    <button className="blocked-btn">Pending 🚫</button>
                    <button className="active-btn">Approve ✅</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="no-data">
                  No withdraw requests found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Withdraw;
