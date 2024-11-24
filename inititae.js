function initiateProject() {
    const message = document.getElementById("thankYouMessage");
    message.style.display = "block";
    message.style.opacity = 0;

    // Gradual fade-in effect
    let opacity = 0;
    const fadeIn = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(fadeIn);
        }
        message.style.opacity = opacity;
        opacity += 0.1;
    }, 50);

    // Clear the form
    document.getElementById("projectForm").reset();
}
