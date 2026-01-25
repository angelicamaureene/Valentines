function nextPage() {
    window.location.href = "yes.html"; // Redirects to the second page
}

function moveButton() {
    const button = document.getElementById("noButton");
    const x = Math.random() * window.innerWidth * 0.8;
    const y = Math.random() * window.innerHeight * 0.8;
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}
