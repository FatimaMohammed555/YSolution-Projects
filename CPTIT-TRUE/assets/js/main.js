


$(document).ready(function(){
  $(window).on('scroll load',function(){

      if($(window).scrollTop() > 100){
          $('#header').addClass('sticky-top'),
          // $('#top-header').addClass('hidden'),
          $('#header').css({'top':'0'})
      }else{
          $('#header').removeClass('sticky-top')
          // $('#header').css({'top':'12%'}),
          // $('#header').css({'top':'0%'}),
          // $('#top-header').removeClass('hidden'),
          // $('#top-header').css({'background':'transparent' , 'z-index':'999' , 'box-shadow':'0 0 20px rgb(0 0 0 / 20%)'})
      }
  
  });

});


  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  // let selectHeader = select('#header')
  // let selectTopbar = select('#topbar')
  // if (selectHeader) {
  //   const headerScrolled = () => {
  //     if (window.scrollY > 100) {
  //       selectHeader.classList.add('header-scrolled')
  //       if (selectTopbar) {
  //         selectTopbar.classList.add('topbar-scrolled')
  //       }
  //     } else {
  //       selectHeader.classList.remove('header-scrolled')
  //       if (selectTopbar) {
  //         selectTopbar.classList.remove('topbar-scrolled')
  //       }
  //     }
  //   }
  //   window.addEventListener('load', headerScrolled)
  //   onscroll(document, headerScrolled)
  // }






  /**
   * Hero carousel indicators
   */
  // let heroCarouselIndicators = select("#hero-carousel-indicators")
  // let heroCarouselItems = select('#heroCarousel .carousel-item', true)

  // heroCarouselItems.forEach((item, index) => {
  //   (index === 0) ?
  //   heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
  //     heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
  // });










