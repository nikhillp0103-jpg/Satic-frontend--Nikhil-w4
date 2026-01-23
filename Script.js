// SIDEBAR & OVERLAY TOGGLE
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  overlay.style.opacity = sidebar.classList.contains("open") ? "1" : "0";
  overlay.style.visibility = sidebar.classList.contains("open") ? "visible" : "hidden";
});

// Close sidebar on overlay click
overlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.style.opacity = "0";
  overlay.style.visibility = "hidden";
});

// Close sidebar when clicking a link
document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.style.opacity = "0";
    overlay.style.visibility = "hidden";
  });
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
      setTimeout(update,18);
    } else { counter.innerText = target; }
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

// Dark/Light Mode
const themeToggle = document.getElementById("themeToggle");
let dark = false;
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.innerText = dark ? "🌙" : "☀️";
  dark = !dark;
});
