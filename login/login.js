import { auth , signInWithEmailAndPassword } from "../utility/firebase.js";

function loginUser(){

    const email = document.getElementById("loginEmail");
    const password = document.getElementById("loginPassword");
    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener('click' , loginUser)

console.log('helloS');