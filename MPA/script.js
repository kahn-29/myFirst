// script.js
// Get the elements from the document
const homeLink = document.getElementById("home-link");
const aboutLink = document.getElementById("about-link");
const alertButton = document.getElementById("alert-button");

// Add event listener for the alert button
if (alertButton) {
  alertButton.addEventListener("click", () => {
    // Show an alert message
    alert("Hello from the home page!");
  });
}
