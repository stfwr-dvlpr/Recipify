import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy authentication
    if (username === 'admin' && password === '1234' || username==='harshi' && password ==='1234') {
      setIsAuthenticated(true);
      navigate('/'); // Redirect to Home page
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div className="forgot">
        <a href="#">Forgot Password?</a>
      </div>
      <button onClick={handleLogin}>Submit</button>
    </div>
  );
};

export default Login;
