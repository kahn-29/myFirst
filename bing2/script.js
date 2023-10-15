// script.js
// Get the elements from the document
const homeTab = document.getElementById("home-tab");
const aboutTab = document.getElementById("about-tab");
const tabs = document.getElementById("tabs");
const content = document.getElementById("content");

// Define the content for each tab
const homeContent = "<p>Welcome GDSC to this simple SPA example.</p>";
const aboutContent = "<p>This is a simple SPA example made with HTML, CSS and JS that I copied from AI.</p>";

// Add event listeners for each tab
homeTab.addEventListener("click", () => {
  // Set the home tab as active and the about tab as inactive
  homeTab.classList.add("active");
  aboutTab.classList.remove("active");
  
  // Set the content to the home content
  content.innerHTML = homeContent;
});

aboutTab.addEventListener("click", () => {
  // Set the about tab as active and the home tab as inactive
  aboutTab.classList.add("active");
  homeTab.classList.remove("active");
  
  // Set the content to the about content
  content.innerHTML = aboutContent;
});
