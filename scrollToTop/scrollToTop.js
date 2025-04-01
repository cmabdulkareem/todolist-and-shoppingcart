const scrollIcon = document.querySelector(".scrollTop");

    // Show/Hide the Scroll to Top Button
    window.onscroll = () => {
        if (window.scrollY > 200) {
            scrollIcon.style.opacity = "1";
            scrollIcon.style.transform = "scale(1)";
            scrollIcon.style.pointerEvents = "auto";
        } else {
            scrollIcon.style.opacity = "0";
            scrollIcon.style.transform = "scale(0.25)";
            scrollIcon.style.pointerEvents = "none";
        }
    };

    // Scroll to top when the button is clicked
    scrollIcon.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };