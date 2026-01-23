const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    mobileMenu.style.display =
        mobileMenu.style.display === "block" ? "none" : "block";
});

/* SCROLL ANIMATION */
const elements = document.querySelectorAll("[data-animate]");

function reveal(){
    elements.forEach(el=>{
        const pos = el.getBoundingClientRect().top;
        if(pos < window.innerHeight - 100){
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();
