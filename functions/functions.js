$(document).ready(function(){ 
  $(window).scroll(function(){ 
    $('.logo').css("opacity", 0+ $(window).scrollTop() / 700) 
  }) 
})
