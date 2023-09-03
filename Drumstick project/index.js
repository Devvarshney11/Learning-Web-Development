document.addEventListener('keydown', function(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
})