// toggle detail project
function toggleDetail(id) {
  const el = document.getElementById(id);
  el.classList.toggle("hidden");
}

// scroll animation
const elements = document.querySelectorAll(".fade-in");

function revealOnScroll() {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();