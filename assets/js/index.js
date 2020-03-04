

const slider = $(".slider-banner");
slider
  .slick({
    dots: true,
    infinite: false,
    fade: true,
    cssEase: "linear",
  });

slider.on('wheel', (function(e) {
  e.preventDefault();

  if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickPrev');
  } else {
 
     $(this).slick('slickNext');
  }
}));



const sliderPortafolio = $(".slider-portafolio");
sliderPortafolio
  .slick({
    arrows:false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode:false,
    variableWidth:true,
    dots:true,
  });

sliderPortafolio.on('wheel', (function(e) {
  e.preventDefault();

  if (e.originalEvent.deltaY < 0) {
      
       $(this).slick('slickPrev');
  } else {
        $(this).slick('slickNext');
  }
}));

$('.slider-banner').on('beforeChange', function(event, slick, direction){

  // banner camaleo
  $('.pieza-banner ').removeClass("active ")

});

$('.slider-banner').on('afterChange', function(event, slick, direction){

  // banner camaleo

  setTimeout(() => {
    $('.pieza-banner ').addClass("active ")
  }, 500)


});

setTimeout(() => {
  $('.pieza-banner ').addClass("active ")
}, 500)


$(function(){
	$('[role=dialog]')
	    .on('show.bs.modal', function(e) {
		    $(this)
		        .find('[role=document]')
		            .removeClass()
		            .addClass('modal-dialog ' + $(e.relatedTarget).data('ui-class'))
	})
})






// slick servicions
$('.slider-services').slick({
  infinite: true,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  fade: true,
  cssEase: "linear",
  arrows: true,
  responsive: [{
      breakpoint: 1200,
      settings: {
      
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 900,
      settings: {

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: false,
        arrows: false,
        autoplaySpeed: 1000
      }
    }
  ]
});
