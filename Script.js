const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("active");
    menuToggle.classList.toggle("active");
    document.body.classList.toggle("nav-open");
});
