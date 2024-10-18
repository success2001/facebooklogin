// src/components/LoginPage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in with email: ${email} and password: ${password}`);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="left-section">
          <h1>facebook</h1>
          <p>Connect with friends and the world around you on Facebook.</p>
        </div>

        <div className="right-section">
          <div className="login-form">
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Log In</button>
            </form>

            {/* Link to Forgotten Password */}
            <Link to="/forgot-password">Forgotten password?</Link>

            <div className="divider"></div>

            {/* Button to Create New Account */}
            <Link to="/create-account">
              <button className="signup-btn">Create New Account</button>
            </Link>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
