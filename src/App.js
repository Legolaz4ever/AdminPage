// App.js
import React, { useState } from 'react';
import './App.css';
import AdminDashboard from './AdminDashboard';
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
    <div className="App">
      {isLoggedIn ? (
        // If logged in, show the AdminDashboard with the logout function passed in
        <AdminDashboard onLogout={handleLogout} />
      ) : (
        // If not logged in, show the LoginPage
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;