import React, { useState } from 'react';
import '../styles/signupcard.css';
import{Link, useNavigate} from 'react-router-dom';
const SignUpCard = ({
  title = 'Signup',
  onGoogleSignup = () => alert('Still in development'),
  // onLoginClick = () => alert('Login clicked'),
  googleButtonText = 'Login by Google',
  signupButtonText = 'Register',
  loginText = 'Already have an account?',
  loginButtonText = 'LOGIN'
}) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    captcha: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const navigate = useNavigate();

  const onSignup = (data) => {
    navigate('/login')
  }
  const handleSignup = (e) => {
    e.preventDefault();
    onSignup(formData);
  };

  return (
    <div className="signup-card">
      <h1 className="signup-title">{title}</h1>

      <button className="google-signup-btn" onClick={onGoogleSignup}>
        
        {googleButtonText}
      </button>

      <form onSubmit={handleSignup} className="signup-form">
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Account
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Enter account"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter password"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">

            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Enter password again"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter email"
            required
          />
        </div>

        <div className="form-group captcha-group">
          <label htmlFor="captcha" className="form-label">
            Captcha code
          </label>
          <div className="captcha-container">
            <input
              type="text"
              id="captcha"
              name="captcha"
              value={formData.captcha}
              onChange={handleInputChange}
              placeholder="Enter captcha code"
              required
            />
            <div className="captcha-box">a16a1acd</div>
          </div>
        </div>

        <button type="submit" className="signup-btn">
          {signupButtonText}
        </button>
      </form>

      <div className="login-section">
        <Link to="/login">
          <a>{loginText}</a>
          <button className="login-btn"
          // onClick={onLoginClick}
          >
            {loginButtonText}
          </button>
          <a>now!</a>
        </Link>

      </div>
    </div>
  );
};

export default SignUpCard;