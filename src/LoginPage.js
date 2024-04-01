import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'; // Import the CSS file for the component

function LoginPage() {
  return (
    <div className="login-page-container">
      <h2 className="form-heading">Login</h2>
      <form className="login-form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-input"
        />
        <button type="submit" className="form-button">Login</button>
      </form>
      <p className="register-link">Don't have an account? <Link to="/registration">Register</Link></p>
    </div>
  );
}

export default LoginPage;
