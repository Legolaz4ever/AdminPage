// LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/Users/adilkhanorynbayev/admin-dashboard/src/photo_2024-11-21 10.06.24.jpeg'; // Adjust the path based on where your logo is saved

const LoginPage = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      if (email && password) {
        onLogin();
      } else {
        alert('Please enter both email and password');
      }
    };
  
    return (
      <div className="login-container">
        <img src={logo} alt="Logo" className="logo" /> {/* Add logo here */}
        <h2>Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    );
  };
  
  export default LoginPage;