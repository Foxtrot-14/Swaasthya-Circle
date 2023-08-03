import React from "react";
import Activity from "../Activity";
import "./Activities.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Activities = () => {
  const link =
    "https://firebasestorage.googleapis.com/v0/b/swaasthya-web-app.appspot.com/o/Adolecent%20Health%20Awareness%2F12.png?alt=media&token=19a4e458-d4bb-4b89-997c-c3f0008d1d75";
  const name = "Test";
  return (
    <div>
      <div className="carrow">
        <ul className="clist">
          <Link>
            <motion.li
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              whileHover={{ scale: 1.1 }}
              className="im"
            >
              <center>
                <img src={link} alt="image" />
                <p className="desc">
                  Activity:{name} <br />
                </p>
              </center>
            </motion.li>
          </Link>
          <Link>
            <motion.li
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              whileHover={{ scale: 1.1 }}
              className="im"
            >
              <center>
                <img src={link} alt="image" />
                <p className="desc">
                  Activity:{name} <br />
                </p>
              </center>
            </motion.li>
          </Link>
          <Link>
            <motion.li
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              whileHover={{ scale: 1.1 }}
              className="im"
            >
              <center>
                <img src={link} alt="image" />
                <p className="desc">
                  Activity:{name} <br />
                </p>
              </center>
            </motion.li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Activities;
