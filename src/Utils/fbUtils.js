import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBjsJrWEzfdByCbg96T1gV3t69FPVoEg-E",
  authDomain: "crudnathan.firebaseapp.com",
  projectId: "crudnathan",
  storageBucket: "crudnathan.appspot.com",
  messagingSenderId: "339890908492",
  appId: "1:339890908492:web:9eb1815a1f38500a1333e9",
  measurementId: "G-DHGK2YW948"
};

// Use this to initialize the firebase App
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {app , database}
 