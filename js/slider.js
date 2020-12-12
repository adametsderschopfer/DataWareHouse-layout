"use strict";

$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 5000,
  prevArrow: "<img class='a-left control-c prev slick-prev' src='img/slider-arrow-left.svg'>",
  nextArrow: "<img class='a-left control-c prev slick-next' src='img/slider-arrow-right.svg'>",
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  } // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  ]
});