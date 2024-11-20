// SignUpPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUpPage.css';

const SignUpPage = ({ onSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Add your sign-up logic here (e.g., send data to a backend server)
    alert(`Account created for ${email}`);
    onSignUp(); // Redirect or perform other actions after successful sign-up
  };

  return (
    <div className="signup-container">
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

      {/* Add a "Log In" button that links to the Login page */}
      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </div>
  );
};

export default SignUpPage;