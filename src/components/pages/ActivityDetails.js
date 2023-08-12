import React, { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import im from "../../firebaseConfig";
import { useLocation } from "react-router-dom";
import "./ActivityDetails.css";
const ActivityDetails = (props) => {
  const [data, setData] = useState(null);
  const location = useLocation();
  const Id = new URLSearchParams(location.search).get("data");
  console.log("Props ", Id);
  useEffect(() => {
    const db = im.db;
    const docRef = doc(db, "Activities", Id);

    const fetchData = async () => {
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.log("Document not found");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchData();
  }, []);
  console.log("Test ", data);
  return (
    <div>
      <center>
        <h3>{data ? data.Name : "Loading..."}</h3>
      </center>
    </div>
  );
};

export default ActivityDetails;
