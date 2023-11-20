
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {GoogleAuthProvider, signOut} from 'firebase/auth';

const firebaseConfig = {
  apiKey: `${process.env.NEXT_PUBLIC_API_KEY}`,
  authDomain: "napkin-auth.firebaseapp.com",
  projectId: "napkin-auth",
  storageBucket: "napkin-auth.appspot.com",
  messagingSenderId: `${process.env.NEXT_PUBLIC_messagingSenderId}`,
  appId: `${process.env.NEXT_PUBLIC_appId}`,
  measurementId:`${process.env.NEXT_PUBLIC_measurementId}` 
};


// const firebaseConfig = {
//   apiKey: "AIzaSyBAAFwbtz7fv7hjKs0WGBgHXogKR3uU7H4",
//   authDomain: "napkin-auth.firebaseapp.com",
//   projectId: "napkin-auth",
//   storageBucket: "napkin-auth.appspot.com",
//   messagingSenderId: "74329617142",
//   appId: "1:74329617142:web:a460b44a7fb8311d1472d7",
//   measurementId: "G-1KWXQMCM9H"
// };

  const app = initializeApp(firebaseConfig);

  export const auth= getAuth(app)

  export const provider=new GoogleAuthProvider();


  export const db = getFirestore(app)