import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async(e) => {
    e.preventDefault();
    setIsLoading(true);
    try{
        if(confirmPassword !== password)
        {
            alert('confirm password does not match!');
            return;
        }
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/register`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, username, password})
        });

        if(res.ok)
        {
        const data = await res.text();
        console.log("Registered successfully, status: " + data);
        }
        navigate('/login');
    }   catch(err)
    {
        console.error(err);
        alert('An error occurred while registering you', err);
    } 
    finally{
        setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
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
      <input
        type="password"
        placeholder="Confirm-Password"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleRegister}>{isLoading? 'Registering...' : 'Submit'}</button>
    </div>
  );
};

export default Register;
