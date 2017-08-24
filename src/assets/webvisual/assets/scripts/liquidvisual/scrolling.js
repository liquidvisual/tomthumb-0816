/*
	SCROLLING.JS - Last updated: 30.09.16
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// Click Logo: Jump to Top
//-----------------------------------------------------------------

// $('.global-header .logo').click(function(e){
// 	e.preventDefault();
// 	$('html, body').stop().animate({ scrollTop: 0 }, 500);
// });

//-----------------------------------------------------------------
// Scrolling Logic
//-----------------------------------------------------------------

// $(window).scroll(function() {
// 	var scrollTop = $(this).scrollTop();
// 	var scrollHeight = $('.global-header').position().top + $('.global-header').outerHeight(true);

// 	if (scrollTop > scrollHeight) {
// 		$('body').addClass('scrolling-down');
// 	} else {
// 		$('body').removeClass('scrolling-down');
// 	}
// });

//-----------------------------------------------------------------
// Click to Scroll Animation
//-----------------------------------------------------------------

// menuItems.click(function(e){
// 	var href = $(this).attr("href"),
// 	offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;

// 	e.preventDefault();

// 	$('html, body').stop().animate({
// 		scrollTop: offsetTop
// 		}, 300);
// });

//==================================================
//
//==================================================