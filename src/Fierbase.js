
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAC0zso0B91AGudSxAkkUcR3KGbMEzMjlM",
  authDomain: "hospital-project-98335.firebaseapp.com",
  projectId: "hospital-project-98335",
  storageBucket: "hospital-project-98335.appspot.com",
  messagingSenderId: "494522919471",
  appId: "1:494522919471:web:5959ad76c4b92eb218b4da",
  measurementId: "G-PWHY86YFK8"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);