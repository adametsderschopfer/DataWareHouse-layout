"use strict";

var callPopupBtn = document.querySelector('.feedback-button');
var closePopupBtn = document.querySelector('.feedback-popup__close');
var popUp = document.querySelector('.feedback-popup');
var overlay = document.querySelector('#overlay');
callPopupBtn.addEventListener('click', function () {
  overlay.classList.toggle('hidden');
  popUp.classList.toggle('hidden');
});
closePopupBtn.addEventListener('click', function () {
  overlay.classList.add('hidden');
  popUp.classList.add('hidden');
});