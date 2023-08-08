import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  collection,
  getDoc,
  doc,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB0gN4BpEUkmy9XIQX2O5Ca5t2bX3LulFQ",
  authDomain: "swaasthya-web-app.firebaseapp.com",
  projectId: "swaasthya-web-app",
  storageBucket: "swaasthya-web-app.appspot.com",
  messagingSenderId: "153073524405",
  appId: "1:153073524405:web:bc60b63dfef00594d428fc",
  measurementId: "G-SVEXT65J7N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// to query a particular document
// const docRef = doc(db, "Activities", "1gKHOLfLtuQuBJr67st5");
// const docSnap = await getDoc(docRef);
var Ids = [];
var Data = [];
var Thumbnail = [];
const querySnapshot = await getDocs(collection(db, "Activities"));
querySnapshot.forEach((doc) => {
  Ids.push(doc.id);
  Data.push(doc.data().Name);
  Thumbnail.push(doc.data().Thumbnail);
});
// console.log(Data);
// console.log(Thumbnail);
export default { db, Ids, Data, Thumbnail };
