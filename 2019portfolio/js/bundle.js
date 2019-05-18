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

// Slide Show 3
//----------//
var ws3Index = 1;
showWS3(ws3Index);

// Next/previous controls
function plusWS3(n) {
  showWS3(ws3Index += n);
}

// Thumbnail image controls
function currentWS3(n) {
  showWS3(ws3Index = n);
}

function showWS3(n) {
  var i;
  var s3 = document.getElementsByClassName("work-slide-3");
  var l3 = document.getElementsByClassName("slide-lines-3");
  if (n > s3.length) {ws3Index = 1} 
  if (n < 1) {ws3Index = s3.length}
  for (i = 0; i < s3.length; i++) {
      s3[i].style.display = "none"; 
  }
  for (i = 0; i < l3.length; i++) {
      l3[i].className = l3[i].className.replace(" active", "");
  }
  s3[ws3Index-1].style.display = "block"; 
  l3[ws3Index-1].className += " active";
}

// Slide Show 4
//----------//
var ws4Index = 1;
showWS4(ws4Index);

// Next/previous controls
function plusWS4(n) {
  showWS4(ws4Index += n);
}

// Thumbnail image controls
function currentWS4(n) {
  showWS4(ws4Index = n);
}

function showWS4(n) {
  var i;
  var s4 = document.getElementsByClassName("work-slide-4");
  var l4 = document.getElementsByClassName("slide-lines-4");
  if (n > s4.length) {ws4Index = 1} 
  if (n < 1) {ws4Index = s4.length}
  for (i = 0; i < s4.length; i++) {
      s4[i].style.display = "none"; 
  }
  for (i = 0; i < l4.length; i++) {
      l4[i].className = l4[i].className.replace(" active", "");
  }
  s4[ws4Index-1].style.display = "block"; 
  l4[ws4Index-1].className += " active";
}

// Slide Show 5
//----------//
var ws5Index = 1;
showWS5(ws3Index);

// Next/previous controls
function plusWS5(n) {
  showWS5(ws5Index += n);
}

// Thumbnail image controls
function currentWS5(n) {
  showWS5(ws5Index = n);
}

function showWS5(n) {
  var i;
  var s5 = document.getElementsByClassName("work-slide-5");
  var l5 = document.getElementsByClassName("slide-lines-5");
  if (n > s5.length) {ws5Index = 1} 
  if (n < 1) {ws5Index = s5.length}
  for (i = 0; i < s5.length; i++) {
      s5[i].style.display = "none"; 
  }
  for (i = 0; i < l5.length; i++) {
      l5[i].className = l5[i].className.replace(" active", "");
  }
  s5[ws5Index-1].style.display = "block"; 
  l5[ws5Index-1].className += " active";
}

// Slide Show 6
//----------//
var ws6Index = 1;
showWS6(ws6Index);

// Next/previous controls
function plusWS6(n) {
  showWS6(ws6Index += n);
}

// Thumbnail image controls
function currentWS6(n) {
  showWS6(ws6Index = n);
}

function showWS6(n) {
  var i;
  var s6 = document.getElementsByClassName("work-slide-6");
  var l6 = document.getElementsByClassName("slide-lines-6");
  if (n > s6.length) {ws6Index = 1} 
  if (n < 1) {ws6Index = s6.length}
  for (i = 0; i < s6.length; i++) {
      s6[i].style.display = "none"; 
  }
  for (i = 0; i < l6.length; i++) {
      l6[i].className = l6[i].className.replace(" active", "");
  }
  s6[ws6Index-1].style.display = "block"; 
  l6[ws6Index-1].className += " active";
}

// Slide Show 7
//----------//
var ws7Index = 1;
showWS7(ws7Index);

// Next/previous controls
function plusWS7(n) {
  showWS7(ws7Index += n);
}

// Thumbnail image controls
function currentWS7(n) {
  showWS7(ws7Index = n);
}

function showWS7(n) {
  var i;
  var s7 = document.getElementsByClassName("work-slide-7");
  var l7 = document.getElementsByClassName("slide-lines-7");
  if (n > s7.length) {ws7Index = 1} 
  if (n < 1) {ws7Index = s7.length}
  for (i = 0; i < s7.length; i++) {
      s7[i].style.display = "none"; 
  }
  for (i = 0; i < l7.length; i++) {
      l7[i].className = l7[i].className.replace(" active", "");
  }
  s7[ws7Index-1].style.display = "block"; 
  l7[ws7Index-1].className += " active";
}
