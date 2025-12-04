// Smooth scroll only for index page
document.querySelectorAll("nav a").forEach(link => {
    const href = link.getAttribute("href");
    
    if (href && href.startsWith("#")) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});

// Hamburger toggle function (global)
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("open");
}

