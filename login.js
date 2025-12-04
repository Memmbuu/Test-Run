import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBmnfvxXf-MdS8wQtpITJuLoTgSjAaiDNY",
  authDomain: "me-tube-b0ff9.firebaseapp.com",
  projectId: "me-tube-b0ff9",
  storageBucket: "me-tube-b0ff9.firebasestorage.app",
  messagingSenderId: "760533061101",
  appId: "1:760533061101:web:1a43918dc0b6b56392ebe4"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", () => {

  const submit = document.getElementById("submit");

  if (!submit) {
    console.error("Submit button not found");
    return;
  }

  submit.addEventListener("click", (e) => {
    e.preventDefault();

    const email = document.getElementById("email")?.value;
    const password = document.getElementById("password")?.value;

    if (!email || !password) {
      alert("Enter email and password");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.location.href = "Tasker.html"; // MUST MATCH FILE NAME
      })
      .catch(err => {
        alert(err.message);
        console.error(err);
      });

  });

});
