const Green = document.querySelector('#trafficLightGreen');
const Yellow = document.querySelector('#trafficLightYellow');
const Red = document.querySelector('#trafficLightRed');

const a = document.querySelector('footer');

function makeGreen() {
    Red.style.background = ('black');
    Green.style.background = ('green');
    a.removeEventListener('click', makeGreen);
    a.addEventListener('click', makeYellow);
}

function makeYellow() {
    Green.style.background = ('black');
    Yellow.style.background = ('yellow');
    a.removeEventListener('click', makeYellow);
    a.addEventListener('click', makeRed);
}

function makeRed() {
    Yellow.style.background = ('black');
    Red.style.background = ('red');
    a.removeEventListener('click', makeRed);
    a.addEventListener('click', makeGreen);
}

a.addEventListener('click', makeGreen, makeYellow, makeRed);