import { auth, signInWithEmailAndPassword, sendPasswordResetEmail,fetchSignInMethodsForEmail, EmailAuthProvider, reauthenticateWithCredential } from "./firebase.js";
const loginBtn = document.getElementById("loginBtn");
const tab2 = document.getElementById('tab-2')
const resetPasswordBtn = document.getElementById('resetPassword')
const email = document.getElementById("loginEmail");
const password = document.getElementById("loginPassword");
const toggleModal = document.getElementById('r-btn')

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

function resetPassword() {
  const emailInput = document.getElementById('r-email');
  fetchSignInMethodsForEmail(auth, emailInput.value)
  .then((sigInMethods)=>{
    if(sigInMethods.length === 0){
      alert("Email not verified")
    }else{
      sendPasswordResetEmail(auth, emailInput.value)
        .then(() => {
          alert("verification Email Send");
          toggleModalVisibility()
          email.value = "";
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Error:", errorMessage);
          // ..
        })

    }
  }).catch((error)=>{
    console.log(error.message);
  })

}

const toggleModalVisibility = () => {
  const reAuthCon = document.getElementById("reAuthCon");
  reAuthCon.classList.toggle("show")
  const modal = document.querySelector('.authenticationBox');
  modal.classList.toggle('show')

  if(modal.classList.contains('show')){
    document.addEventListener('keydown' ,escKeyListner);
  }else{
    document.removeEventListener("keydown" , escKeyListner)
  }

}

const escKeyListner = (event) =>{
  if(event.key === "Escape"){
    // console.log(event.key)
    toggleModalVisibility()
  }
}

toggleModal.addEventListener('click', toggleModalVisibility);

resetPasswordBtn.addEventListener('click', resetPassword);
loginBtn.addEventListener('click', loginUser);

tab2.addEventListener('click', (e) => {
  window.location.href = "signin.html"
});
