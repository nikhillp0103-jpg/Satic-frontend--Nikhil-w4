// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.onclick = () => {
    menu.classList.toggle("show");
};

// Go to top
const goTop = document.getElementById("goTop");

window.addEventListener("scroll", () => {
    goTop.style.display = window.scrollY > 200 ? "block" : "none";
});

goTop.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Reveal animations
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
