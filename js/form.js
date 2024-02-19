const form = document.querySelector('#main-form')
const check = document.querySelector('.submit-form div')

let url = 'https://growtask.ru'
let checked = false

// Клик по чекбоксу (checked изменяется на тру)
check.addEventListener('click', () => {
    check.style.border = 'none'
    check.style.backgroundColor = '#14CCCC'
    checked = true
})

// Валидация только на пустое значение
function validate() {
    for (let inp of form) {
        if (!inp.value) {
            inp.style.border = '2px solid #FF6666'
            return false
        } else {
            inp.style.border = '2px solid #DAF2F2'
        }
    }
    return true
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!checked) {
        check.style.border = '2px solid #FF6666'
    }
    if (validate() && checked) {

        // Объект со значениями из input'ов
        let data = {
            question: form[0].value.trim(),
            phoneOrEmail: form[1].value.trim(),
            name: form[2].value.trim(),
            social: form[3].value.trim()
        }
        
        // Очищяем поля формы после получения значений
        form[0].value = ''
        form[1].value = ''
        form[2].value = ''
        form[3].value = ''
        check.style.border = '2px solid #E1FAFA'
        check.style.backgroundColor = ''

        // POST запрос
        fetch(url, {
            method: "POST",
            body: data
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
})





