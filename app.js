import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

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
const auth = getAuth(app);

// Get DOM elements
const authForm = document.getElementById('auth-form');
const toggleLink = document.getElementById('toggle-link');
const headerText = document.getElementById('form-header');
const submitButton = document.getElementById('submit');

// Track current form state
let isLoginForm = false;

// Function to toggle between signup and login
function toggleForm() {
    // Toggle state
    isLoginForm = !isLoginForm;

    // Update form content based on the current state
    if (isLoginForm) {
        headerText.textContent = 'LOGIN';
        submitButton.textContent = 'Login';
        toggleLink.textContent = 'Don\'t have an account? Sign Up';
    } else {
        headerText.textContent = 'SIGN UP';
        submitButton.textContent = 'Sign Up';
        toggleLink.textContent = 'Already have an account? Login';
    }
}

// Add click event listener to the toggle link
toggleLink.addEventListener('click', (e) => {
    e.preventDefault();
    toggleForm();
});

// Handle form submission
authForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get user input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (isLoginForm) {
        // Attempt to log in the user
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Successful login
                alert("Successfully logged in!");
                window.location.href = "grand.html";
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
                console.error("Login Error:", error);
            });
    } else {
        // Attempt to create a new user account
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Successful account creation
                alert("Account created successfully!");
                window.location.href = "grand.html";
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
                console.error("Signup Error:", error);
            });
    }
});
