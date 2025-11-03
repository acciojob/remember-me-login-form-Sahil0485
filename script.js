// DOM Elements
const body = document.body;

// Create elements dynamically
const heading = document.createElement("h1");
heading.textContent = "Login Form";

const form = document.createElement("form");

// --- Username field ---
const usernameLabel = document.createElement("label");
usernameLabel.setAttribute("for", "username");
usernameLabel.textContent = "Username:";
const usernameInput = document.createElement("input");
usernameInput.type = "text";
usernameInput.placeholder = "Username";
usernameInput.id = "username";

// --- Password field ---
const passwordLabel = document.createElement("label");
passwordLabel.setAttribute("for", "password");
passwordLabel.textContent = "Password:";
const passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.placeholder = "Password";
passwordInput.id = "password";

// --- Remember Me checkbox ---
const checkboxLabel = document.createElement("label");
checkboxLabel.setAttribute("for", "checkbox");
checkboxLabel.textContent = "Remember me:";
const checkboxInput = document.createElement("input");
checkboxInput.type = "checkbox";
checkboxInput.id = "checkbox";

// --- Submit button ---
const submitButton = document.createElement("input");
submitButton.type = "submit";
submitButton.id = "submit";
submitButton.value = "Submit";

// --- Existing user login button ---
const existingButton = document.createElement("button");
existingButton.id = "existing";
existingButton.textContent = "Login as existing user";
existingButton.style.display = "none";

// Append all elements
form.appendChild(usernameLabel);
form.appendChild(usernameInput);
form.appendChild(document.createElement("br"));

form.appendChild(passwordLabel);
form.appendChild(passwordInput);
form.appendChild(document.createElement("br"));

form.appendChild(checkboxLabel);
form.appendChild(checkboxInput);
form.appendChild(document.createElement("br"));

form.appendChild(submitButton);

body.appendChild(heading);
body.appendChild(form);
body.appendChild(existingButton);

// --- Logic ---
function checkSavedUser() {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");
  existingButton.style.display = savedUsername && savedPassword ? "block" : "none";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const remember = checkboxInput.checked;

  if (!username || !password) return;

  alert(`Logged in as ${username}`);

  if (remember) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  checkSavedUser();
});

existingButton.addEventListener("click", () => {
  const savedUsername = localStorage.getItem("username");
  if (savedUsername) alert(`Logged in as ${savedUsername}`);
});

checkSavedUser();
