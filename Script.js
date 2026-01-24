const mobileNav = document.getElementById("mobileNav");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const closeBtn = document.getElementById("closeBtn");

hamburgerBtn.addEventListener("click", () => {
    mobileNav.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    mobileNav.classList.remove("active");
});
