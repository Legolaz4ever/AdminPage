// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import AdminDashboard from './AdminDashboard';
import PendingRequests from './PendingRequests';
import LoginPage from './LoginPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        {isLoggedIn ? (
          <Routes>
            <Route path="/active-users" element={<AdminDashboard onLogout={handleLogout} />} />
            <Route path="/pending-requests" element={<PendingRequests onLogout={handleLogout} />} />
            <Route path="*" element={<Navigate to="/active-users" />} />
          </Routes>
        ) : (
          <LoginPage onLogin={handleLogin} />
        )}
      </div>
    </Router>
  );
}

export default App;