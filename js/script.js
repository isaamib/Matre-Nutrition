let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    const slider = document.querySelector('.slider');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    slider.style.transform = `translateX(-${currentSlide * 100}vw)`; // Usa vw para ocupar toda a tela
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Automatic Slide
setInterval(() => {
    nextSlide();
}, 3000); // Change slide every 3 seconds

const countdownElement = document.getElementById('countdown');
const promoBanner = document.getElementById('promo-banner');
const closeButton = document.getElementById('close-banner');
let timeLeft = 1800; // 30 minutos em segundos

const countdownTimer = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    countdownElement.innerHTML = `${minutes}m ${seconds}s restantes`;

    if (timeLeft <= 0) {
        clearInterval(countdownTimer);
        countdownElement.innerHTML = "Tempo esgotado!";
    }
    timeLeft--;
}, 1000);

closeButton.addEventListener('click', () => {
    promoBanner.style.display = 'none'; // Esconde o banner ao clicar no botão
});

