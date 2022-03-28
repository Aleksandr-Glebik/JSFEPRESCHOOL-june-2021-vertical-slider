const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')

const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide');


const slidesCount = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container')

const arrImg = ['./img/blue.jpg', './img/green.jpg', './img/red.jpg', './img/violet.jpg', './img/white.jpg']

// так как изначально были не зеркально внесены секции sidebar and main-slider переделал зеркальное внесение div в html файл
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

let activeSlideIndex = 0

upButton.addEventListener('click', () => {
    changeSlide('up')
});

downButton.addEventListener('click', () => {
    changeSlide('down')
});

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}

function preloadImages() {
    arrImg.forEach((el) => {
        // console.log('el', el);
        // console.log('el', typeof el);
        for (let i = 1; i <= 6; i++) {
            const img = new Image()
            img.src = el
        }
    })
}

preloadImages()