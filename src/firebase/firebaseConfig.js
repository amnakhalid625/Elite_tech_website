import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAoQ9v990_af86vRjOTrykFwYQbUTGwFrI",
  authDomain: "elite-tech-testimonial.firebaseapp.com",
  projectId: "elite-tech-testimonial",
  storageBucket: "elite-tech-testimonial.firebasestorage.app",
  messagingSenderId: "558688883609",
  appId: "1:558688883609:web:67a2d2675eb3b318df7908"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default  db ;



