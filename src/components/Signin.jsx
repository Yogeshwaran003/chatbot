import React, { useState } from 'react';
import './Signin.css';

const Signin = () => {
  const [mode, setMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2 className="signin-title">Sign In to Impacteers</h2>
        <form className="signin-form">

          {/* Username (only in Sign Up mode) */}
          {!mode && (
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
          )}

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email address"
            />
          </div>

          {/* Password with Font Awesome Eye Icon */}
          <div className="form-group password-group">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Your password"
              />
              {/* eye icon */}
              <i
                className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'} eye-icon`}
                onClick={() => setShowPassword(!showPassword)}
                title={showPassword ? 'Hide Password' : 'Show Password'}
              ></i>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="signin-button">
            {mode ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        {/* Toggle Sign In / Sign Up */}
        <p className="signup-text">
          {mode ? "Don't have an account?" : 'Already have an account?'}{' '}
          <a href="#" onClick={(e) => { e.preventDefault(); setMode(!mode); }}>
            {mode ? 'Sign Up Free' : 'Sign In'}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signin;