$(function(){

  var $itemheader = $('.plan__itemheader');
  var $itembody = $('.plan__itembody');


  $itembody.hover(function () {
    $(this).prev().addClass('plan__itemheader--animated');
  }, function() {
    $(this).prev().removeClass('plan__itemheader--animated');
  })


  var $sponsoring = $('.sponsoring');
  $sponsoring.hover(function () {
    $(this).find('.sponsoring__img').addClass('sponsoring__img--animated');
  }, function() {
    $(this).find('.sponsoring__img').removeClass('sponsoring__img--animated');
  });

  var $exsamplesImg = $('.examples__img');
  $exsamplesImg.hover(function () {
    $(this).addClass('examples__img--animated');
  }, function() {
    $(this).removeClass('examples__img--animated');
  });


});
