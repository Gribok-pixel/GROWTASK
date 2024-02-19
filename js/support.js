const questionBtns = document.querySelectorAll('.supports-item')

// Раскрываем и скрываем блок с ответом, так же меняем иконку кнопки
for (let btn of questionBtns) {
    let none = true
    btn.addEventListener('click', (e) => {
        if (none) {
            e.currentTarget.parentNode.childNodes[3].style.display = 'block'
            e.currentTarget.childNodes[3].childNodes[1].attributes.src.value = 'img/close.png'
            none = false
        } else {
            e.currentTarget.parentNode.childNodes[3].style.display = 'none'
            e.currentTarget.childNodes[3].childNodes[1].attributes.src.value = 'img/plus.png'
            none = true
        }
    })
}