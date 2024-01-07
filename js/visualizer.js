// En tu archivo .js (visualizer.js o cualquier otro nombre que hayas dado)

document.addEventListener('DOMContentLoaded', function () {
    const NBR_OF_BARS = 50;
    const audio = document.getElementById('audio');

    if (!audio) {
        console.error('No se encontró el elemento de audio.');
        return;
    }

    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = ctx.createAnalyser();

    const source = ctx.createMediaElementSource(audio);
    source.connect(analyser);
    source.connect(ctx.destination);

    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const visualizerContainer = document.querySelector('.visualizer-container');

    for (let i = 0; i < NBR_OF_BARS; i++) {
        const bar = document.createElement('div');
        bar.classList.add('visualizer-container__bar');
        visualizerContainer.appendChild(bar);
    }

    function renderFrame() {
        analyser.getByteFrequencyData(dataArray);

        for (let i = 0; i < NBR_OF_BARS; i++) {
            const bar = document.querySelector('.visualizer-container__bar:nth-child(' + (i + 1) + ')');
            const value = dataArray[Math.floor((i / NBR_OF_BARS) * bufferLength)];
            const barHeight = (value / 256) * visualizerContainer.clientHeight * 0.9 + 1;

            bar.style.height = barHeight + 'px';
        }

        requestAnimationFrame(renderFrame);
    }

    audio.addEventListener('play', function () {
        ctx.resume().then(() => {
            renderFrame();
        });
    });
});

// Agrega el siguiente código después del código de tu reproductor de audio
// Asígnale el mismo id que has usado en tu elemento visualizer-container
var wavesurfer = WaveSurfer.create({
    container: '.visualizer-container',
    waveColor: '#4F4A85',
    progressColor: '#383351',
    plugins: [
        WaveSurfer.peaks.create()
    ]
});

// Conecta el reproductor de audio al visualizador
audio.addEventListener('play', function () {
    wavesurfer.play();
});

audio.addEventListener('pause', function () {
    wavesurfer.pause();
});

audio.addEventListener('volumechange', function () {
    wavesurfer.setVolume(audio.volume);
});

wavesurfer.load('https://stream-153.zeno.fm/fh68vgu6echvv?zs=O2Vz_YmPRK2LYhik5c45OA');
