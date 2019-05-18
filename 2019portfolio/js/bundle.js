// Toggle List Menu
//----------//
window.onload = function() {
  
  $(".headline").click(function () {
    $(this).next('div.work-item').toggle('slide');
    $(this).find('.span').toggleClass('spin');
  });
  
}

// Logo Opacity on Scroll
//----------//
$(document).ready(function(){
  
  $(window).scroll(function(){ 
    $('.logo').css("opacity", 0+ $(window).scrollTop() / 900)
  })
  
}); 

// Slide Show 1
//----------//
var ws1Index = 1;
showWS1(ws1Index);

// Next/previous controls
function plusWS1(n) {
  showWS1(ws1Index += n);
}

// Thumbnail image controls
function currentWS1(n) {
  showWS1(ws1Index = n);
}

function showWS1(n) {
  var i;
  var s1 = document.getElementsByClassName("work-slide-1");
  var l1 = document.getElementsByClassName("slide-lines-1");
  if (n > s1.length) {ws1Index = 1} 
  if (n < 1) {ws1Index = s1.length}
  for (i = 0; i < s1.length; i++) {
      s1[i].style.display = "none"; 
  }
  for (i = 0; i < l1.length; i++) {
      l1[i].className = l1[i].className.replace(" active", "");
  }
  s1[ws1Index-1].style.display = "block"; 
  l1[ws1Index-1].className += " active";
}

// Slide Show 2
//----------//
var ws2Index = 1;
showWS2(ws2Index);

// Next/previous controls
function plusWS2(n) {
  showWS2(ws2Index += n);
}

// Thumbnail image controls
function currentWS2(n) {
  showWS2(ws2Index = n);
}

function showWS2(n) {
  var i;
  var s2 = document.getElementsByClassName("work-slide-2");
  var l2 = document.getElementsByClassName("slide-lines-2");
  if (n > s2.length) {ws2Index = 1} 
  if (n < 1) {ws2Index = s2.length}
  for (i = 0; i < s2.length; i++) {
      s2[i].style.display = "none"; 
  }
  for (i = 0; i < l2.length; i++) {
      l2[i].className = l2[i].className.replace(" active", "");
  }
  s2[ws2Index-1].style.display = "block"; 
  l2[ws2Index-1].className += " active";
}
