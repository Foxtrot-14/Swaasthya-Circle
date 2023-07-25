import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  // const [click, setClick] = useState(false);
  return (
    <>
      <div class="menu">
        <center>
          <i>s</i>
        </center>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="about">About Us</a>
            </li>
            <li>
              <a href="activities">Activities</a>
            </li>
            <li>
              <a href="volunteer">Contacts</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="container"></div>
    </>
  );
};
export default NavBar;
