import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAM4mbEIHcTUMNr7l4huOCOalFRKjGUIU4",
  authDomain: "becbbsr-90a44.firebaseapp.com",
  projectId: "becbbsr-90a44",
  storageBucket: "becbbsr-90a44.firebasestorage.app",
  messagingSenderId: "379108510831",
  appId: "1:379108510831:web:d439fda6481e2c9359519a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
