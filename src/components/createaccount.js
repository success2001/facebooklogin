// src/components/CreateAccount.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CreateAccount.css";

function CreateAccount() {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    alert(`Account created for ${userDetails.firstName} ${userDetails.lastName}`);
  };

  return (
    <div className="create-account-page">
      <div className="create-account-container">
        <h1>Create New Account</h1>
        <p>It's quick and easy.</p>

        <form onSubmit={handleCreateAccount}>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={userDetails.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={userDetails.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userDetails.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userDetails.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign Up</button>
        </form>

        <Link to="/">Back to Login</Link>
      </div>
    </div>
  );
}

export default CreateAccount;
