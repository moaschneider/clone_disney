document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabs = document.querySelectorAll('[data-tab-id]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero){
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    })

    // Seção de atrações, programação das abas
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tabButton;

            // Remove active class from all buttons and tabs
            buttons.forEach(btn => btn.classList.remove('shows__tabs__button--is-active'));
            tabs.forEach(tab => tab.classList.remove('shows__list--is-active'));

            // Add active class to the clicked button and corresponding tab
            button.classList.add('shows__tabs__button--is-active');
            document.querySelector(`[data-tab-id=${targetTab}]`).classList.add('shows__list--is-active');
        });
    });

    // Seção FAQ, accordion
    questions.forEach(question => {
        question.addEventListener('click', () => {
            const parentElement = question.parentNode;
            parentElement.classList.toggle('faq__questions__item--is-open');
        });
    });
});

function ocultaElementosDoHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}