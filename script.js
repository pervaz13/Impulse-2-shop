$(document).ready(function(){
  $('.card-slider').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      arrows: true,
      dots: true,
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 2
              }
          },
          {
              breakpoint: 480,
              settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
              }
          }
      ]
  });
});
