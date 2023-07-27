import React from "react";
import "./Activities.css";
import { TypeAnimation } from "react-type-animation";
const Activities = () => {
  return (
    <div>
      <center>
        <h1>
          <TypeAnimation sequence={["Journey so Far..."]} speed={-5} />
        </h1>
        <ul>
          <li>
            <div className="carda"></div>
          </li>
        </ul>
      </center>
    </div>
  );
};

export default Activities;
