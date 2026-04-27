"use strict";

export function render(time) {
    const hourHand = document.querySelector("#hour");
    const minuteHand = document.querySelector("#minute");
    const secondHand = document.querySelector("#second");

    const h = time.hours % 12;
    const m = time.minutes;
    const s = time.seconds;

    const hourDeg = (h * 30) + (m * 0.5);
    const minuteDeg = m * 6;
    const secondDeg = s * 6;

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
}