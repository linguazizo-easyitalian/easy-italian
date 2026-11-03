import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCcshnh64v_UAgHMpOpiEXw1DqG94tHP5I",
  authDomain: "easy-italian-9c7b1.firebaseapp.com",
  projectId: "easy-italian-9c7b1",
  storageBucket: "easy-italian-9c7b1.firebasestorage.app",
  messagingSenderId: "709632650477",
  appId: "1:709632650477:web:c5cea85435cc626338f0e4",
  measurementId: "G-MYQMZKVS4D"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
