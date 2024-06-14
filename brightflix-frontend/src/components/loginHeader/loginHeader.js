import React from 'react';
import logo from '../../img/logo.png'

function LoginHeader() {
  return (
    <header className='menuLogin'>
        <nav className='menu'>
    <img className='logo' src={logo}></img>
        </nav>
    </header>
  );
}

export default LoginHeader;
