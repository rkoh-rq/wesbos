function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    if(!audio) return; //stop function if no audio
    audio.currentTime = 0; //otherwise rewind audio to start
    audio.play(); //play audio
    key.classList.add('playing');

};

function removeTransition(e){
    if (e.propertyName !=='transform') return;
    this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key')
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
});
window.addEventListener('keydown', playSound);