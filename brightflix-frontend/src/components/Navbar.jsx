import React from "react";
import { FaSearch, FaHome, FaListUl, FaBookmark } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { IoTvSharp } from "react-icons/io5";
import "../scss/Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <button>
        <a href="/Home">
          <i className="icon">
            <FaHome />
          </i>
        </a>
      </button>
      <button>
        <a href="/Films">
          <i className="icon">
            <MdLocalMovies />
          </i>
        </a>
      </button>
      <button>
        <a href="/Series">
        <i className="icon">
          <IoTvSharp />
        </i>
        </a>
      </button>
      <button>
        <a href="/Favorites">
          <i className="icon">
            <FaBookmark />
          </i>
        </a>
      </button>
      <button>
        <i className="icon">
          <FaListUl />
        </i>
      </button>
    </nav>
  );
}

export default Navbar;
