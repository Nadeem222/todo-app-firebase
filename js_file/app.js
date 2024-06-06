import { auth, onAuthStateChanged } from "./firebase.js";

const userProfileCon = document.getElementById("detailCon");
const signOutBtn = document.getElementById("signOutBtn")

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
    if (user.emailVerified) {
      if (window.location.pathname !== '/index.html') {
        window.location.href = 'index.html';
      }
    } else {
      alert("Please verify your email to access the application.");
      auth.signOut();
      window.location.href = "login.html";
    }
    userProfileCon.innerHTML = `
               <div class="header">
                    <img src="./img/K7A78We.jpeg" alt="">
                </div>
                <div class="profileContent">
                    <img src="./img/images.png" alt="" class="userImg">
                    <div class="textCon">
                        <p class="userName">${user.displayName}</p>
                        <p>${user.email}</p>
                    </div>
    
                </div>
      
    `
    const uid = user.uid;
  } else {
    console.log("hello");
    if (window.location.pathname === '/index.html') {
      window.location.href = 'login.html';
    } else if (window.location.pathname !== '/signin.html' && window.location.pathname !== '/login.html') {
      window.location.href = 'signin.html';
    }
  }
});

signOutBtn.addEventListener('click' , ()=>{
  auth.signOut();
  window.location.href ="login.html"
})
