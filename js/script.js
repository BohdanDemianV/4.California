$(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll:1,
    arrows: false,
    dots: false,
    
  });

  // $('.slider').slick({
  //   infinite: true,
  //   slidesToShow: 2,
  //   slidesToScroll: 2,
  //   responsive:[
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });
});

/*--------------------burger JS----------------*/
$(document).ready(function(){
  $('.title').click(function(event) {
    if ($('.title_list').hasClass('one')){
       $('.title').not($(this)).removeClass('аctive');
       $('.text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('аctive').next().slideToggle(300)
  });
});



