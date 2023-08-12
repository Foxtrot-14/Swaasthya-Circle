import React from "react";
import "./Activity.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ActivityDetails from "./pages/ActivityDetails";
const Activity = (props) => {
  const link = props.thumbnail;
  const name = props.name;
  const Id = props.id;
  return (
    <div>
      <div className="carrow">
        <Link to={{ pathname: "/activitydetail", search: `?data=${Id}` }}>
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
              <h3 className="desc">{name}</h3>
            </center>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Activity;
