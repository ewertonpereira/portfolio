const buttonHeaderMenu = document.querySelector('[data-button-header-menu]')

buttonHeaderMenu.addEventListener('click', (e) => {
    e.preventDefault()

    const headerMenu = document.querySelector('[data-header-menu]')
    const buttonHeaderMenu = document.querySelector('[data-button-header-menu]')
    
    headerMenu.classList.toggle('active')

    headerMenu.classList.contains('active') 
        ? buttonHeaderMenu.innerHTML = 'close'
        : buttonHeaderMenu.innerHTML = 'menu'
})
