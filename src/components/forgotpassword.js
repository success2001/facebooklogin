// src/components/ForgotPassword.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handlePasswordReset = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to: ${email}`);
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <h1>Forgotten Password</h1>
        <p>Please enter your email to search for your account.</p>

        <form onSubmit={handlePasswordReset}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Search</button>
        </form>

        <Link to="/">Back to Login</Link>
      </div>
    </div>
  );
}

export default ForgotPassword;
