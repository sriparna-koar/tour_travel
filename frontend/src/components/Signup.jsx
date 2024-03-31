
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './signup.css';
const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [message, setMessage] = useState('');

  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post('https://tour-travel-uuoe.onrender.com/signup', { username, email, password, phone, location });
        setMessage('User created successfully');
      } catch (error) {
        console.error(error);
        setMessage('Error creating user');
      }
    };
  
    return (
      <div className="signup-container animate__animated animate__fadeIn">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
          </div>
          <div className="form-group">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
          </div>
          <div className="form-group">
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
          </div>
          <div className="form-group">
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" required />
          </div>
          <button type="submit" className="animate__animated animate__bounceIn">Sign Up</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    );
  };
  export default SignUp;