"use strict";
var animationLogo = document.querySelector('.animation-logo h1');
animationLogo.classList.add('active');
setInterval(function () {
    animationLogo.classList.remove('active');
    setTimeout(function () {
        animationLogo.classList.add('active');
    }, 100);
}, 3000);