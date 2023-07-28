import React from "react";
import "./Home.css";
import SideBar from "../SideBar";
import logo from "../img/logo.png";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div className="container">
      <SideBar />
      <div className="text-zone">
        <ul className="hero">
          <motion.li
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            whileHover={{ scale: 1.1 }}
          >
            <h1>
              To Promote Health <br />
              To Protect the Environment!
            </h1>
          </motion.li>
          <motion.li
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            whileHover={{ scale: 1.1 }}
          >
            <img className="mlogo" src={logo} alt="logo" />
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
