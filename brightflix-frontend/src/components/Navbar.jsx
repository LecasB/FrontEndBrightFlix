import React from "react";
import { FaHome, FaListUl, FaBookmark, FaUser } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { IoTvSharp } from "react-icons/io5";
import "../scss/Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <button className="Button-nav">
        <a href="/">
          <i className="icon">
            <FaHome />
          </i>
        </a>
      </button>
      <button className="Button-nav">
        <a href="/Films">
          <i className="icon">
            <MdLocalMovies />
          </i>
        </a>
      </button>
      <button className="Button-nav">
        <a href="/Series">
          <i className="icon">
            <IoTvSharp />
          </i>
        </a>
      </button>
      <button className="Button-nav">
        <a href="/Favorites">
          <i className="icon">
            <FaBookmark />
          </i>
        </a>
      </button>
      <button className="Button-nav">
        <a href="/login">
          <i className="icon">
            <FaUser />
          </i>
        </a>
      </button>
      <button className="Button-nav">
        <a href="/insert">
          <i className="icon">
            <FaListUl />
          </i>
        </a>
      </button>
    </nav>
  );
}

export default Navbar;
