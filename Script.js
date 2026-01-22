const observers = document.querySelectorAll('.section, .service-card, .tcard, .why-item');

const reveal = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

observers.forEach(el=>{
  el.style.opacity = 0;
  el.style.transform = "translateY(20px)";
  el.style.transition = ".6s ease";
  reveal.observe(el);
});
