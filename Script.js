/* MENU */
const hamburger = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

/* TESTIMONIAL CAROUSEL */
const track = document.getElementById("carouselTrack");
const prev = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");

let index = 0;

next.onclick = () => move(1);
prev.onclick = () => move(-1);

function move(dir) {
  const cards = track.children.length;
  index = (index + dir + cards) % cards;
  track.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(() => move(1), 3500);
