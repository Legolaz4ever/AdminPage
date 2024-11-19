// AdminDashboard.js
import React, { useState } from 'react';
import './AdminDashboard.css';

const AdminDashboard = ({ onLogout }) => {
  const [pendingFarmers, setPendingFarmers] = useState([
    { id: 1, name: 'Pending Farmer 1', location: 'Farmville' },
    { id: 2, name: 'Pending Farmer 2', location: 'Countryside' },
  ]);

  const [activeUsers, setActiveUsers] = useState([
    { id: 3, name: 'Farmer A', role: 'Farmer', location: 'Green Acres' },
    { id: 4, name: 'Buyer B', role: 'Buyer', location: 'Urban City' },
  ]);

  const handleApprove = (id) => {
    alert(`Approved farmer with ID: ${id}`);
  };

  const handleReject = (id) => {
    alert(`Rejected farmer with ID: ${id}`);
  };

  const handleEdit = (id) => {
    alert(`Edit user with ID: ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Deleted user with ID: ${id}`);
  };

  return (
    <div className="dashboard-container">
      <button onClick={onLogout} className="logout-button">Log Out</button>
      <h2>Admin Dashboard</h2>
      <div className="tables-container">
        {/* Pending Farmers Table */}
        <div className="table-section">
          <h3>Pending Requests</h3>
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingFarmers.map((farmer) => (
                <tr key={farmer.id}>
                  <td>{farmer.name}</td>
                  <td>{farmer.location}</td>
                  <td>
                    <button onClick={() => handleApprove(farmer.id)}>Approve</button>
                    <button onClick={() => handleReject(farmer.id)}>Reject</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Active Users Table */}
        <div className="table-section">
          <h3>Active Users</h3>
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
    </div>
  );
};

export default AdminDashboard;