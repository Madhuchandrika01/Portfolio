document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Ensure navLinks remains horizontal on mobile
    if (window.innerWidth <= 768) {
        navLinks.classList.remove("active"); 
    }

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
