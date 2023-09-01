import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import SideBar from "../SideBar";
const About = () => {
  return (
    <>
      <div className="acta">
        <center>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            whileHover={{ scale: 1.1 }}
            className="card1"
          >
            <h1>About Us</h1>
            <p>
              Swaasthya CIRCLE Foundation (SCF) is a Not-for-profit company
              registered under section 8 of the companies act 2013, with a
              Corporate Identification Number U85300KA2020NPL. We in SWAASTHYA
              CIRCLE are socially committed and enthusiastic professionals from
              different walks of life who aim to work towards better lives for
              our fellow citizens and cleaner, greener living spaces. We believe
              in holistic action to protect our health as well as our greenery.
              Over the years we have met many people with great ideas and a
              genuine heart for service, who did not get the opportunity to turn
              their ideas into reality. SCF is a platform for those with this
              passion to pay forward our debts to all who have helped us achieve
              our success. We believe in joining minds and hands to help people
              and protect the environment.
              <br />
            </p>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            whileHover={{ scale: 1.1 }}
            className="card2"
          >
            <h1>Our Vision and Mission</h1>
            <p>
              To Promote health and to Protect environment. <br /> Health
              promotional activities having life cycle approach to achieve
              healthy families and builds healthy communities. Protection of
              environment through actions towards promotion and preservation of
              forests, sanitation and personal hygiene, solid waste management,
              etc. Evolve and strengthen scientific innovation, research, and
              education to ensure equitable and self-sustaining mechanism.
              Participate, facilitate, and collaborate with local, national, and
              international organizations with shared vision and objectives to
              achieve holistic development in community health and environment
              protection.
              <br />
            </p>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            whileHover={{ scale: 1.1 }}
            className="card2"
          >
            <h1>Products We Provide</h1>
            <p>
              1.) Health: Customized Awareness program/ training/ workshops for
              health promotion. Community Based Health Research. Implementation
              and evaluation of health programs. <br />
              2.) Environment:
              <strong> Swachh Shakti</strong> a High Rate Biomethanization unit
              with multi stage mixing for Organic Waste Management.
            </p>
          </motion.div>
        </center>
        {/* //vision and mission, services //change icon , serif fonts */}
      </div>
    </>
  );
};

export default About;
