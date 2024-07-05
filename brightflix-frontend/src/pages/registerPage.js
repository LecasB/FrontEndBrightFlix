import React from 'react';
import Register from '../components/register/register';
import LoginHeader from '../components/loginHeader/loginHeader';
import '../styles/css/loginHeader.css';
import '../styles/css/login.css';

const RegisterPage = () => {
  return (
    <div className='backgroundImg'>
      <LoginHeader />
      <Register />
    </div>
  );
};

export default RegisterPage;