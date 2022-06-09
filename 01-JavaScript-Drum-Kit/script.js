const keys = document.querySelectorAll('.key')
console.log(keys)

function playSound({keyCode}) {    
    const audio = document.querySelector(`audio[data-key='${keyCode}']`);
    const key = document.querySelector(`.key[data-key='${keyCode}']`);
    console.log(key)
    // if keyCode doesnt match a data-key exit out this function
    if (!audio) return ;
    // always start the audio at 0 
    audio.currentTime = 0;
    
    audio.play();

    key.classList.add('playing')

};


function end(e) {
    if (!e.propertyName !== 'transform' ) return
    this.classList.remove('playing')
    
}




document.addEventListener('keydown', playSound)
keys.forEach(key => {
    key.addEventListener('transitionend', end)
})