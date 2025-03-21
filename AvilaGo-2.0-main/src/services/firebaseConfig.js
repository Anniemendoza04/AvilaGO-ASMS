// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA55n9d2NwuU6EeMRRAtQlf-4tagnakH9E",
  authDomain: "avilago-asms.firebaseapp.com",
  projectId: "avilago-asms",
  storageBucket: "avilago-asms.firebasestorage.app",
  messagingSenderId: "638965638827",
  appId: "1:638965638827:web:9e8ce501a65c607c3439ee",
  measurementId: "G-DMJEF7KXCZ"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };