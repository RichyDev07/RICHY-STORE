
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter your email and password");
      return;
    }

    // Temporary demonstration only.
    // This does not verify the customer's account.
    localStorage.setItem("customerEmail", email);

    navigate("/Checkout");
  };

  return (
    <div className="login-container">

      <h1>RICHY STORE</h1>
      <h2>Welcome Back!</h2>

      <p className="login-subtitle">
        Login to continue shopping with us.
      </p>

      <form onSubmit={handleLogin}>

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">
          LOGIN
        </button>

        <p className="signup-text">
          Don't have an account?
          <Link to="/SignUp"> Create Account</Link>
        </p>

        <p className="back-home">
          <Link to="/">Back to Home</Link>
        </p>

      </form>

    </div>
  );
}

export default Login;
