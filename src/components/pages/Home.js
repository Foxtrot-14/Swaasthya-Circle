import React from "react";
import "./Home.css";
import logo from "../img/logo.png";
const Home = () => {
  return (
    <>
      <div className="container">
        <img src={logo} alt="logo" className="mlogo" />
        <h1 className="kann">ಸ್ವಾಸ್ಥ್ಯ ಸಕ೯ಲ್‌ ಫೌಂಡೇಷನ್</h1>
        <h1 className="kann">SWAASTHYA CIRCLE FOUNDATION</h1>
        <h2 className="jkn">
          <span className="abb">C</span>enter for <span className="abb">I</span>
          nnovation, <span className="abb">R</span>esearch,{" "}
          <span className="abb">C</span>apacity Building,{" "}
          <span className="abb">L</span>
          eadership and <span className="abb">E</span>ducation
        </h2>
      </div>
    </>
  );
};

export default Home;
