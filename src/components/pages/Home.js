import React from "react";
import "./Home.css";
import { TypeAnimation } from "react-type-animation";
import logo from "../pages/img/logo.png";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <>
      <div className="main">
        <center>
          <motion.img
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            whileHover={{ scale: 1.2 }}
            src={logo}
            alt="logo"
            className="logo"
          />
        </center>
        <center>
          <div className="content">
            <TypeAnimation
              sequence={[
                "To Promote\nHealth",
                1000,
                "To Protect the Environment!",
                1000,
              ]}
              repeat={Infinity}
              speed={-5}
            />
          </div>
        </center>
      </div>
      <ul className="list">
        <motion.li whileHover={{ scale: 1.2 }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 1,
            }}
            whileHover={{ scale: 1.2 }}
            className="card"
          >
            <center>
              <i
                className="people"
                class="fa-solid fa-info fa-3x"
                style={{
                  color: "#1b9a9d",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              ></i>

              <p>About Us</p>
            </center>
          </motion.div>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 1,
            }}
            whileHover={{ scale: 1.2 }}
            className="card"
          >
            <center>
              <i
                className="people"
                class="fa-solid fa-user-doctor fa-3x"
                style={{
                  color: "#1b9a9d",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              ></i>
              <p>Activities</p>
            </center>
          </motion.div>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 1,
            }}
            whileHover={{ scale: 1.2 }}
            className="card"
          >
            <center>
              <i
                className="people"
                class="fa-solid fa-people-group fa-3x"
                style={{
                  color: "#1b9a9d",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              ></i>
              <p>Team</p>
            </center>
          </motion.div>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 1,
            }}
            whileHover={{ scale: 1.2 }}
            className="card"
          >
            <center>
              <i
                className="people"
                class="fa-solid fa-handshake-angle fa-3x"
                style={{
                  color: "#1b9a9d",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              ></i>
              <p>Contribute</p>
            </center>
          </motion.div>
        </motion.li>
      </ul>
    </>
  );
};

export default Home;
