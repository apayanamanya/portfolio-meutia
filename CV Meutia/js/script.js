// DARK MODE🌙
const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// SCROLL REVEAL✨
const reveals = document.querySelectorAll(".reveal");

function scrollReveal() {
    reveals.forEach((section) => {
        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", scrollReveal);
scrollReveal();
