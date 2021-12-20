
$(document).ready(function(){
/*~~~~~~~~~~~~~~~~~~start header~~~~~~~~~~~~~~~~~ */
// ~~~~~~~~~~~~btn search
$(".search_m").click(function(){
  $(".input_div_parant").slideToggle("500");
  $(".toggle_.fa-search").toggleClass("fa-times")
  // $(".moboverlay").fadeToggle("500");
});
// $(".moboverlay").click(function(){
//   $(".search_m").trigger("click")
// })
// ~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~navbar
$(".bars_").click(function(){
  $("nav").toggle("500");
  $("body").addClass("over_");
});
$(".close_").click(function(){
  $("nav").toggle("500");
  $("body").removeClass("over_");
});
$(".li_hover").click(function(){
  $(this).children().next().slideToggle("500");
});
// ~~~~~~~~~~~~~~~~~~
/*~~~~~~~~~~~~~~~~~~end header~~~~~~~~~~~~~~~~~ */

/*~~~~~~~~~~~~~~~~~~start slider~~~~~~~~~~~~~~~ */

$('.slider .owl-carousel').owlCarousel({
  loop:true,
  nav:true,
  autoplay:true,
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  navText: ["<i class='fas fa-angle-right'></i>", "<i class='fas fa-angle-left'></i>"],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})
/*~~~~~~~~~~~~~~~~~~end slider~~~~~~~~~~~~~~~~~ */
/*~~~~~~~~~~~~~~~~~~start new~~~~~~~~~~~~~~~~~~ */
if ($(window).width() <= 767 ){
  $(".remove_").removeClass("row");
  $(".remove_").addClass("owl-carousel")
  $(".add_").removeClass("col-md-4");
  $('.new .owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    // autoplay:true,
    rtl: $("html").attr("dir") == "rtl" ? true : false,
    responsive:{
        0:{
            items:2,
            margin:15
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });

}

/*~~~~~~~~~~~~~~~~~~end new~~~~~~~~~~~~~~~~~~~~ */

/*~~~~~~~~~~~~~~~~~~start bestseller~~~~~~~~~~~~~~~~~~~~ */

$('.bestseller .owl-carousel').owlCarousel({
  loop:true,
  nav:true,
  autoplay:true,
  margin:30,
  navText: ["<i class='fas fa-angle-right'></i>", "<i class='fas fa-angle-left'></i>"],
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  responsive:{
      0:{
          items:2,
          margin:15
      },
      600:{
          items:2
      },
      1000:{
          items:4
      }
  }
});
/*~~~~~~~~~~~~~~~~~~end bestseller~~~~~~~~~~~~~~~~~~~~ */

/*~~~~~~~~~~~~~~~~~~start brands~~~~~~~~~~~~~~~~~~~~ */

$('.brands .owl-carousel').owlCarousel({
  loop:true,
  nav:false,
  autoplay:true,
  margin:30,
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  responsive:{
      0:{
          items:2,
          margin:15
      },
      600:{
          items:2
      },
      1000:{
          items:5
      }
  }
});
/*~~~~~~~~~~~~~~~~~~end brands~~~~~~~~~~~~~~~~~~~~ */

$(window).load(function() {
  $(".preloader-sa").fadeOut();
});

});