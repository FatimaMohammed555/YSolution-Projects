
(function ($) {
  "use strict";
  $(".counter").counterUp({ delay: 10, time: 1000 });
})



$(window).scroll(function () {
  $('header').toggleClass('scrolled', $(this).scrollTop() > 100)
})

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
  margin: 10,
  autoplay: true,
  dots: false,
    nav: true,
    rtl: true,
  navSpeed: 300,
  autoplayHoverPause: true, // Stops autoplay
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 6,
    },
  },
  });
});












