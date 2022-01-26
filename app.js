window.addEventListener("scroll", function() {
    let nav = document.querySelector("nav");
    if (window.scrollY > 400) {
        nav.classList.add("scroll");
    } else {
        nav.classList.remove("scroll");
    }
});

