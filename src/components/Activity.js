import React from "react";
import "./Activity.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Activity = (props) => {
  const link = props.thumbnail;
  const name = props.name;
  return (
    <div>
      <div className="carrow">
        <Link>
          <motion.div
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
              <p className="desc">Activity: {name}</p>
            </center>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Activity;
