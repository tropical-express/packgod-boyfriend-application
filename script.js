const launchButton = document.getElementById("launchBtn");

launchButton.addEventListener("click", () => {

    launchButton.textContent = "ONLINE";

    launchButton.style.boxShadow =
        "0 0 30px #ff6600";

    console.log("Neon system launched");

});

