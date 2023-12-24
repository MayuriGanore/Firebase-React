import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDIfBR1tvWy1Zbg0e99tcQ2HwF_GlzZzqA",
  authDomain: "fir-auth-4-3a9ee.firebaseapp.com",
  projectId: "fir-auth-4-3a9ee",
  storageBucket: "fir-auth-4-3a9ee.appspot.com",
  messagingSenderId: "796429661381",
  appId: "1:796429661381:web:ef13f873000b4fefd96cac",
  measurementId: "G-H6ZQ8L0NE6"
};
const app = initializeApp(firebaseConfig);
const auth=getAuth()
export {app,auth}