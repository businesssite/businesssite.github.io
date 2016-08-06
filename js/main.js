/***********Touch***************/
$(document).ready(function () {
  $('#touch').click(function(e){
      e.preventDefault();
      $(this).toggleClass('active');
      $('.nav-wrapper').toggleClass('active');
  });
});
/************//**************/

/************Animate*********/
$(document).ready(function(){
$('.item').addClass("hidden-box").viewportChecker({
	classToAdd: 'visible-box animated zoomIn'
	});
$('.one').addClass("hidden-box").viewportChecker({
	classToAdd: 'visible-box animated fadeInLeft'
	});
$('.two').addClass("hidden-box").viewportChecker({
	classToAdd: 'visible-box animated fadeInRight'
	});
$('.three').addClass("hidden-box").viewportChecker({
	classToAdd: 'visible-box animated fadeInUp'
	});
$('.four').addClass("hidden-box").viewportChecker({
	classToAdd: 'visible-box animated bounceIn'
	});
$('.forma, #triangle-up').addClass("hidden-box").viewportChecker({
	classToAdd: 'visible-box animated flipInX'
	});
});  //end document animate
/************//**************/

/*******.Register forma*********/
$(document).ready(function(){
	$(".forma input").focusin(function() {
		$(this).css({border:'2px solid #1287bf'});
	});
	$(".forma input").focusout(function() {
		$(this).css({border:'2px solid #d8d8d8'});
	});
});
/************//**************/
