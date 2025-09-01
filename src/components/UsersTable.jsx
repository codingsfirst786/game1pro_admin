
// import React, { useEffect, useState } from "react";
// import "../Css/UsersTable.css";

// const UserTable = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch users on mount
//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = () => {
//     fetch("http://localhost:3000/paneldata")
//       .then((res) => res.json())
//       .then((data) => {
//         setUsers(data);
//         setLoading(false);
//       })
//       .catch((err) => console.error(err));
//   };

//   // Toggle Restrict status
//   const toggleRestrict = async (id) => {
//     try {
//       const res = await fetch(`http://localhost:3000/restrictuser/${id}`, {
//         method: "PUT",
//       });
//       const data = await res.json();

//       if (res.ok) {
//         // Update user list locally
//         setUsers((prev) =>
//           prev.map((u) =>
//             u._id === id ? { ...u, Restrict: data.Restrict } : u
//           )
//         );
//       } else {
//         console.error(data.message);
//       }
//     } catch (error) {
//       console.error("Error toggling Restrict:", error);
//     }
//   };

//   if (loading)
//     return (
//       <p style={{ color: "#00ff88", textAlign: "center" }}>
//         Loading users...
//       </p>
//     );

//   return (
//     <div className="user-table-wrapper">
//       <div className="table-search">
//         <input type="text" placeholder="Search users..." />
//       </div>
//       <div className="table-responsive">
//         <table className="withdraw-table">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Email</th>
//               <th>Username</th>
//               <th>Accounts</th>
//               <th>Control</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.length > 0 ? (
//               users.map((user) => (
//                 <tr key={user._id}>
//                   <td>{user._id}</td>
//                   <td>{user.email}</td>
//                   <td>{user.username || "N/A"}</td>
//                   <td>
//                     {user.accounts && user.accounts.length > 0 ? (
//                       <ul>
//                         {user.accounts.map((acc) => (
//                           <li key={acc._id}>
//                             {acc.bank} - {acc.number} ({acc.holder})
//                           </li>
//                         ))}
//                       </ul>
//                     ) : (
//                       "No accounts"
//                     )}
//                   </td>
//                   <td>
//                     <button
//                       className={user.Restrict ? "blocked-btn" : "active-btn"}
//                       onClick={() => toggleRestrict(user._id)}
//                     >
//                       {user.Restrict ? "Blocked" : "Active"}
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5">No users found</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UserTable;
import React, { useEffect, useState } from "react";
import "../Css/UsersTable.css";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(""); // ✅ search state

  // Fetch users on mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch("http://localhost:3000/paneldata")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  // Toggle Restrict status
  const toggleRestrict = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/restrictuser/${id}`, {
        method: "PUT",
      });
      const data = await res.json();

      if (res.ok) {
        // Update user list locally
        setUsers((prev) =>
          prev.map((u) =>
            u._id === id ? { ...u, Restrict: data.Restrict } : u
          )
        );
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error toggling Restrict:", error);
    }
  };

  if (loading)
    return (
      <p style={{ color: "#00ff88", textAlign: "center" }}>
        Loading users...
      </p>
    );

  // ✅ filter users by email
  const filteredUsers = users.filter((user) =>
    user.email?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="user-table-wrapper">
      <div className="table-search">
        <input
          type="text"
          placeholder="Search by email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)} // ✅ update state
        />
      </div>
      <div className="table-responsive">
        <table className="withdraw-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Username</th>
              <th>Accounts</th>
              <th>Control</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.email}</td>
                  <td>{user.username || "N/A"}</td>
                  <td>
                    {user.accounts && user.accounts.length > 0 ? (
                      <ul>
                        {user.accounts.map((acc) => (
                          <li key={acc._id}>
                            {acc.bank} - {acc.number} ({acc.holder})
                          </li>
                        ))}
                      </ul>
                    ) : (
                      "No accounts"
                    )}
                  </td>
                  <td>
                    <button
                      className={user.Restrict ? "blocked-btn" : "active-btn"}
                      onClick={() => toggleRestrict(user._id)}
                    >
                      {user.Restrict ? "Blocked" : "Active"}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
