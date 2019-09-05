const secondsHand = document.querySelector(".seconds");
const minutesHand = document.querySelector(".minutes");
const hoursHand = document.querySelector(".hours");

function setTime(){

const time = new Date();
const sec = time.getSeconds();
const secondDegrees = ((sec/60)*360) + 90;
secondsHand.style.transform = `rotate(${secondDegrees}deg)`;

const min = time.getMinutes();
const minuteDegrees = ((min/60)*360) + 90;
minutesHand.style.transform = `rotate(${minuteDegrees}deg)`;

const hour = time.getHours();
const hourDegrees = ((hour/12)*360) + 90;
hoursHand.style.transform = `rotate(${hourDegrees}deg)`;
console.log(sec);
}
setInterval(setTime, 1000);
