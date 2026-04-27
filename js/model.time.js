"use strict";

export function getTime() {
    const now = new Date();

    return {
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds()
    };

}