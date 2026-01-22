document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('hamburger');
  const nav = document.querySelector('.nav-menu');

  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('active'));
  });

  window.addEventListener('resize', () => {
    if(window.innerWidth > 769){
      nav.classList.remove('active');
    }
  });
});
