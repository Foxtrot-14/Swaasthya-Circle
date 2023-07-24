import React, { useState } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Nav
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/activities"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Activities
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/volunteer"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Volunteer
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
