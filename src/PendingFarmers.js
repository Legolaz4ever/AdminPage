import React, { useState } from 'react';

const PendingFarmers = () => {
  const [farmers, setFarmers] = useState([
    { id: 1, name: 'Farmer John', location: 'Farmville' },
    { id: 2, name: 'Farmer Jane', location: 'Countryside' }
  ]);

  const handleApprove = (id) => {
    alert(`Approved farmer with ID: ${id}`);
  };

  const handleReject = (id) => {
    alert(`Rejected farmer with ID: ${id}`);
  };

  return (
    <div>
      <h3>Pending Farmers</h3>
      <ul>
        {farmers.map((farmer) => (
          <li key={farmer.id}>
            {farmer.name} - {farmer.location}
            <button onClick={() => handleApprove(farmer.id)}>Approve</button>
            <button onClick={() => handleReject(farmer.id)}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PendingFarmers;