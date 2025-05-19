// Get the "Scroll to Top" button by its ID
let mybutton = document.getElementById("up-button");

// Show or hide the button when the user scrolls
window.onscroll = function() {
  scrollFunction();
};

// Function to display the button after scrolling down 20px from the top
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block"; // Show the button
  } else {
    mybutton.style.display = "none"; // Hide the button
  }
}

// Scroll to the top of the document when the button is clicked
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}