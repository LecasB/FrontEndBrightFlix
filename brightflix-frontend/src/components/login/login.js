import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/css/login.css';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('', {
        username,
        password
      });
      localStorage.setItem('token', response.data.token);
      navigate('/videos');
    } catch (err) {
      setError('Login falhou. Verifique as suas credenciais.');
    }
  };

  return (
    <div className='loginForm'>
      <h2>Sign In</h2>
      <form onSubmit={handleLogin}>
        <div className="inputContainer">
          <input
            className='loginInput' 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
            placeholder=''
          />
          <label>Email or phone number</label>
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
        <button className='btn-primary' type="submit">Sign In</button>
        <p>OR</p>
        <button className='btn-secondary' type="submit">Register</button>
        <p className='forgotPassword'>Forgot password?</p>
      </form>
    </div>
  );
}

export default Login;
