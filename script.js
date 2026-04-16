const messageText = "Me encanta pasar tiempo contigo, de verdad. Tienes algo que hace que todo fluya fácil. Gracias por tu tiempo, tu paciencia y tu forma de ser. Me gustaría seguir conociéndote mucho más.";

const typingElement = document.getElementById('typing-text');
const musicBtn = document.getElementById('music-btn');
const audio = document.getElementById('bg-music');
const sunflowerContainer = document.getElementById('sunflower-container');

let index = 0;
function typeWriter() {
    if (index < messageText.length) {
        typingElement.innerHTML += messageText.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

musicBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        musicBtn.innerText = "Pausar música ⏸️";
    } else {
        audio.pause();
        musicBtn.innerText = "Reproducir música 🎵";
    }
});

function createSunflower() {
    const sunflower = document.createElement('div');
    sunflower.classList.add('floating-sunflower');
    sunflower.innerHTML = '🌻';
    sunflower.style.left = Math.random() * 100 + 'vw';
    
    const size = (Math.random() * 1.5 + 1.2) + 'rem';
    sunflower.style.fontSize = size;
    
    const duration = (Math.random() * 5 + 7) + 's';
    sunflower.style.animationDuration = duration;
    
    sunflowerContainer.appendChild(sunflower);

    setTimeout(() => { sunflower.remove(); }, 12000);
}

document.addEventListener('click', (e) => {
    confetti({
        particleCount: 40,
        spread: 60,
        origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
        colors: ['#FFD700', '#D4AF37', '#FFFACD']
    });
});

window.onload = () => {
    setTimeout(typeWriter, 1000); // Espera un segundo para empezar a escribir
    setInterval(createSunflower, 600);
};
