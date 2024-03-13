import React, { useState } from 'react';
import './profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const UserProfile = ({ user }) => {
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    // You would typically send the updated user data to the server here
    // For simplicity, we'll just update the state in this example
    setEditing(false);
    // Update user data in the parent component or make an API call
    // with the editedUser data
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div className="profile">
      <h2 className="profile-heading">User Profile</h2>
      <div className="profile-section">
        <strong className="profile-label">Bank Name:</strong>
        {editing ? (
          <div className="input-field">
            <FontAwesomeIcon icon={faUser} className="my-auto mx-auto" />
            <input
              className="LoginInput"
              type="text"
              name="bankName"
              onChange={handleChange}
              placeholder="Bank Name"
            />
          </div>
        ) : (
          <span className="profile-text">{editedUser.bankName}</span>
        )}
      </div>
      <div className="profile-section">
        <strong className="profile-label">Bank Logo:</strong>
        {editing ? (
          <div className="input-field">
            <FontAwesomeIcon icon={faEnvelope} className="my-auto mx-auto" />
            <input
              className="LoginInput"
              type="text"
              name="bankLogo"
              onChange={handleChange}
              placeholder="Bank Logo"
            />
          </div>
        ) : (
          <span className="profile-text">{editedUser.bankLogo}</span>
        )}
      </div>
      <div className="profile-section">
        <strong className="profile-label">Bank Email ID:</strong>
        {editing ? (
          <div className="input-field">
            <FontAwesomeIcon icon={faEnvelope} className="my-auto mx-auto" />
            <input
              className="LoginInput"
              type="email"
              name="bankEmailID"
              onChange={handleChange}
              placeholder="Bank Email ID"
            />
          </div>
        ) : (
          <span className="profile-text">{editedUser.bankEmailID}</span>
        )}
      </div>
      <div className="profile-section">
        <strong className="profile-label">Officer Name:</strong>
        {editing ? (
          <div className="input-field">
            <FontAwesomeIcon icon={faLock} className="my-auto mx-auto" />
            <input
              className="LoginInput"
              type="text"
              name="officerName"
              onChange={handleChange}
              placeholder="Officer Name"
            />
          </div>
        ) : (
          <span className="profile-text">{editedUser.officerName}</span>
        )}
      </div>
      <div className="profile-section">
        <strong className="profile-label">Officer Position:</strong>
        {editing ? (
          <div className="input-field">
            <FontAwesomeIcon icon={faLock} className="my-auto mx-auto" />
            <input
              className="LoginInput"
              type="text"
              name="officerPosition"
              onChange={handleChange}
              placeholder="Officer Position"
            />
          </div>
        ) : (
          <span className="profile-text">{editedUser.officerPosition}</span>
        )}
      </div>
      <div className="profile-section">
        <strong className="profile-label">Officer Phone Number:</strong>
        {editing ? (
          <div className="input-field">
            <FontAwesomeIcon icon={faLock} className="my-auto mx-auto" />
            <input
              className="LoginInput"
              type="text"
              name="officerPhoneNumber"
              onChange={handleChange}
              placeholder="Officer Phone Number"
            />
          </div>
        ) : (
          <span className="profile-text">{editedUser.officerPhoneNumber}</span>
        )}
      </div>
      {editing ? (
        <button className="profile-button" onClick={handleSave}>
          Save
        </button>
      ) : (
        <button className="profile-button" onClick={handleEdit}>
          Edit
        </button>
      )}
    </div>
  );
};

export default UserProfile;
