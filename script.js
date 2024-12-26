// Play Birthday Song
const audio = document.getElementById('birthday-song');
const playPauseButton = document.getElementById('play-pause');
const progressBar = document.getElementById('progress-bar');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');

function togglePlay() {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
}

audio.addEventListener('timeupdate', () => {
    const currentTime = Math.floor(audio.currentTime);
    const duration = Math.floor(audio.duration);

    progressBar.value = (audio.currentTime / audio.duration) * 100 || 0;

    currentTimeEl.textContent = formatTime(currentTime);
    durationEl.textContent = formatTime(duration);
});

progressBar.addEventListener('input', () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}


// Scroll to Section
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Create Balloons
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = `${Math.random() * 100}vw`;
    balloon.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.body.appendChild(balloon);

    setTimeout(() => balloon.remove(), 5000);
}

// Generate Balloons at Intervals
setInterval(createBalloon, 500);
