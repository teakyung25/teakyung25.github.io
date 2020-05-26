$(function(){
  $('#arrow').click(function(){
    var newPos = $(window).height();
    console.log(newPos)
    $('html, body').animate({scrollTop: newPos}, 1300);
  })
})
