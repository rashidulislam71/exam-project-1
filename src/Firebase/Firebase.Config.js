

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCs4DYfefSMDk2iIl4VPsrzYevLipFtGwA",
  authDomain: "exam-project-1-e31b1.firebaseapp.com",
  projectId: "exam-project-1-e31b1",
  storageBucket: "exam-project-1-e31b1.appspot.com",
  messagingSenderId: "496165029863",
  appId: "1:496165029863:web:d85a38b8a3b55793cc5f42"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;