
$(document).ready(function(){

  $('.header__burger').on('click', function() {
    $('.header__burger,.header__list').toggleClass('active');
    $('body').toggleClass('lock')
  });
 
  $('.slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll:1,
      arrows: false,
      dots: false,
      infinite: false,
      responsive:[
      {
        breakpoint: 768,
        settings: {
          dots: true,
          centrMode: true,
          adaptiveHeight: true
        }
      }
    ]
    });

  $('.bringing__title-tab').click(function(e) {

    $(this).toggleClass('аctive');
    $('.bringing__title-tab').not($(this)).removeClass('аctive'); 
    let index = $(this).index();
    console.log(index);
    $('.slider').slick('slickGoTo', ($(this).index()), true)
  });


  $('.bringing__slider-wrapper').on('click', function() {
    let indexSlide = $(this).index();
    console.log(indexSlide);
  });


  $('.future__text-title').on('click', function() {
    let index = $(this).parent().index();
    console.log(index);
    $(this).toggleClass('аctive').next().slideToggle(300);
    $('.future__text-title').not($(this)).removeClass('аctive');
    $('.future__text-description').not($(this).next()).slideUp(300);
    $('.future__slider-img').hide().eq(index).fadeIn();
    
    // if ('.future__text-title').not($(this)).has('аctive'){
    //  $('.future__slider-img') .eq(index).hide();
   // }   
  });


  if(window.matchMedia('(max-width: 768px)').matches){
    $('.text-wrapper-first').append($('.img-first').remove());
    $('.text-wrapper-second').append($('.img-second').remove());
    $('.text-wrapper-third').append($('.img-third').remove());

    $('.list-wrapper-first').append($('.future__slider-img-first').remove());
    $('.list-wrapper-second').append($('.future__slider-img-second').remove());
    $('.list-wrapper-third').append($('.future__slider-img-third').remove());
    
    $('.header__wrapper-navigation').append($('.header__list').remove());
  }
 
 });
