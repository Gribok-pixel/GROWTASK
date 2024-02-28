const burgerMenu = document.querySelector('.mobile-menu div')
const burgerBlock = document.querySelector('.burger-block')

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active')
    burgerBlock.classList.toggle('burger-block-active')
})