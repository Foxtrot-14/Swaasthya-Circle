import React from "react";
import "./Activity.css";
const Activity = (props) => {
  return (
    <div>
      <ul>
        <li>
          <div className="carda">
            <h1>{props.caption}</h1>
            <img src={props.url} alt="" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Activity;
