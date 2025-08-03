// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0i1VPtXCzOwUUqxj_UfV1XQppKEiegdE",
  authDomain: "shipment-app-61ec1.firebaseapp.com",
  projectId: "shipment-app-61ec1",
  storageBucket: "shipment-app-61ec1.firebasestorage.app",
  messagingSenderId: "338588142684",
  appId: "1:338588142684:web:17be78d06532e97443aa99",
  measurementId: "G-068Z84H306"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };

