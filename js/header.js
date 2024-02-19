const header = document.querySelector('header')
const menuBtn = document.querySelector('.mobile-menu')
const burgerBlock = document.querySelector('.burger-block')
const closeBtn = document.querySelector('.close-btn')

// Выпадающее меню при клике на бургер-icon (Экран <= 768px)
menuBtn.addEventListener('click', () => {
    menuBtn.style.transition = 'all .3s ease'
    menuBtn.style.bacgroundColor = '#11A6A6'
    burgerBlock.style.display = 'block'
    header.style.display = 'none'
})
closeBtn.addEventListener('click', () => {
    closeBtn.style.bacgroundColor = '#11A6A6'
    burgerBlock.style.display = 'none'
    header.style.display = 'flex'
})


