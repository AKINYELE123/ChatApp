import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import  Constants  from "expo-constants";

const firebaseConfig = {
    apiKey: "AIzaSyBjRk_bGR41nsFesEcUly7lo6mKsfI_D_w",
    authDomain: "chatapp-720f0.firebaseapp.com",
    projectId: "chatapp-720f0",
    storageBucket: "chatapp-720f0.appspot.com",
    messagingSenderId: "979051493950",
    appId: "1:979051493950:web:fdcb8f076f8615d55bef6f"
  };

initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();