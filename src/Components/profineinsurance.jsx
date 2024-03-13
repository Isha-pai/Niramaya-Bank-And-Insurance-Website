import React, { useState } from 'react';
import './profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; // Changed icon import

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
      <h2 className="profile-heading"> Company Profile</h2>
      <div className="profile-section">
        <strong className="profile-label">Company Email:</strong>
        {editing ? (
          <div className="input-field">
            <FontAwesomeIcon icon={faEnvelope} className="my-auto mx-auto" />
            <input
              className="LoginInput"
              type="email"
              name="insuranceCompanyEmail"
              value={editedUser.insuranceCompanyEmail}
              onChange={handleChange}
              placeholder="Insurance Company Email"
            />
          </div>
        ) : (
          <span className="profile-text">{editedUser.insuranceCompanyEmail}</span>
        )}
      </div>
      <div className="profile-section">
        <strong className="profile-label">Company Phone Number:</strong>
        {editing ? (
          <div className="input-field">
            <FontAwesomeIcon icon={faPhone} className="my-auto mx-auto" />
            <input
              className="LoginInput"
              type="text"
              name="insuranceCompanyPhoneNumber"
              value={editedUser.insuranceCompanyPhoneNumber}
              onChange={handleChange}
              placeholder="Insurance Company Phone Number"
            />
          </div>
        ) : (
          <span className="profile-text">{editedUser.insuranceCompanyPhoneNumber}</span>
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
