import React from "react";
import Activity from "../Activity";
import "./Activities.css";
import im from "../../firebaseConfig";
const Activities = () => {
  const Thumbnail = im.Thumbnail;
  const Data = im.Data;
  const Ids = im.Ids;
  return (
    <div className="act">
      <ul className="main-list">
        <li className="item-on">
          <Activity thumbnail={Thumbnail[0]} name={Data[0]} id={Ids[0]} />
        </li>
        <li className="item-on1">
          <Activity thumbnail={Thumbnail[1]} name={Data[1]} id={Ids[1]} />
        </li>
        <li className="item-on2">
          <Activity thumbnail={Thumbnail[2]} name={Data[2]} id={Ids[2]} />
        </li>
      </ul>
      <ul className="main-list">
        <li className="item-on">
          <Activity thumbnail={Thumbnail[3]} name={Data[3]} id={Ids[3]} />
        </li>
        <li className="item-on1">
          <Activity thumbnail={Thumbnail[4]} name={Data[4]} id={Ids[4]} />
        </li>
        <li className="item-on2">
          <Activity thumbnail={Thumbnail[5]} name={Data[5]} id={Ids[5]} />
        </li>
      </ul>
      <ul className="main-list">
        <li className="item-on">
          <Activity thumbnail={Thumbnail[6]} name={Data[6]} id={Ids[6]} />
        </li>
        <li className="item-on1">
          <Activity thumbnail={Thumbnail[7]} name={Data[7]} id={Ids[7]} />
        </li>
        <li className="item-on2">
          <Activity thumbnail={Thumbnail[8]} name={Data[8]} id={Ids[8]} />
        </li>
      </ul>
    </div>
  );
};

export default Activities;
