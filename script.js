//your JS code here. If required.
// DOM Elements
const body = document.body;

// Create elements dynamically (since body is empty in boilerplate)
const heading = document.createElement("h1");
heading.textContent = "Login Form";

const form = document.createElement("form");

// Username input
const usernameInput = document.createElement("input");
usernameInput.type = "text";
usernameInput.placeholder = "Username";
usernameInput.id = "username";

// Password input
const passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.placeholder = "Password";
passwordInput.id = "password";

// Remember Me checkbox + label
const checkboxLabel = document.createElement("label");
checkboxLabel.htmlFor = "checkbox";
checkboxLabel.textContent = "Remember me.";

const checkboxInput = document.createElement("input");
checkboxInput.type = "checkbox";
checkboxInput.id = "checkbox";

// Submit button
const submitButton = document.createElement("input");
submitButton.type = "submit";
submitButton.id = "submit";
submitButton.value = "Submit";

// Existing user login button (hidden initially)
const existingButton = document.createElement("button");
existingButton.id = "existing";
existingButton.textContent = "Login as existing user";
existingButton.style.display = "none"; // hidden by default

// Append elements to form and body
form.appendChild(usernameInput);
form.appendChild(document.createElement("br"));
form.appendChild(passwordInput);
form.appendChild(document.createElement("br"));
form.appendChild(checkboxInput);
form.appendChild(checkboxLabel);
form.appendChild(document.createElement("br"));
form.appendChild(submitButton);
body.appendChild(heading);
body.appendChild(form);
body.appendChild(existingButton);

// ---- Functional Logic ----

// Check localStorage for saved credentials
function checkSavedUser() {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingButton.style.display = "block";
  } else {
    existingButton.style.display = "none";
  }
}

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const remember = checkboxInput.checked;

  if (username === "" || password === "") return; // basic validation

  alert(`Logged in as ${username}`);

  if (remember) {
    // Save credentials in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    // Remove credentials if checkbox not checked
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  checkSavedUser();
});

// Handle "Login as existing user" button
existingButton.addEventListener("click", function () {
  const savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    alert(`Logged in as ${savedUsername}`);
  }
});

// Initialize state on page load
checkSavedUser();
