import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8juNphS6s2whUdS7gkeIvph-S6KV_pvA",
  authDomain: "atrable-story.firebaseapp.com",
  databaseURL: "https://atrable-story-default-rtdb.firebaseio.com",
  projectId: "atrable-story",
  storageBucket: "atrable-story.appspot.com",
  messagingSenderId: "560967614454",
  appId: "1:560967614454:web:7ca74f2e2f5975c5f451d7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const userProfileCollection = collection(firestore, "user");
