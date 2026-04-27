"use strict";

export function render(time) {
    const el = document.querySelector("#digital");

    const h = String(time.hours).padStart(2, "0");
    const m = String(time.minutes).padStart(2, "0");
    const s = String(time.seconds).padStart(2, "0");

    el.textContent = `${h}:${m}:${s}`;
}