//import BackIcon from './back-icon.svg';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import the CSS file for the component

function LoginPage() {
  const navigate = useNavigate(); // React Router's navigation hook

  const handleLogin = () => {
    // Perform login logic
    // Assuming login is successful, navigate to DashboardPage
    navigate('/frontpage');
  };

  return (
    <div className="login-page-container">
      <div className="background-image">
        <div className="login-form-container">
          <h2 className="form-heading">Admin Login</h2>
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
            <button type="submit" className="form-button" onClick={handleLogin}>Login</button>
          </form>
          <p className="register-link">Don't have an account? <Link to="/registration">Register</Link></p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
