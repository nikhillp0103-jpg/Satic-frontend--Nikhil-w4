const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");

hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// auto close when clicking link
document.querySelectorAll(".nav a").forEach(link=>{
  link.addEventListener("click",()=>{
    navMenu.classList.remove("show");
  });
});
