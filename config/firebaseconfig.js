import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import * as firebase from 'firebase'  // Should not be used elsewhere in the project

firebase.initializeApp(Expo.Constants.manifest.extra.firebase);

export default firebase;








const firebaseConfig = {
  apiKey: "AIzaSyAmBDH9pdq7bo7QIoU9T7uvXxuZG-YS_JE",
  authDomain: "edubarber-ad022.firebaseapp.com",
  projectId: "edubarber-ad022",
  storageBucket: "edubarber-ad022.appspot.com",
  messagingSenderId: "549019423529791",
  appId: ""
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const authentication = getAuth(app);