document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); // Add class when visible
            }
        });
    }, {
        root: null,  // Viewport
        threshold: 1, // Trigger when 20% of the element is visible
    });

    cards.forEach(card => observer.observe(card));
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
