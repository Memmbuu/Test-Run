import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmnfvxXf-MdS8wQtpITJuLoTgSjAaiDNY",
  authDomain: "me-tube-b0ff9.firebaseapp.com",
  projectId: "me-tube-b0ff9",
  storageBucket: "me-tube-b0ff9.firebasestorage.app",
  messagingSenderId: "760533061101",
  appId: "1:760533061101:web:1a43918dc0b6b56392ebe4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Auth
const auth = getAuth(app);

const submit = document.getElementById('submit');
submit.addEventListener("click", function(e) {
  e.preventDefault(); // Prevent form submission if in a form
  //inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Get values inside the event listener to have current values
 

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Creating account....");
      window.location.href = "grand.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage); // Alert the actual error message
      console.error("Error:", errorCode, errorMessage);
    });
});