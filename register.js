import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

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

// Wait for page load
document.addEventListener("DOMContentLoaded", () => {

  const submit = document.getElementById("submit");

  if (!submit) {
    console.error("Submit button missing");
    return;
  }

  submit.addEventListener("click", (e) => {
    e.preventDefault();

    const email = document.getElementById("email")?.value;
    const password = document.getElementById("password")?.value;

    if (!email || !password) {
      alert("Fill in all fields");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.location.href = "Tasker.html";  // must match exactly
      })
      .catch(err => {
        alert(err.message);
        console.error(err);
      });

  });

});
