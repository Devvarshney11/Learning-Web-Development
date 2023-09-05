document.addEventListener('keydown', function (event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if (!audio)
        return;
    audio.currentTime = 0;
    audio.play();
    const box = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if (!box)
        return;
    box.classList.toggle('highlight');
    box.addEventListener('transitionend',function()
    {
        box.classList.remove('highlight');
    })
});
