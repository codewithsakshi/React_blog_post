import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSrTV_oT7ngK3otObq_WSU4JBQwPRPzco",
  authDomain: "blog-posts-39e89.firebaseapp.com",
  projectId: "blog-posts-39e89",
  storageBucket: "blog-posts-39e89.appspot.com",
  messagingSenderId: "420350805924",
  appId: "1:420350805924:web:307d1ed4a8d0c5770ae331",
  measurementId: "G-ER7RGY7000"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

