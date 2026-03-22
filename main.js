var audio = document.getElementById("bgMusic");
var lyrics = document.querySelector("#lyrics");

// 1. TUS LETRAS (Mantenemos tus tiempos originales)
var lyricsData = [
  { text: "At the time", time: 15 },
  { text: "The whisper of birds", time: 18 },
  { text: "Lonely before the sun cried", time: 27 },
  { text: "Fell from the sky", time: 32 },
  { text: "Like water drops", time: 33 },
  { text: "Where I'm now? I don't know why", time: 41 },
  { text: "Nice butterflies in my hands", time: 47 },
  { text: "Too much light for twilight", time: 54 },
  { text: "In the mood for the flowers love", time: 59 },
  { text: "That vision", time: 67 },
  { text: "Really strong, blew my mind", time: 72 },
  { text: "Silence Let me see what it was", time: 78 },
  { text: "I only want to live in clouds", time: 83 },
  { text: "Where I'm now? I don't know why", time: 91 },
  { text: "Nice butterflies in my hands", time: 97 },
  { text: "Too much light for twilight", time: 104 },
  { text: "In the mood for the flowers love", time: 108 },
  { text: "At the time", time: 144 },
  { text: "The whisper of birds", time: 148 },
  { text: "Lonely before the sun cried", time: 153 },
  { text: "Fell from the sky", time: 158 },
  { text: "Like water drops", time: 164 },
  { text: "Where I'm now? I don't know why", time: 169 },
  { text: "Nice butterflies in my hands", time: 176 },
  { text: "Too much light for twilight", time: 183 },
  { text: "In the mood for the flowers", time: 188 },
  { text: "Love.", time: 192 }
];

// 2. LÓGICA DE LAS LETRAS
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(line => time >= line.time && time < line.time + 5);

  if (currentLine) {
    lyrics.style.opacity = 1;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}
setInterval(updateLyrics, 500);

// 3. EFECTO DE GENERAR FLORES (Lo nuevo)
function createFlower() {
    const container = document.querySelector('.flowers'); // Buscamos el div del HTML
    if (!container) return;

    const flower = document.createElement('div');
    flower.className = 'flower';
    
    // Posición aleatoria
    const posX = Math.random() * 100; 
    const size = 0.6 + Math.random() * 0.8; // Tamaños variados

    flower.style.left = posX + 'vw';
    flower.style.transform = 'scale(' + size + ')';

    flower.innerHTML = `
        <div class="flower__leafs">
            <div class="flower__leaf flower__leaf--1"></div>
            <div class="flower__leaf flower__leaf--2"></div>
            <div class="flower__leaf flower__leaf--3"></div>
            <div class="flower__leaf flower__leaf--4"></div>
            <div class="flower__white-circle"></div>
        </div>
        <div class="flower__line"></div>
    `;

    container.appendChild(flower);

    // Se eliminan después de 15 segundos para que no se trabe la página
    setTimeout(() => {
        flower.remove();
    }, 15000); 
}

// Genera una flor nueva cada 800ms (puedes bajarlo si quieres más flores)
setInterval(createFlower, 800);

// 4. FUNCIONES DE INICIO Y TÍTULO
setTimeout(() => {
  var titulo = document.querySelector(".titulo");
  if (titulo) {
    titulo.style.transition = "opacity 3s";
    titulo.style.opacity = "0";
    setTimeout(() => titulo.style.display = "none", 3000);
  }
}, 216000);

document.addEventListener('click', () => {
    audio.play();
}, { once: true });
