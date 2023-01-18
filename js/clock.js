const clock = document.querySelector("span.clock");
const clHeight = parseInt(clock.offsetHeight);

function getClock() {
    const date = new Date();
    //padStart, padEnd : padding을 붙여주는 마법같은 함수
    let hours = String(date.getHours()).padStart(2, "0");
    let minutes = String(date.getMinutes()).padStart(2, "0");
    let seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(getClock, 1000);
clock.style.fontSize = `${clHeight}px`;
console.log(clock);
