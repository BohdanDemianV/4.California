$(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll:1,
    arrows: false,
    dots: false,
  });
});

/*--------------------burger JS----------------*/
$(document).ready(function(){
  $('.title').click(function(event) {
    if ($('.title_list').hasClass('one')){
       $('.title').not($(this)).removeClass('аctive');
       $('.text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('аctive').next().slideToggle(300);

    $('.slider').slick('slickGoTo', ($(this).data('heading')), true);
  });
});



