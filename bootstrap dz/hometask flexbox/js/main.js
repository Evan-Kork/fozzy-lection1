
$(document).ready(function(){
    $('.carousel').slick({
      dots: true,
      autoplaySpeed: 3000,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        ]
      
  })

  
  $('.menu-nav li ul').hide ();
  $('li li:has(li)').find('a:first').addClass ('arrow');
  $('li').hover (
    function () {
    $(this).addClass('active');
    $('ul:first', this).fadeIn (); 
    },
    function () {
    $(this).removeClass('active');
    $('ul:first', this).fadeOut (); 
    }
    );
});


$(".mob-menu").click(function() {
  $(".menu-bar ul").addClass("show");
  $(".close-menu").addClass("show");
});

$(".close-menu").click(function() {
  $(".menu-bar ul").removeClass("show");    
  $(".close-menu").removeClass("show");
});