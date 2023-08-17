import React from "react";
import "./SideBar.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const SideBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "just",
        stiffness: 260,
        damping: 20,
        delay: 1.5,
      }}
      whileHover={{ scale: 1.1 }}
      className="nav-bar"
    >
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
          <i class="fa-solid fa-chart-line"></i>
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
    </motion.div>
  );
};

export default SideBar;
