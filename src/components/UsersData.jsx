import React, { useEffect, useState } from "react";
import "../Css/UsersData.css"
const UsersData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/paneldata") // ✅ Your backend API
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <div>
      <h2 className="content-heading">Users Data</h2>
      <p>Total Users: <strong>{users.length}</strong></p>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #00ff88" }}>
            <th style={{ padding: "10px", textAlign: "left", color: "#00ff88" }}>Username</th>
            <th style={{ padding: "10px", textAlign: "left", color: "#00ff88" }}>Email</th>
            <th style={{ padding: "10px", textAlign: "left", color: "#00ff88" }}>Account</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={i} style={{ borderBottom: "1px solid rgba(0,255,136,0.2)" }}>
              <td style={{ padding: "8px" }}>{u.username}</td>
              <td style={{ padding: "8px" }}>{u.email}</td>
              <td style={{ padding: "8px" }}>{u.accounts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersData;
