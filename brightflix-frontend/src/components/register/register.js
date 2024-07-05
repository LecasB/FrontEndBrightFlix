import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/css/login.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('https://brightflixapii.vercel.app/api/v1/register', {
        name,
        email,
        password
      });
      localStorage.setItem('token', response.data.token);
      navigate('/insert');
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className='loginForm'>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="inputContainer">
          <input
            className='loginInput' 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            placeholder=''
          />
          <label>Name</label>
        </div>
        <div className="inputContainer">
          <input
            className='loginInput' 
            type="text" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            placeholder=''
          />
          <label>Email</label>
        </div>
        <div className="inputContainer">
          <input 
            className='loginInput'
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            placeholder=''
          />
          <label>Password</label>
        </div>
        <div className="inputContainer">
          <input 
            className='loginInput'
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
            placeholder=''
          />
          <label>Confirm Password</label>
        </div>
        {error && <p className='error'>{error}</p>}
        <button className='btnPrimary' type="submit">Register</button>
        <p>OR</p>
        <button className='btnSecondary' type="button" onClick={() => navigate('/insert')}>Sign In</button>
        <p className='forgotPassword'>Forgot password?</p>
      </form>
    </div>
  );
}

export default Register;
