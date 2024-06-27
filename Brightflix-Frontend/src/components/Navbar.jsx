import React from "react";
import { FaSearch, FaHome, FaListUl, FaBookmark } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { IoTvSharp } from "react-icons/io5";
import "../scss/Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <button>
        <i className="icon">
          <FaHome />
        </i>
      </button>
      <button>
        <i className="icon">
          <FaSearch />
        </i>
      </button>

      <button>
        <i className="icon">
          <MdLocalMovies />
        </i>
      </button>
      <button>
        <i className="icon">
          <IoTvSharp />
        </i>
      </button>
      <button>
        <i className="icon">
          <FaBookmark />
        </i>
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
