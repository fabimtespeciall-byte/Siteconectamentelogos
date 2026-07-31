// Aguarda o carregamento completo do DOM
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
      if (window.pageYOffset >= (sectionTop - 150)) {
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
      e.preventDefault(); // Impede o recarregamento da página

      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();

      // Validação básica de campos obrigatórios
      if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos obrigatórios (*).');
        return;
      }

      // Exibe mensagem de confirmação
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

  // 4. ESTRUTURA PREPARADA PARA FUTURA ANIMAÇÃO DOS INDICADORES
  // Módulo configurado para contagem animada via IntersectionObserver no futuro
  const inicializarAnimacaoIndicadores = () => {
    const elementosIndicadores = document.querySelectorAll('.indicador-numero');
    
    if (elementosIndicadores.length === 0) return;

    // Função reservada para disparar incremento contínuado de valores
    const animarContagem = (el) => {
      const valorAlvo = el.getAttribute('data-target');
      // A animação em JS será ativada aqui quando houver integração completa de dados
    };

    // Observador para disparar animação apenas quando visível na tela
    const observer = new IntersectionObserver((entries, observerSelf) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animarContagem(entry.target);
          observerSelf.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    elementosIndicadores.forEach(indicador => {
      observer.observe(indicador);
    });
  };

  // Executa inicialização estrutural dos indicadores
  inicializarAnimacaoIndicadores();

});
