document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".history-card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
            card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
        });
    });
});
