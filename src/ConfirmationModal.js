// ConfirmationModal.js
import React from 'react';
import './ConfirmationModal.css';

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onConfirm} className="confirm-button">Yes</button>
        <button onClick={onCancel} className="cancel-button">No</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;