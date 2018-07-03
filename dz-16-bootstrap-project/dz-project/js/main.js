function setHeiHeight() {
  $('.welcome').css({
      minHeight: $(window).height() + 'px'
  });
}
setHeiHeight(); 
$(window).resize( setHeiHeight ); 


$(".arrow").click(function() {
  $('html, body').animate({
      scrollTop: $("#ScrollTo").offset().top
  }, 800);
});

$('.logos .owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})

$('.blog .owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})

$(window).scroll(function() {
    if ( ($(this).scrollTop()) >= 10) {
        $("header").addClass("white");
        $("header .btn").addClass("white-btn");
    } else {
        $("header.home-menu").removeClass("white"); 
        $("header.home-menu .btn").removeClass("white-btn");
    }
});

$('#navbarNav').on('shown.bs.collapse', function () {
    $("body").addClass("no-scroll");
    $(".navbar-toggler-icon").addClass("close-menu");
    $("header").removeClass("white");
});

$('#navbarNav').on('hide.bs.collapse', function () {
    $("body").removeClass("no-scroll");
    $(".navbar-toggler-icon").removeClass("close-menu");
    $("header").addClass("white");
});


$(".navbar-toggler-icon").click(function() {
    $(this).addClass("click-border");
})


var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });

  $('.filters-button-group').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    
    $grid.isotope({ filter: filterValue });
  });
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  