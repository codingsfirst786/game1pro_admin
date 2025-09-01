import React, { useEffect, useState } from "react";
import "../Css/UsersData.css"; // Reuse same CSS

const BlockUsers = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // replace with real API
      .then((res) => res.json())
      .then((data) => {
        // Example: simulate blocked users (odd IDs)
        const blockedUsers = data.filter((u) => u.id % 2 !== 0);
        setUsers(blockedUsers);
      })
      .catch((err) => console.error("Error fetching blocked users:", err));
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="users-container">
      <h1 className="users-title">Blocked Users</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="🔍 Search blocked users..."
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
                  <td>{user.id * 5}</td>
                  <td>{user.id}</td>
                  <td>
                    <button className="blocked-btn">Block 🚫</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="no-data">
                  No blocked users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlockUsers;
