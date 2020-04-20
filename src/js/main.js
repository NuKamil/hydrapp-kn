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


const key = new Date().toISOString().slice(0, 10);
const buttonPlus = document.querySelector(".button_plus-js");
const buttonMinus = document.querySelector(".button_minus-js");
var counter = document.querySelector(".licznik-js").innerHTML;

if(!localStorage.getItem(key)){
localStorage.setItem(key, 0)
counter.innerHTML = '0';

}else{
    counter.innerHTML = localStorage.getItem(key);
}



buttonPlus.addEventListener("click", () => {
  if (counter < 9) counter++;
  else counter = 9;
  document.querySelector(".licznik-js").innerHTML = counter;
  localStorage.setItem(key, counter);
});

buttonMinus.addEventListener("click", () => {
  if (counter != 0) counter--;
  else couner = 0;

  document.querySelector(".licznik-js").innerHTML = counter;
  localStorage.setItem(key, counter);
});
