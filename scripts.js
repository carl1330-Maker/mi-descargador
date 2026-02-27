// Versión mejorada con API real
async function downloadTikTokVideo(url) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'TU_API_KEY', // Obtén una API key de RapidAPI
            'X-RapidAPI-Host': 'tiktok-video-no-watermark-download.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(https://tiktok-video-no-watermark-download.p.rapidapi.com/tiktok?url=${encodeURIComponent(url)}, options);
        const data = await response.json();
        
        if (data && data.videoUrl) {
            // Crear enlace de descarga
            const downloadLink = document.createElement('a');
            downloadLink.href = data.videoUrl;
            downloadLink.download = 'tiktok_video.mp4';
            downloadLink.click();
            
            showResult('✅ Video descargado exitosamente!', 'success');
        } else {
            throw new Error('No se pudo obtener el video');
        }
    } catch (error) {
        throw new Error('Error en la API: ' + error.message);
    }
}
