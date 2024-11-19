// LoginPage.js
import React, { useState } from 'react';

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

  const handleSignUp = () => {
    alert('Redirect to Sign Up page or show Sign Up form');
    // In a real app, you would redirect to a sign-up page or show a sign-up form
  };

  return (
    <div className="login-container">
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
      {/* Sign Up button */}
      <button onClick={handleSignUp} className="sign-up-button">Or Sign Up</button>
    </div>
  );
};

export default LoginPage;