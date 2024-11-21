// SignUpPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUpPage.css';
import logo from '/Users/adilkhanorynbayev/admin-dashboard/src/photo_2024-11-21 10.06.24.jpeg'; // Adjust the path based on where your logo is saved

const SignUpPage = ({ onSignUp }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleSignUp = () => {
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      alert(`Account created for ${email}`);
      onSignUp();
    };
  
    return (
      <div className="signup-container">
        <img src={logo} alt="Logo" className="logo" /> {/* Add logo here */}
        <h2>Sign Up</h2>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleSignUp}>Sign Up</button>
        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    );
  };
  
  export default SignUpPage;