
function setDate() {
    const secHand =  document.querySelector('.second-hand');
    const minHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    const now = new Date()
    const seconds = now.getSeconds()
    const degSeconds = ((seconds / 60) * 360) + 90;
    secHand.style.transform = `rotate(${degSeconds}deg)`

    const minute = now.getMinutes()
    const degMinute = ((minute / 60) * 360) + 90;
    minHand.style.transform = `rotate(${degMinute}deg)` 

    const hour = now.getHours()
    const degHours = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${degHours}deg)`
}

setInterval(setDate, 1000)
