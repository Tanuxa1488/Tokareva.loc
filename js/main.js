var height = $(".services_circle").outerWidth();

$(window).load(function() {
  if($(window).width() > 992) {
    $(".services_circle").css({height: height});
  }
  var lColSlider = height/3;
  if($(window).width() > 768) {
    $(".l-col_slider li, .r-col_slider li").height(lColSlider);
  }
  $('.ind .l-col_slider, .ind .r-col_slider').slick({
    vertical: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
         vertical: false
       }
      },{
        breakpoint: 481,
        settings: {
         slidesToShow: 2,
         slidesToScroll: 2,
         vertical: false
       }
      },{
        breakpoint: 321,
        settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         vertical: false
       }
      }]
    });
    $('.perf-row .l-col_slider, .perf-row .r-col_slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 769,
          settings: {
           vertical: false
         }
        },{
          breakpoint: 481,
          settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
           vertical: false
         }
        },{
          breakpoint: 321,
          settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           vertical: false
         }
        }]
      });
  $('.events-slider').slick({
    slidesToShow: 4,
    arrows: true,
    centerMode: true,
    centerPadding: '100px',
    responsive: [
      {
        breakpoint: 1281,
        settings: {
         slidesToShow: 3,
         slidesToScroll: 3
       }
      },{
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 769,
        settings: {
          centerPadding: '60px',
          slidesToShow: 2
        }
      },{
        breakpoint: 481,
        settings: {
          centerPadding: '60px',
         slidesToShow: 1,
         slidesToScroll: 1
       }
      }
      ]
    });
    $(".burger-menu").click(function(){
      $(this).toggleClass("active");
      $(".top-nav").toggleClass("active");
    })
});

$(window).resize(function(){
  height = $(".services_circle").outerWidth();
  if($(window).width() > 992) {
    $(".services_circle").css({height: height});
  }
});

$(document).ready(function () {
  $(".epi_btn").click(function (e) {
    e.preventDefault();
    $(this).parents(".epi-container").find(".epi_description").addClass("active");
  });
});
