// Sidebar Toggle
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

// Close sidebar when clicking link
document.querySelectorAll(".sidebar a").forEach(a => {
  a.addEventListener("click", () => sidebar.classList.remove("open"));
});

// Counter Animation
const counters = document.querySelectorAll(".counter");
const speed = 100;

counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute("data-target");
    const value = +counter.innerText;
    const inc = target / speed;

    if(value < target){
      counter.innerText = Math.ceil(value + inc);
      setTimeout(update, 18);
    } else {
      counter.innerText = target;
    }
  };
  update();
});

// FAQ Accordion
document.querySelectorAll(".faq-item button").forEach(btn => {
  btn.addEventListener("click", () => {
    const p = btn.nextElementSibling;
    p.style.display = p.style.display === "block" ? "none" : "block";
  });
});

// Dark / Light Toggle
const themeToggle = document.getElementById("themeToggle");
let dark = false;

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.innerText = dark ? "🌙" : "☀️";
  dark = !dark;
});
