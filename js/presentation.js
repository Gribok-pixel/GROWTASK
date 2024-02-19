const presentationScreen = document.querySelector('.presentation__screen img')
const presentationBtns = document.querySelectorAll('.presentation-btn')

// Передаем src, из кликнутой кнопки, в src главного экрана
for (let button of presentationBtns) {
    button.addEventListener('click', (e) => {
        let active = e.currentTarget.childNodes[1].attributes[0].value

        // Меняем бордер активной кнопки
        for (let button of presentationBtns) {
            button.classList.remove('active')
        }
        button.classList.add('active')

        presentationScreen.attributes[0].value = active
    })
}