const hamburger=document.getElementById("hamburger");
const nav=document.getElementById("nav");

hamburger.onclick=()=>nav.classList.toggle("active");

const reveals=document.querySelectorAll(".reveal");
window.addEventListener("scroll",()=>{
    reveals.forEach(e=>{
        if(e.getBoundingClientRect().top < window.innerHeight-100){
            e.classList.add("active");
        }
    });
});
