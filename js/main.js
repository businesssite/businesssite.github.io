/**************************/
$(document).ready(function () {
  $('#touch').click(function(e){
      e.preventDefault();
      $(this).toggleClass('active');
      $('.nav-wrapper').toggleClass('active');
  });
    $('nav ul li').click(function(){
      $('.nav-wrapper').removeClass('active');
    });
});

/************//**************/

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
});  
/************//**************/
$(document).ready(function(){
	$(".forma input").focusin(function() {
		$(this).css({border:'2px solid #1287bf'});
	});
	$(".forma input").focusout(function() {
		$(this).css({border:'2px solid #d8d8d8'});
	});
});
/************//**************/
  $(document).ready(function(){
    $("nav ul li").on("click","a", function (event) {
              event.preventDefault();
     var id  = $(this).attr('href'),
     top = $(id).offset().top;         
    $('body,html').animate({scrollTop: top}, 1000);
    });
    })
/************//**************/  
jQuery(document).ready(function(){
    $objWindow = $(window);
  $('div[data-type="background"]').each(function(){
  var $bgObj = $(this);
    $(window).scroll(function() {
      var yPos = -($objWindow.scrollTop() / $bgObj.data('speed'));
      var coords = '100% '+ yPos + 'px';
      $bgObj.css({ backgroundPosition: coords });
    });
  });
});
/************//**************/  
$(document).ready(function(){
     $('.top').click(function(){
     $('html,body').animate({scrollTop:0},2000);
   });
});
