


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
});

var swiper = new Swiper(".mySwiperTwo", {
  autoplay: {
    delay: 3000,
    // reverseDirection: true,
  },
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  // slidesPerGroup: 2,
  speed: 1000,
  // loop: true,
  // loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1400: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
});

jQuery(document).ready(function($) {
  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  $('#customers-testimonials').owlCarousel({
      loop: true,
      center: true,
      // items: 3,
      margin: 2,
      autoplay: true,
      dots:true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2,
          center: true,
          // margin:5
        },
        992: {
          items: 2,
          center: true,
          // margin:5
        },
        1024: {
          items: 2,
          center: true,
          // margin:5
        },
        1200: {
          items: 3
        },
        1440: {
          items: 3
        }
      }
  });

// related
  $(".owl-carousel").owlCarousel(
    {
    loop: true,
  margin: 10,
  autoplay: true,
  // dots: true,
    nav: false,
    // rtl: true,
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
      items: 5,
    },
  },
  }
  );

});



