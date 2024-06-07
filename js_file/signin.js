import { auth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "./firebase.js";

const accountExist = document.getElementById("accountRegister");
const signinBtn = document.getElementById("signinBtn");
const tab1 = document.getElementById('tab-1');

function resgisterUser() {
  const email = document.getElementById("signinEmail")
  const password = document.getElementById("signinPassword")
  const displayName = document.getElementById("userName")
  const repeatPassword = document.getElementById("repeatPass")

  if (email.value.trim() === "") {
    alert("Please Enter Valid email")
  } else if (password.value.trim() === "") {
    alert("please Enter Valid Password")
  } else if (userName.value.trim() === "") {
    alert("please enter your user name")
  } else if (repeatPassword.value !== password.value && repeatPassword.value === "") {
    alert("Your password did not match")
  } else {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: displayName.value
        }).then(() => {
          sendEmailVerification(user)
            .then(() => {
              alert("Verification email sent! Please check your inbox.");
              email.value = "";
              password.value = "";
              console.log(user);
              window.location.href = 'login.html';
            }).catch((error) => {
              console.error("Error sending verification email:", error);
            });
        }).catch(() => {
          console.log("Error updating file", error);
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });

  }
}




signinBtn.addEventListener('click', resgisterUser)


tab1.addEventListener('click', (e) => {
  window.location.href = "login.html"
});
accountExist.addEventListener('click', () => {
  window.location.href = "login.html"
})