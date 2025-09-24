import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

const Login = () => {
  const {login} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();
    setIsLoading(true);
    // Dummy authentication
    // if (username === 'admin' && password === '1234' || username==='harshi' && password ==='1234') {
    //   setIsAuthenticated(true);
    //   navigate('/'); // Redirect to Home page
    // } else {
    //   alert('Invalid username or password');
    // }
    try{
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
      });

      if(res.ok)
      {
        const data = await res.json();
        login(data.token, {
          id: data.id,
          username: data.username,
          email: data.email
        });
        console.log("Login successfull", data);
        navigate('/');
      }
      else{
        const message = await res.text();
        console.log("login failed", message);
        alert(message || 'An error occurred in login');
      }
    } catch(err)
    {
      console.error(err);
      alert('An error occurred while logging you in!');
    }
    finally{
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div className="forgot">
        <a href="/register">SignUp</a>
      </div>
      <button onClick={handleLogin}>{isLoading? 'Logging-in...' : 'Submit'}</button>
    </div>
  );
};

export default Login;
