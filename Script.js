

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.onclick = () => {
    navLinks.classList.toggle("show");
};


const goTop = document.getElementById("goTop");

window.addEventListener("scroll", () => {
    goTop.style.display = window.scrollY > 200 ? "block" : "none";
});

goTop.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};


