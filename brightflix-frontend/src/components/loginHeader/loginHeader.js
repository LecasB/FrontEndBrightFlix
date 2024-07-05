import React from "react";
import logo from "../../img/logo.png";

function LoginHeader() {
  return (
    <header className="menuLogin">
      <nav className="menu">
        <a href="/">
          <img className="logo" src={logo}></img>
        </a>
      </nav>
    </header>
  );
}

export default LoginHeader;
