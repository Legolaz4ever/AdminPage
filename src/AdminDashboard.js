// AdminDashboard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = ({ onLogout }) => {
  const navigate = useNavigate();

  const [activeUsers] = useState([
    { id: 3, name: 'Farmer A', role: 'Farmer', location: 'Green Acres' },
    { id: 4, name: 'Buyer B', role: 'Buyer', location: 'Urban City' },
  ]);

  const handleEdit = (id) => {
    alert(`Edit user with ID: ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Deleted user with ID: ${id}`);
  };

  return (
    <div className="dashboard-container">
      {/* Button container for the navigation buttons */}
      <div className="button-container">
        <button onClick={() => navigate('/pending-requests')} className="view-requests-button">
          View Pending Requests
        </button>
        <button onClick={onLogout} className="logout-button">
          Log Out
        </button>
      </div>

      <h2>Active Users</h2>
      <div className="table-section">
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {activeUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.location}</td>
                <td>
                  <button onClick={() => handleEdit(user.id)}>Edit</button>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;