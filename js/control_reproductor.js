document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = audioPlayer.querySelector('source');
    const streamURL = 'https://stream-153.zeno.fm/fh68vgu6echvv?zs=O2Vz_YmPRK2LYhik5c45OA';
  
    // Guarda la posición actual cuando el usuario pone pausa
    let currentPosition = 0;
  
    audioPlayer.addEventListener('pause', function () {
      currentPosition = audioPlayer.currentTime;
    });
  
    audioPlayer.addEventListener('play', function () {
        // Establece la fuente del reproductor de audio para cargar el streaming en vivo
        audioSource.src = streamURL;
  
        // Escucha el evento 'loadedmetadata' para asegurarte de que el reproductor esté listo antes de establecer la posición
        audioPlayer.addEventListener('loadedmetadata', function () {
        audioPlayer.currentTime = currentPosition;
        audioPlayer.play();

        // Recarga el reproductor de audio para cargar el streaming desde el principio
        audioPlayer.load();
      });
    });
  });