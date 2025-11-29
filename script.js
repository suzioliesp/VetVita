document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Menu hambúrguer
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('nav-open');
      navToggle.classList.toggle('open');
    });
  }

  // Scroll suave e estado ativo dos links
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }

      // fecha o menu no mobile
      if (window.innerWidth <= 720 && navMenu.classList.contains('nav-open')) {
        navMenu.classList.remove('nav-open');
        navToggle.classList.remove('open');
      }

      navLinks.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Placeholder de envio de formulário (por enquanto só exibe alerta)
  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Cadastro enviado! (aqui depois ligamos no Firebase 😉)');
      signupForm.reset();
    });
  }
});
