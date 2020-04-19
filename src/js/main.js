"use strict";

// service worker registration - remove if you're not going to use it

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker.register("serviceworker.js").then(
            function (registration) {
                // Registration was successful
                console.log(
                    "ServiceWorker registration successful with scope: ",
                    registration.scope
                );
            },
            function (err) {
                // registration failed :(
                console.log("ServiceWorker registration failed: ", err);
            }
        );
    });
}

// place your code below

const buttonPlus = document.querySelector(".button_plus-js");
const buttonMinus = document.querySelector(".button_minus-js");
const counter = document.querySelector(".licznik-js");

buttonPlus.addEventListener("click", () => {
    counter.va
    console.log(counter);
});
buttonMinus.addEventListener("click", () => {
    console.log("baran");
});
