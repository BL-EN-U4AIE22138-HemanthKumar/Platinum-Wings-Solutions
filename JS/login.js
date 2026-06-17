const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");

const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");


// SHOW SIGNUP

showSignup.addEventListener("click", () => {

    loginForm.classList.remove("active");

    signupForm.classList.add("active");

});


// SHOW LOGIN

showLogin.addEventListener("click", () => {

    signupForm.classList.remove("active");

    loginForm.classList.add("active");

});


// LOGIN FORM

loginForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Login Successful!");

});


// SIGNUP FORM

signupForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Account Created Successfully!");

});