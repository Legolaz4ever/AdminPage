// AdminDashboard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';
import ConfirmationModal from './ConfirmationModal';

const AdminDashboard = ({ onLogout }) => {
  const navigate = useNavigate();
  const [activeUsers, setActiveUsers] = useState([
    { id: 3, name: 'Farmer A', role: 'Farmer', location: 'Green Acres' },
    { id: 4, name: 'Buyer B', role: 'Buyer', location: 'Urban City' },
    { id: 5, name: 'Buyer C', role: 'Buyer', location: 'Astana' },
    { id: 6, name: 'Buyer D', role: 'Farmer', location: 'Urban City' },
    { id: 3, name: 'Farmer A', role: 'Farmer', location: 'Green Acres' },
    { id: 4, name: 'Buyer B', role: 'Buyer', location: 'Urban City' },
    { id: 5, name: 'Buyer C', role: 'Buyer', location: 'Astana' },
    { id: 6, name: 'Buyer D', role: 'Farmer', location: 'Urban City' },

  ]);
  const [showModal, setShowModal] = useState(false);
  const [modalAction, setModalAction] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleEdit = (id) => {
    alert(`Edit user with ID: ${id}`);
  };

  const handleDelete = (id) => {
    setSelectedUserId(id);
    setModalAction('delete');
    setShowModal(true);
    console.log('Delete button clicked, showModal:', showModal); // Add this line
  };
  
  const handleReject = (id) => {
    setSelectedUserId(id);
    setModalAction('reject');
    setShowModal(true);
    console.log('Reject button clicked, showModal:', showModal); // For debugging
  };

  const confirmAction = () => {
    if (modalAction === 'delete') {
      setActiveUsers((prevUsers) => prevUsers.filter((user) => user.id !== selectedUserId));
      console.log(`Deleted user with ID: ${selectedUserId}`);
    } else if (modalAction === 'reject') {
      console.log(`Rejected user with ID: ${selectedUserId}`);
    }
    setShowModal(false);
  };

  const cancelAction = () => {
    setShowModal(false); // Close the modal without action
  };

  return (
    <div className="dashboard-container">
      <div className="button-container">
        <button onClick={() => navigate('/pending-requests')} className="view-requests-button">
          View Pending Requests
        </button>
        <button onClick={onLogout} className="logout-button">Log Out</button>
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

      {/* Render ConfirmationModal if showModal is true */}
      {showModal && (
  <>
    {console.log('Modal action:', modalAction)} {/* For debugging */}
    <ConfirmationModal
      message="Are you sure you want to proceed?"
      onConfirm={confirmAction}
      onCancel={cancelAction}
    />
  </>
)}
    </div>
  );
};

export default AdminDashboard;