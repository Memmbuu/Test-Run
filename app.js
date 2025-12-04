import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBmnfvxXf-MdS8wQtpITJuLoTgSjAaiDNY",
  authDomain: "me-tube-b0ff9.firebaseapp.com",
  projectId: "me-tube-b0ff9",
  storageBucket: "me-tube-b0ff9.firebasestorage.app",
  messagingSenderId: "760533061101",
  appId: "1:760533061101:web:1a43918dc0b6b56392ebe4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM MUST be ready
document.addEventListener("DOMContentLoaded", () => {

  const authForm = document.getElementById("auth-form");
  const toggleLink = document.getElementById("toggle-link");
  const headerText = document.getElementById("form-header");
  const submitButton = document.getElementById("submit");

  let isLoginForm = false;

  function toggleForm() {
    isLoginForm = !isLoginForm;

    if (isLoginForm) {
      headerText.textContent = "LOGIN";
      submitButton.textContent = "Login";
      toggleLink.textContent = "Don't have an account? Sign Up";
    } else {
      headerText.textContent = "SIGN UP";
      submitButton.textContent = "Sign Up";
      toggleLink.textContent = "Already have an account? Login";
    }
  }

  toggleLink.addEventListener("click", (e) => {
    e.preventDefault();
    toggleForm();
  });

  authForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
      alert("Fill all fields");
      return;
    }

    // LOGIN
    if (isLoginForm) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          window.location.href = "Tasker.html";
        })
        .catch(err => alert(err.message));
    }

    // SIGNUP
    else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          window.location.href = "Tasker.html";
        })
        .catch(err => alert(err.message));
    }
  });

});

//
