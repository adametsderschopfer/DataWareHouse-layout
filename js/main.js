"use strict";

var burger = document.querySelector('.navbar-burger');
var navbarInner = document.querySelector('.navbar-nav');

var closemodal = function closemodal() {
  navbarInner.classList.toggle('navbar-nav--open');
  burger.classList.toggle('navbar-burger--open');
  document.body.classList.toggle('overflow-hidden');
};

burger.addEventListener('click', function () {
  navbarInner.classList.toggle('navbar-nav--open');
  burger.classList.toggle('navbar-burger--open');
  document.body.classList.toggle('overflow-hidden');
});