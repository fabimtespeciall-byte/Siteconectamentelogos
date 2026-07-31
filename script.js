/* ==========================================================================
   CONECTAMENTE LOGOS - JAVASCRIPT FUNCIONAL
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* 1. ATUALIZAÇÃO AUTOMÁTICA DO ANO NO RODAPÉ */
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    /* 2. ELEVAÇÃO DO CABEÇALHO AO ROLAR A PÁGINA (SCROLL HEADER) */
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* 3. MENU MOBILE HAMBÚRGUER */
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fechar o menu ao clicar em qualquer link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    /* 4. MUDANÇA DE LINK ATIVO NO MENU COM BASE NA SEÇÃO VISÍVEL (SCROLLSPY) */
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const link = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

            if (link) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', scrollActive);

    /* 5. ENVIO E VALIDAÇÃO DO FORMULÁRIO DE DIAGNÓSTICO */
    const diagnosticoForm = document.getElementById('diagnosticoForm');
    const formFeedback = document.getElementById('formFeedback');

    if (diagnosticoForm) {
        diagnosticoForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Obter os valores do formulário
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const empresa = document.getElementById('empresa').value.trim();
            const area = document.getElementById('area').value.trim();
            const necessidade = document.getElementById('necessidade').value;

            // Simulação de envio com sucesso
            if (nome && email && empresa && area && recursiveNecessidade(necessidade)) {
                formFeedback.className = 'form-feedback success';
                formFeedback.innerHTML = `
                    <strong>Obrigado, ${nome}!</strong><br>
                    Seu diagnóstico preliminar para a área de <em>"${necessidade}"</em> foi recebido com sucesso. 
                    Nossa equipe entrará em contato pelo e-mail <u>${email}</u> em breve.
                `;

                // Limpar formulário
                diagnosticoForm.reset();

                // Rolar suavemente até o feedback
                formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    }

    function recursiveNecessidade(val) {
        return val !== '';
    }
});
