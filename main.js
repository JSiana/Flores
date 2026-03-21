window.onload = () => {
    const audio = document.getElementById('bgMusic');
    
    // Intentar reproducir música automáticamente
    const playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log("El navegador bloqueó el autoplay. Se necesita interacción.");
            // Si el navegador bloquea el audio, reproducir al primer click
            document.body.addEventListener('click', () => {
                audio.play();
            }, { once: true });
        });
    }

    // Remover clases de carga si existieran
    document.body.classList.remove("container");
};
