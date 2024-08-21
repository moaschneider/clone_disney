document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabs = document.querySelectorAll('[data-tab-id]');

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
});