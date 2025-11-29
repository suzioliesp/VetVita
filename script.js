// MENU HAMBÚRGUER
const navToggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');
const navLinks = document.querySelectorAll('.nav__link');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navList.classList.toggle('nav__list--open');
  });

  // Fecha o menu ao clicar em um link (mobile)
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navList.classList.remove('nav__list--open');
      navToggle.classList.remove('open');
    });
  });
}

// DESTACAR LINK ATIVO AO ROLAR
const sections = document.querySelectorAll('main section, #home');
const offsetHeader = 80; // altura aproximada do header

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + offsetHeader;

  let activeId = null;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    const bottom = top + section.offsetHeight;

    if (scrollPosition >= top && scrollPosition < bottom) {
      activeId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('nav__link--active');
    const href = link.getAttribute('href') || '';
    if (activeId && href === `#${activeId}`) {
      link.classList.add('nav__link--active');
    }
  });
});

// FORMULÁRIO DE CADASTRO (placeholder por enquanto)
const formCadastro = document.getElementById('form-cadastro');

if (formCadastro) {
  formCadastro.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = formCadastro.nome.value.trim();

    alert(
      nome
        ? `Cadastro simulado para ${nome}. Em breve isso vai conversar com o Firebase 😉`
        : 'Cadastro simulado. Em breve isso vai conversar com o Firebase 😉'
    );

    formCadastro.reset();
  });
}
