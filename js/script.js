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

const btnCart = document.querySelector('.btn-cart');

// Função para abrir/fechar o carrinho
btnCart.addEventListener('click', function () {
    const cartCard = document.getElementById('cart-card'); // Supondo que este elemento existe no HTML
    if (cartCard) {
        cartCard.classList.toggle('show');  // Exibe ou oculta o card
    } else {
        console.error('Elemento cartCard não encontrado!');
    }
});

// Função para fechar o carrinho
const closeCartBtn = document.getElementById('close-cart-btn'); // Supondo que este elemento também existe no HTML
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

// Pesquisa de produtos
window.onload = function() {
    document.getElementById('search-header').onkeyup = function() {
        searchFunction();
    };

    function searchFunction() {
        let input = document.getElementById('search-header').value.toLowerCase();
        
        let produtos = document.getElementsByClassName('produto');

        // Loop através de cada produto e verifica se o texto inclui o termo de pesquisa
        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].innerHTML.toLowerCase().includes(input)) {
                produtos[i].style.display = "";  // Exibe o produto
            } else {
                produtos[i].style.display = "none";  // Oculta o produto
            }
        }
    }
};

