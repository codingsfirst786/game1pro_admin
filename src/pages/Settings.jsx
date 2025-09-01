import React, { useState } from "react";
import "../Css/Settings.css";

const Settings = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    username: "John Doe",
    email: "john@example.com",
    password: "********",
    confirmPassword: "********",
    profilePic: "https://i.pravatar.cc/150?img=3", // random avatar
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile((prev) => ({ ...prev, profilePic: imageUrl }));
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile Updated Successfully ✅");
  };

  return (
    <div className="settings-container">
      <h1 className="settings-title">⚙️ Profile Settings</h1>

      <div className="settings-card">
        {/* Profile Picture */}
        <div className="profile-pic-container">
          <img
            src={profile.profilePic}
            alt="Profile"
            className="profile-pic"
          />
          {isEditing && (
            <label className="upload-btn">
              Change Photo
              <input type="file" accept="image/*" onChange={handleImageChange} hidden />
            </label>
          )}
        </div>

        {/* User Details */}
        <div className="profile-details">
          <div className="form-group">
            <label>Username:</label>
            {isEditing ? (
              <input
                type="text"
                name="username"
                value={profile.username}
                onChange={handleChange}
              />
            ) : (
              <p>{profile.username}</p>
            )}
          </div>

          <div className="form-group">
            <label>Email:</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
              />
            ) : (
              <p>{profile.email}</p>
            )}
          </div>

          <div className="form-group">
            <label>Password:</label>
            {isEditing ? (
              <input
                type="password"
                name="password"
                value={profile.password}
                onChange={handleChange}
              />
            ) : (
              <p>{profile.password}</p>
            )}
          </div>

          <div className="form-group">
            <label>Confirm Password:</label>
            {isEditing ? (
              <input
                type="password"
                name="confirmPassword"
                value={profile.confirmPassword}
                onChange={handleChange}
              />
            ) : (
              <p>{profile.confirmPassword}</p>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="btn-group">
          {isEditing ? (
            <>
              <button className="save-btn" onClick={handleSave}>Save</button>
              <button className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
            </>
          ) : (
            <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit Profile</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
