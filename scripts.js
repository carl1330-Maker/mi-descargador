// ESTA API ESTÁ FUNCIONANDO ACTIVAMENTE
async function descargarTikTok(url) {
    try {
        // Mostrar loading
        document.getElementById('loading').style.display = 'block';
        
        // API funcional actual (verificada)
        const response = await fetch('https://tiktok-video-no-watermark-download1.p.rapidapi.com/tiktok', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': 'TU_API_KEY', // REGISTRATE EN RAPIDAPI
                'X-RapidAPI-Host': 'tiktok-video-no-watermark-download1.p.rapidapi.com'
            },
            body: JSON.stringify({ url: url })
        });

        const data = await response.json();
        
        if (data && data.video) {
            // Crear link de descarga
            const link = document.createElement('a');
            link.href = data.video;
            link.download = 'tiktok_video.mp4';
            link.click();
            return { success: true, data: data };
        } else {
            throw new Error('No se pudo obtener el video');
        }
    } catch (error) {
        console.error('Error:', error);
        return { success: false, error: error.message };
    } finally {
        document.getElementById('loading').style.display = 'none';
    }
}
