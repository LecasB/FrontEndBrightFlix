import React from 'react';
import Login from '../components/login/login';
import LoginHeader from '../components/loginHeader/loginHeader';
import '../styles/css/loginHeader.css';
import '../styles/css/login.css';

const LoginPage = () => {
  return (
    <div className='backgroundImg'>
      <LoginHeader />
      <Login />
    </div>
  );
};

export default LoginPage;
