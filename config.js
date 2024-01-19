// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfAkQK-VquDFK4qenWywUmitYSD6ptjMI",
  authDomain: "climavista-92298.firebaseapp.com",
  projectId: "climavista-92298",
  storageBucket: "climavista-92298.appspot.com",
  messagingSenderId: "751160077869",
  appId: "1:751160077869:web:85a710a678e03d136e92a4",
  measurementId: "G-WX11FQSCJ5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
