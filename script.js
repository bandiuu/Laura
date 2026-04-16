const messageText = "Me encanta pasar tiempo contigo, de verdad. Tienes algo que hace que todo fluya fácil. Gracias por tu tiempo, tu paciencia y tu forma de ser. Me gustaría seguir conociéndote mucho más.";

const typingElement = document.getElementById('typing-text');
const musicBtn = document.getElementById('music-btn');
const audio = document.getElementById('bg-music');
const sunflowerContainer = document.getElementById('sunflower-container');

// 1. Efecto de Escritura (Typing Effect)
let index = 0;
function typeWriter() {
    if (index < messageText.length) {
        typingElement.innerHTML += messageText.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

// 2. Control de Música
musicBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        musicBtn.innerText = "Pausar música ⏸️";
    } else {
        audio.pause();
        musicBtn.innerText = "Reproducir música 🎵";
    }
});

// 3. Generar Girasoles Flotantes
function createSunflower() {
    const sunflower = document.createElement('div');
    sunflower.classList.add('floating-sunflower');
    sunflower.innerHTML = '🌻';
    sunflower.style.left = Math.random() * 100 + 'vw';
    sunflower.style.animationDuration = (Math.random() * 4 + 6) + 's';
    sunflowerContainer.appendChild(sunflower);

    setTimeout(() => {
        sunflower.remove();
    }, 10000);
}

// 4. Efecto Confetti al hacer clic
document.addEventListener('click', (e) => {
    confetti({
        particleCount: 50,
        spread: 70,
        origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
        colors: ['#FFD700', '#D4AF37', '#FFFACD']
    });
});

// Iniciar procesos
window.onload = () => {
    typeWriter();
    setInterval(createSunflower, 800);
};
