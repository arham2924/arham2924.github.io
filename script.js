document.getElementById("yesButton").addEventListener("click", function() {
    // Change the src attribute of the iframe to the new teddy bear animation
    document.getElementById("giphyIframe").src = "https://giphy.com/embed/l3q2uTMBcedNfsNxe";
    // Update the text to celebrate her response
    document.querySelector(".valentine-text h1").innerText = "Your stuck with me forever babe🤪";
    // Hide the button after she clicks "Yes"
    document.getElementById("yesButton").style.display = "none";
});
