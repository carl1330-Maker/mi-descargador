async function descargarVideo() {
    const url = document.getElementById('videoUrl').value;
    const resultado = document.getElementById('resultado');

    if (!url) {
        alert("Por favor, pega un link de TikTok");
        return;
    }

    resultado.innerHTML = "<p>Buscando video... ⏳</p>";

    // NOTA: Aquí necesitarás conectar tu API de RapidAPI más adelante
    // Por ahora, este es un ejemplo de cómo se vería el botón al terminar
    setTimeout(() => {
        resultado.innerHTML = `
            <p>✅ ¡Video encontrado!</p>
            <a href="#" class="download-btn">Descargar MP4</a>
        `;
    }, 2000);
}
