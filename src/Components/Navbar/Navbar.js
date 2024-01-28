import { IoMdOptions } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import React from "react";
import logo from "../../assets/img/logo.svg";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-name">
        <div className="outer">
          <img src={logo} alt="" />
        </div>
        <p className="logo-heading">Wasserstoff</p>
      </div>
      <div className="search-navlist">
        <div className="search-box">
          <input type="text" name="search" id="search" />
          <span className="search-icon">
            <BiSearchAlt2 />
          </span>
        </div>
        <ul className="navlist">
          <li>
            <Link className="link" to="/">
              Statistics
            </Link>
          </li>
          <li>
            <Link className="link " to="/Overview">
              Overview
            </Link>
          </li>
          <li>
            <Link className="link" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="link" to="/dashboard">
              Analytics
            </Link>
          </li>
        </ul>
      </div>

      <div className="profile-option">
        <span>
          <AiOutlineUser />
        </span>
        <span>
          <IoMdOptions />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
