document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle menu on hamburger click
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu on nav link click (mobile)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Close menu on window resize beyond mobile
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
});
