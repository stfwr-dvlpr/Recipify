import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [query, setQuery] = useState('');

  return (
    <div className="login-container">
      <h2>Contact Us</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="text-area"
        placeholder="Your query"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button>Send Email</button>
    </div>
  );
};

export default Contact;