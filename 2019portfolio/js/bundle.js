// Toggle List Menu
window.onload = function() {
  
  $(".toggle").click(function () {
    $(this).find('div').slideToggle();   
    $(this).find('span').toggleClass('hide');
  });
  
}

// Scroll Logo Opacity
$(document).ready(function(){
  
  $(window).scroll(function(){ 
    $('.logo').css("opacity", 0+ $(window).scrollTop() / 900)
  })
  
}); 
