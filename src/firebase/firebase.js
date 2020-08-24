import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const configFirebase = {
  apiKey: "AIzaSyCpy6O2rADHg68ZSE5BEH63fOFBsinN5nQ",
  authDomain: "hockey-db.firebaseapp.com",
  databaseURL: "https://hockey-db.firebaseio.com",
  projectId: "hockey-db",
  storageBucket: "hockey-db.appspot.com",
  messagingSenderId: "420320778655",
  appId: "1:420320778655:web:d1d39d0172e39fdf66c5aa",
  measurementId: "G-4VEN4JKKPV",
};

firebase.initializeApp(configFirebase);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
