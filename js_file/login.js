import { auth, signInWithEmailAndPassword, sendPasswordResetEmail, EmailAuthProvider , reauthenticateWithCredential } from "./firebase.js";
const loginBtn = document.getElementById("loginBtn");
const tab1 = document.getElementById('tab-1')
const tab2 = document.getElementById('tab-2')
const resetPasswordBtn = document.getElementById('resetPassword')
const email = document.getElementById("loginEmail");
const password = document.getElementById("loginPassword");
const authenticateBtn = document.getElementById('r-btn')

function loginUser() {

  if (email.value === "") {
    alert("Please Enter Valid email")
  } else if (password.value === "") {
    alert("Please Enter Valid password")
  } else {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user.emailVerified) {
          window.location.href = "index.html"
          console.log(user)
        } else {
          alert("please verify your account");
          auth.signOut();
        }
        email.value = "";
        password.value = "";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

}

function resetPassword(){
  const reAuthCon = document.getElementById("reAuthCon");
  reAuthCon.classList.toggle("show")
  const modal = document.querySelector('.authenticationBox');
  modal.classList.toggle('show')
  

}

const reAuthenticate = () => {
  const email =document.getElementById('r-email');
    sendPasswordResetEmail(auth, email.value)
    .then(() => {
      console.log("verification Email Send");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    })
}

authenticateBtn.addEventListener('click' , reAuthenticate)
resetPasswordBtn.addEventListener('click' , () =>{
  resetPassword()
})
loginBtn.addEventListener('click', loginUser);

tab2.addEventListener('click', (e) => {
  window.location.href = "signin.html"
});
