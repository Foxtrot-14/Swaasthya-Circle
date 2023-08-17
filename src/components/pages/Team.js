import React from "react";
import "./Team.css";
import da from "../../Teaminfo";
import { motion } from "framer-motion";
const Team = () => {
  return (
    <div className="acta">
      <center>
        <h1 id="head">Meet Our Team...</h1>
      </center>
      <h1 className="abc">Directors</h1>
      <div className="ery">
        {da.dName.map((name, index) => (
          <div className="ard">
            <ul className="def">
              <li>
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  className="ghi"
                  src={da.dImage[index]}
                  alt="photo"
                />
              </li>
              <li>
                <p className="jkl">
                  <h3>{name}</h3> <br />
                  {da.dQual[index]}
                </p>
              </li>
            </ul>
          </div>
        ))}
        ;
      </div>
      <h1 className="abc">Advisors</h1>
      <div className="ery">
        {da.aName.map((name, index) => (
          <div className="ard">
            <ul className="def">
              <li>
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  className="ghi"
                  src={da.aImage[index]}
                  alt="photo"
                />
              </li>
              <li>
                <p className="jkl">
                  <h3>{name}</h3> <br />
                  {da.aQual[index]}
                </p>
              </li>
            </ul>
          </div>
        ))}
        ;
      </div>
      <h1 className="abc">Our Pillars</h1>
      <div className="ery">
        {da.mName.map((name, index) => (
          <div className="ard">
            <ul className="def">
              <li>
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  className="ghi"
                  src={da.mImage[index]}
                  alt="photo"
                />
              </li>
              <li>
                <p className="jkl">
                  <h3>{name}</h3> <br />
                  {da.mQual[index]}
                </p>
              </li>
            </ul>
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

export default Team;
