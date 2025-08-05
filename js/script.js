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
    slider.style.transform = `translateX(-${currentSlide * 100}vw)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

setInterval(() => {
    nextSlide();
}, 3000); 

const countdownElement = document.getElementById('countdown');
const promoBanner = document.getElementById('promo-banner');
const closeButton = document.getElementById('close-banner');

let timeLeft = 1800; 

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
    promoBanner.style.display = 'none'; 
});

const btnCart = document.querySelector('.btn-cart');

btnCart.addEventListener('click', function () {
    const cartCard = document.getElementById('cart-card'); 
    if (cartCard) {
        cartCard.classList.toggle('show'); 
    } else {
        console.error('Elemento cartCard não encontrado!');
    }
});

const closeCartBtn = document.getElementById('close-cart-btn');
if (closeCartBtn) {
    closeCartBtn.addEventListener('click', function () {
        const cartCard = document.getElementById('cart-card');
        if (cartCard) {
            cartCard.classList.remove('show');
        }
    });
} else {
    console.error('Elemento closeCartBtn não encontrado!');
}

window.onload = function() {
    document.getElementById('search-header').onkeyup = function() {
        searchFunction();
    };

    function searchFunction() {
        let input = document.getElementById('search-header').value.toLowerCase();
        
        let produtos = document.getElementsByClassName('produto');

        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].innerHTML.toLowerCase().includes(input)) {
                produtos[i].style.display = "";  
            } else {
                produtos[i].style.display = "none";  
            }
        }
    }
};

