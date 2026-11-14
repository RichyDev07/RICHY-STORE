
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    if (
      !fullName ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill in all fields");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Front-end demonstration only.
    // Real registration requires a secure backend.
    localStorage.setItem("customerEmail", email);
    localStorage.setItem("customerName", fullName);

    alert("Registration form completed successfully!");

    navigate("/Checkout");
  };

  return (
    <div className="signup-container">

      <h1>RICHY STORE</h1>

      <h2>Create Your Account</h2>

      <p className="signup-subtitle">
        Join RICHY STORE and enjoy shopping with us.
      </p>

      <form onSubmit={handleSignUp}>

        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={8}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit">
          CREATE ACCOUNT
        </button>

        <p className="signup-login">
          Already have an account?
          <Link to="/Login"> Login</Link>
        </p>

        <p className="signup-home">
          <Link to="/">Back to Home</Link>
        </p>

      </form>
    </div>
  );
}

export default SignUp;
