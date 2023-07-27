import React from "react";
import "./SideBar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "./img/logo.png";
const SideBar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo1" to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <i class="fa-solid fa-house"></i>
        </NavLink>
        <NavLink
          className="about"
          exact="true"
          activeclassname="active"
          to="about"
        >
          <i class="fa-solid fa-info"></i>
        </NavLink>
        <NavLink
          className="activity"
          exact="true"
          activeclassname="active"
          to="activities"
        >
          <i class="fa-solid fa-user-doctor"></i>
        </NavLink>
        <NavLink
          className="team"
          exact="true"
          activeclassname="active"
          to="team"
        >
          <i class="fa-solid fa-people-group"></i>
        </NavLink>
        <NavLink
          className="contibute"
          exact="true"
          activeclassname="active"
          to="contribute"
        >
          <i class="fa-solid fa-handshake-angle"></i>
        </NavLink>
      </nav>
    </div>
  );
};

export default SideBar;
