
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})
// !CONTACT BTN ROTATION


const textBtns = document.querySelectorAll('.contact__btn');

textBtns.forEach(textBtn => {
    let text = textBtn.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((charater, index) =>
        `<span style="transform:rotate(${index * 12}deg)">${charater}</span>`).join('');
})


// !SWIPER
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 60,
        }
    }
});


// !NAVBAR TOGGLE


const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const navMenu = document.querySelector(' .nav__links');

openBtn.addEventListener('click', () => {
    navMenu.style.display = 'flex';
    openBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})


closeBtn.addEventListener('click', () => {
    navMenu.style.display = 'none';
    openBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
})