// PendingRequests.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';


const PendingRequests = ({ onLogout }) => {
  const navigate = useNavigate();

  const [pendingFarmers] = useState([
    { id: 1, name: 'Pending Farmer 1', location: 'Farmville' },
    { id: 2, name: 'Pending Farmer 2', location: 'Countryside' },
  ]);

  const handleApprove = (id) => {
    alert(`Approved farmer with ID: ${id}`);
  };

  const handleReject = (id) => {
    alert(`Rejected farmer with ID: ${id}`);
  };

  return (
    <div className="dashboard-container">
      <button onClick={onLogout} className="logout-button">Log Out</button>
      <button onClick={() => navigate('/active-users')} className="view-users-button">View Active Users</button>
      <h2>Pending Requests</h2>
      <div className="table-section">
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
    </div>
  );
};

export default PendingRequests;