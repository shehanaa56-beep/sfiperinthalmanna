import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC-gezoI34c7e1oPq0tD_UVoyHGxT_3DDY",
  authDomain: "ecommerce-be353.firebaseapp.com",
  databaseURL: "https://ecommerce-be353-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ecommerce-be353",
  storageBucket: "ecommerce-be353.firebasestorage.app",
  messagingSenderId: "565831558769",
  appId: "1:565831558769:web:6afc1713278af4912dddd0",
  measurementId: "G-PJ4EERMZ48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
