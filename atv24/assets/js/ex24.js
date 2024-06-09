function toggleMenu() {
    const menuContent = document.getElementById('menuContent');
    if (menuContent.classList.contains('show')) {
        menuContent.classList.remove('show');
        setTimeout(() => {
            menuContent.style.display = 'none';
        }, 300);
    } else {
        menuContent.style.display = 'block';
        setTimeout(() => {
            menuContent.classList.add('show');
        }, 10);
    }
}

document.addEventListener('click', function (event) {
    var menuContent = document.getElementById('menuContent');
    var menuIcon = document.querySelector('.menu-icon');

    var isClickInsideMenu = menuContent.contains(event.target) || menuIcon.contains(event.target);

    if (!isClickInsideMenu) {
        menuContent.classList.remove('show');
    }
});

/* ---------------------------------------PADRAO---------------------------------------------------- */

    // Obtenha os elementos do player
    const audio = document.getElementById('audio');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const stopBtn = document.getElementById('stop-btn');
    const audioFile = document.getElementById('audio-file');
    const songInfo = document.querySelector('.song-info');
    const timeLeft = document.querySelector('.time-left');

    // Adicione eventos aos botões
    playBtn.addEventListener('click', () => {
        audio.play();
    });

    pauseBtn.addEventListener('click', () => {
        audio.pause();
    });

    stopBtn.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0;
    });

    // Evento para quando o usuário seleciona um arquivo de áudio
    audioFile.addEventListener('change', () => {
        const file = audioFile.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            audio.src = e.target.result;
            audio.play();
            songInfo.textContent = `Música: ${file.name}`;
        };

        reader.readAsDataURL(file);
    });

    // Atualiza o tempo restante da música
    audio.addEventListener('timeupdate', () => {
        const duration = audio.duration;
        const currentTime = audio.currentTime;
        const timeLeftValue = duration - currentTime;
        const minutes = Math.floor(timeLeftValue / 60);
        const seconds = Math.floor(timeLeftValue % 60);
        timeLeft.textContent = `Tempo restante: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    });