document.addEventListener("click", function(event) {
    // Create an image element for the flash effect
    var flashImage = document.createElement("img");
    flashImage.src = 'assets/images/IslandBoysHopOnARK.gif'; // Replace with your GIF path
    flashImage.className = 'click-flash'; // You can style this class in your CSS

    // Set the position of the flash at the click coordinates
    flashImage.style.left = (event.clientX - 50) + "px"; // Adjust as needed
    flashImage.style.top = (event.clientY - 50) + "px"; // Adjust as needed

    // Append the flash image to the body
    document.body.appendChild(flashImage);

    // Remove the flash image after a short delay (e.g., 500ms)
    setTimeout(function() {
        document.body.removeChild(flashImage);
    }, 500);
});
