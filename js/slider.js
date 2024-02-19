const carousel = document.querySelector('.slider-carousel')
const sliderLine = document.querySelector('.slider-carousel__line')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

// Используется только для подсчета переменной imgWidth
const imageSize = document.querySelector('.slider-img-size')

// Константа ширины картинки в зависимости от разрешения экрана
const imgWidth = imageSize.clientWidth

// Ширина всех картинок в ряду
let carouselWidth = carousel.offsetWidth

imageSize.style.display = 'none'

function slider() {
    // Ряд картинок ездит с помощью mrgin-left (можно было и через translate(x))
    let marg = 0
    return function() {
        if (this.className === 'next-btn' && ((marg*(-1)) + Number(carouselWidth)) < imgWidth * 5) {
            marg-=imgWidth
            sliderLine.style.transition = 'margin-left .5s'
            sliderLine.style.marginLeft = marg + 'px'
        }
        if (this.className === 'prev-btn' && marg < 0) {
            marg+=imgWidth
            sliderLine.style.transition = 'margin-left .5s'
            sliderLine.style.marginLeft = marg + 'px'
        }
    }
}

let slidActive = slider()

nextBtn.addEventListener('click', slidActive)
prevBtn.addEventListener('click', slidActive)

let swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 20
});




// FuncyBox
const imagesForFuncy = document.querySelectorAll('.slider-img img')

// При клике на картинку из сладйера вызываем модалку и передаем туда src кликнутой картинки
for (let img of imagesForFuncy) {
    img.addEventListener('click', (e) => {
        const modal = document.querySelector('.modal')
        
        modal.childNodes[1].attributes.src.value = e.currentTarget.attributes.id.value
        modal.classList.remove('modal-none')

        document.addEventListener('click', (e) => {
            if (e.target.className === 'modal') {
                modal.classList.add('modal-none')
            }
        })
        document.querySelector('.modal-close').addEventListener('click', (e) => {
            modal.classList.add('modal-none')
        })
    })
}




