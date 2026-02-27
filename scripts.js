async function descargarVideo() {
    const urlInput = document.getElementById('videoUrl').value;
    const resultadoDiv = document.getElementById('resultado');

    if (!urlInput) {
        alert("Por favor, pega un link de TikTok");
        return;
    }

    resultadoDiv.innerHTML = "<p>Procesando video... ⏳</p>";

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'Ea83851a61msh25615bb080d6523p18f614jsn9a54926540a5',
            'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com'
        },
        body: new URLSearchParams({
            url: urlInput,
            hd: '1'
        })
    };

    try {
        const response = await fetch('https://tiktok-video-no-watermark2.p.rapidapi.com/', options);
        const res = await response.json();

        if (res.code === 0) {
            // Si la API responde correctamente, mostramos el éxito y el link
            resultadoDiv.innerHTML = `
                <p>✅ ¡Video encontrado!</p>
                <a href="${res.data.play}" target="_blank" class="download-btn">Descargar MP4 Sin Marca</a>
            `;
        } else {
            resultadoDiv.innerHTML = "<p>❌ Error: El link no es válido o el video es privado.</p>";
        }
    } catch (error) {
        console.error(error);
        resultadoDiv.innerHTML = "<p>❌ Hubo un error al conectar con el servidor.</p>";
    }
}
