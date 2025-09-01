import React, { useEffect, useState } from "react";
import "../Css/UsersData.css"; // Reuse same CSS

const ActiveUsers = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // replace with real API
      .then((res) => res.json())
      .then((data) => {
        // Example: simulate only active users (even IDs)
        const activeUsers = data.filter((u) => u.id % 2 === 0);
        setUsers(activeUsers);
      })
      .catch((err) => console.error("Error fetching active users:", err));
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="users-container">
      <h1 className="users-title">Active Users</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="🔍 Search active users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {/* Users Table */}
      <div className="table-wrapper">
        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
              <th>Coins</th>
              <th>Withdraws</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.company?.name}</td>
                  <td>{user.id * 10}</td>
                  <td>{user.id * 2}</td>
                  <td>
                    <button className="active-btn">Active ✅</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="no-data">
                  No active users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveUsers;
