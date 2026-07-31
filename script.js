// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {

  // 1. MENU HAMBÚRGUER RESPONSIVO
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Fechar menu mobile ao clicar em qualquer item
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // 2. HIGHLIGHT DO MENU DURANTE A ROLAGEM (SCROLLSPY)
  const sections = document.querySelectorAll('section, footer');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - 150)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // 3. VALIDAÇÃO E ENVIO DO FORMULÁRIO DE DIAGNÓSTICO
  const formDiagnostico = document.getElementById('formDiagnostico');
  const formFeedback = document.getElementById('formFeedback');

  if (formDiagnostico) {
    formDiagnostico.addEventListener('submit', (e) => {
      e.preventDefault(); // Impede o envio padrão da página

      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();

      // Validação básica
      if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos obrigatórios (*).');
        return;
      }

      // Exibe mensagem de sucesso
      formFeedback.innerHTML = "Obrigado pelo contato! Nossa equipe analisará sua solicitação e retornará em breve.";
      formFeedback.className = "form-feedback success";
      
      // Limpa os campos do formulário
      formDiagnostico.reset();

      // Oculta a mensagem após 6 segundos
      setTimeout(() => {
        formFeedback.className = "form-feedback";
      }, 6000);
    });
  }

});
