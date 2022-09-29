const botaomenu = document.querySelector('.cabecalho_menu')
const menu = document.querySelector('.menu-lateral')

botaomenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral-ativo')
    
    console.log(document.querySelector('.menu-lateral'))//apenas para verificação do que o js traz no momento que o menu é clicado
})