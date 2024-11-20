// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import AdminDashboard from './AdminDashboard';
import PendingRequests from './PendingRequests';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSignUp = () => {
    setIsLoggedIn(false); // Optionally, you can redirect to the login page after sign-up
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
          <Routes>
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/signup" element={<SignUpPage onSignUp={handleSignUp} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;