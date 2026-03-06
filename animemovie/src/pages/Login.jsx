import React, { useState } from 'react';
import LoginCardComponent from '../components/logincard';
import Infomation from "../components/info.jsx"

const LoginCard = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password, rememberMe });
  };

  return (
    <>
    <LoginCardComponent/>
    </>
    // <div className="login-card">
    //   <h2>Login</h2>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label>Email:</label>
    //       <input type="email" 
    //         value={email} 
    //         onChange={(e) => setEmail(e.target.value)} 
    //         required 
    //       />
    //     </div>
    //     <div>
    //       <label>Password:</label>
    //       <input type="password" 
    //         value={password} 
    //         onChange={(e) => setPassword(e.target.value)} 
    //         required 
    //       />
    //     </div>
    //     <div>
    //       <label>
    //         <input 
    //           type="checkbox" 
    //           checked={rememberMe} 
    //           onChange={(e) => setRememberMe(e.target.checked)} 
    //         />
    //         Remember Me
    //       </label>
    //     </div>
    //     <button type="submit">Login</button>
    //   </form>
    // </div>
  );
};

export default LoginCard;