import React, { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import im from "../../firebaseConfig";
import { useLocation } from "react-router-dom";
import "./ActivityDetails.css";
import { motion } from "framer-motion";
const ActivityDetails = () => {
  const [data, setData] = useState(null);
  const [Image, setImage] = useState(null);
  const location = useLocation();
  const Id = new URLSearchParams(location.search).get("data");
  useEffect(() => {
    const db = im.db;
    const docRef = doc(db, "Activities", Id);
    const fetchData = async () => {
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData(docSnap.data());
          setImage(docSnap.data().Image);
        } else {
          console.log("Document not found");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container1">
      <center>
        <h3 id="head">{data ? data.Name : "Loading..."}</h3>
      </center>
      <div className="gallery">
        {Image &&
          Image.map((image, index) => (
            <motion.img whileHover={{ scale: 2.0 }} key={index} src={image} />
          ))}
      </div>
    </div>
  );
};

export default ActivityDetails;
