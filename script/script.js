$(function(){
  $("a").click(function(){
    var id=$(this).attr('href');
    var position=$(id).offset().top;
    $('html,body').animate({
      'scrollTop':position
    },500);
  });
  $('#a').click(function(){
    $('#b').fadeIn();
  });
});
