import React, { useState } from 'react';
import '../styles/logincard.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const LoginCardComponent = ({
  // onLogin,
  onSignUp,
  onForgotPassword,
  logo = '',
  title = 'Sign In',
  subtitle = "Please sign in to resume your espisode"
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/account/login`, {
        email: email,
        password: password
      });

      alert('dang nhap thành công!');
      navigate('/home');
    } catch (err) {

      const errorMessage = err.response?.data?.message || 'dang nhap thất bại. Vui lòng thử lại.';
      setError(errorMessage);
      console.error('Signin error:', err);
    } finally {
      setLoading(false);
    }
    
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  
    const navigate = useNavigate();
  
  return (
    <div className="login-card-container">
      <div className="login-card">
        {/* Logo */}
        <div className="login-logo">{logo}</div>

        {/* Title */}
        <h1 className="login-title">{title}</h1>

        {/* Subtitle */}
        <p className="login-subtitle">{subtitle}</p>

        {/* Form */}
        <form onSubmit={handleLogin} className="login-form">

          <div className="form-group">
            <div className="input-wrapper">
              <input
                type="email"
                id='emailField'
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                id="passwordField"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                required
              />
              <button
                type="button"
                onClick={handleTogglePassword}
                className="toggle-password"
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>


          <div className="form-footer">
            <label className="checkbox-wrapper">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="checkbox"
              />
              <span>Remember me</span>
            </label>
            <button
              type="button"
              onClick={onForgotPassword}
              className="forgot-password-link"
            >
              Forgot password?
            </button>
          </div>


          <button type="submit" className="login-button">
            Log in
          </button>
        </form>


        <p className="signup-text">
          Don't have an account?{' '}
          <Link to="/signup">
            <button
              type="button"
              onClick={onSignUp}
              className="signup-link"
            >
              Sign up now
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginCardComponent;