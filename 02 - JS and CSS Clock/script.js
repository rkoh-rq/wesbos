const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate(){
    const now = new Date();
    console.log(now)

    const seconds = now.getSeconds();
    const secondsDeg = ((seconds/60)*360) - 90;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;

    const minutes = now.getMinutes();
    const minutesDeg = ((minutes/60)*360) - 90;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;

    const hours = now.getHours();
    // added minutes such that the transition between hours is smoother and more similar to mechanical clocks
    const hoursDeg = ((hours/12)*360) + ((minutes/60)*30) - 90;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(setDate, 1000);