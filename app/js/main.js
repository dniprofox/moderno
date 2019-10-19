$(function(){
  

  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true    
  });
////slider
  $('.product-slider__inner').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    // responsive: [
    //   {
    //     breakpoint: 1900,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 1441,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     }
    //   },
    //   {
    //     breakpoint: 801,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     }
    //   },
    // ]
  });
  
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: "$"    
  });





  var mixer = mixitup('.products__inner-box');

});