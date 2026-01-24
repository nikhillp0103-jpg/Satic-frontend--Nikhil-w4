const burger = document.getElementById("burger");
const navMenu = document.getElementById("navMenu");

burger.onclick = () => {
    navMenu.classList.toggle("show");
};

const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
    scrollTop.style.display = window.scrollY > 200 ? "block" : "none";
});

scrollTop.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
