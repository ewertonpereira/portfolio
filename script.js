const buttonMenu = document.querySelector('[data-button__menu]')

buttonMenu.addEventListener('click', (e) => {
    e.preventDefault()

    const menuSelection = document.querySelector('[data-menu__selection]')

    menuSelection.classList.toggle('active')

    menuSelection.classList.contains('active') 
        ? buttonMenu.innerHTML = 'close'
        : buttonMenu.innerHTML = 'menu'
})