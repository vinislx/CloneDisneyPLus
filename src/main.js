document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
            esconderTodasAbas();
            aba.classList.add('show__list--is-active');
            removerBotaoAtivo();
            botao.target.classList.add('show__tabs__button--is-active');
        })
    }
})

function removerBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');   

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('show__tabs__button--is-active');
    }
}

function esconderTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('show__list--is-active');
    }
}