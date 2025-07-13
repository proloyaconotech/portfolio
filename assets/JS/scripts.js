
      // Wait until the DOM content is fully loaded before running this script
document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the class "dropbtn" (dropdown buttons)
  const buttons = document.querySelectorAll(".dropbtn");

  // For each dropdown button, add a click event listener
  buttons.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent the click event from bubbling up

      // Get the ID of the dropdown content to toggle from the button's data-target attribute
      const targetId = btn.getAttribute("data-target");
      const dropdownToToggle = document.getElementById(targetId);

      // Close all other dropdown menus except the one clicked
      document.querySelectorAll(".dropdown-content").forEach((dropdown) => {
        if (dropdown !== dropdownToToggle) {
          dropdown.classList.remove("show");
        }
      });

      // Toggle visibility of the targeted dropdown menu
      dropdownToToggle.classList.toggle("show");
    });
  });

  // Close all dropdown menus if the user clicks outside any dropdown
  window.addEventListener("click", function () {
    document.querySelectorAll(".dropdown-content").forEach((dropdown) => {
      dropdown.classList.remove("show");
    });
  });
});

// Initialize the Animate On Scroll (AOS) library with custom options
AOS.init({
  duration: 1000,  // Animation duration in milliseconds
  once: true       // Only animate elements once when they first appear
});

// Select all navigation links and dropdown buttons for active state toggling
const links = document.querySelectorAll("nav a, nav .dropbtn");

// Add a click event listener to each nav link and dropdown button
links.forEach(link => {
  link.addEventListener("click", function () {
    // Remove 'active' class from all links/buttons
    links.forEach(el => el.classList.remove("active"));
    // Add 'active' class to the clicked link/button
    this.classList.add("active");
  });
});