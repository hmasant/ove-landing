import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCp4DEexYXdOJq-6mCA2ZiF7yWqF1ajLY",
  authDomain: "ove-landing-page.firebaseapp.com",
  projectId: "ove-landing-page",
  storageBucket: "ove-landing-page.firebasestorage.app",
  messagingSenderId: "146061543686",
  appId: "1:146061543686:web:b15df060700bf6927bf687",
  measurementId: "G-L0P83ST04T",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
