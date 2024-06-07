import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , sendEmailVerification , updateProfile , sendPasswordResetEmail , reauthenticateWithCredential , EmailAuthProvider , fetchSignInMethodsForEmail} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDPq7mDKeiCyLxhjBlUSMdfwVso9QTevU8",
    authDomain: "todo-app-3b7f6.firebaseapp.com",
    projectId: "todo-app-3b7f6",
    storageBucket: "todo-app-3b7f6.appspot.com",
    messagingSenderId: "507179978953",
    appId: "1:507179978953:web:b314b87c4e620ff132fd18"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


  export{
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
    updateProfile,
    sendPasswordResetEmail,
    reauthenticateWithCredential,
    EmailAuthProvider,
    fetchSignInMethodsForEmail


  }