import { auth , createUserWithEmailAndPassword , signInWithEmailAndPassword } from "./utility/firebase.js";



function resgisterUser(){
    const email = document.getElementById("signinEmail")
    const password = document.getElementById("signinPassword")

    if(email.value.trim() === ""){
        alert("Please Enter you Valid email")
    }else if (password.value.trim() === ""){
        alert("please Enter you Valid Password")
    }else{
        createUserWithEmailAndPassword(auth, email.value, password.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            email.value = "";
            password.value = ""
            console.log(user);
            window.location.href='./login/login.html'
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
          });

    }
}



const signinBtn = document.getElementById("signinBtn")

signinBtn.addEventListener('click' , resgisterUser)
