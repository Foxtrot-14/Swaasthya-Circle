import React from "react";
import "./Volunteer.css";
const Volunteer = () => {
  return (
    <div className="acta1">
      <center>
        <h1 id="head">Want to be a part...?</h1>
      </center>
      <div className="vard">
        <p className="infor">
          <center>
            <h2>To Support/Collaborate/Volunteer...</h2>
          </center>
          <p className="em">
            Email:
            <a
              className="not"
              href="mailto: programdirector@swaasthyacirclefoundation.com"
            >
              programdirector@swaasthyacirclefoundation.com
            </a>
            <br />
          </p>
          <center>
            Phone: 9738516666/9880046228 <br />
            Bank Account Details: M/s Swaasthya Circle Foundation. <br />
            Account Number: 50200077794806 <br />
            IFSC Code: HDFC0002566 <br />
            Income Tax: Registred under Section 80G (ABDCS9443GF20221) <br />
            To Volunteer:
            <a className="not" href="https://forms.gle/7eWcquzDrfSih8gF9">
              Google Form
            </a>
          </center>
        </p>
      </div>
    </div>
  );
};

export default Volunteer;
