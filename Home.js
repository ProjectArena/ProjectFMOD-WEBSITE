// Wait for the page to load
document.addEventListener("DOMContentLoaded", function() {
    // Get the button and update message element
    var updateButton = document.getElementById("update-button");
    var updateMessage = document.getElementById("update-message");
    
    // Add click event listener to the button
    updateButton.addEventListener("click", function() {
      // Change the update message when the button is clicked
      updateMessage.textContent = "No Launcher but bots up";
    });
  });
  