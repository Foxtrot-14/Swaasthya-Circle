import { getDocs, collection, where, query } from "firebase/firestore";
import im from "./firebaseConfig";
var dName = [];
var dImage = [];
var dQual = [];
var aName = [];
var aImage = [];
var aQual = [];
var mName = [];
var mImage = [];
var mQual = [];
const db = im.db;
const teamRef = collection(db, "Team");
const q = query(teamRef, where("Position", "==", "Director"));
const docSnaps = await getDocs(q);
docSnaps.forEach((doc) => {
  dName.push(doc.data().Name);
  dImage.push(doc.data().Image);
  dQual.push(doc.data().Qualification);
});
const q1 = query(teamRef, where("Position", "==", "Advisor"));
const docSnaps1 = await getDocs(q1);
docSnaps1.forEach((doc) => {
  aName.push(doc.data().Name);
  aImage.push(doc.data().Image);
  aQual.push(doc.data().Qualification);
});
const q2 = query(teamRef, where("Position", "==", "Member"));
const docSnaps2 = await getDocs(q2);
docSnaps2.forEach((doc) => {
  mName.push(doc.data().Name);
  mImage.push(doc.data().Image);
  mQual.push(doc.data().Qualification);
});

export default {
  dName,
  dImage,
  dQual,
  aName,
  aImage,
  aQual,
  mName,
  mImage,
  mQual,
};
