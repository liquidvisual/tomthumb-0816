/*
    PREVIEW - Last updated: 22.08.16
*/
//-----------------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

function initPreviewMode() {

	// var $submenuTrigger = $('<span class="submenu-trigger" data-submenu-trigger><i class="fa fa-angle-right"></i></span>');
	var $submenuTrigger = $('[data-submenu-trigger]');

	$('[data-menu-toggle]').click(function(){
	    $('html').toggleClass('has-open-menu');
	});

	$submenuTrigger.click(function(event){
	    event.preventDefault();
	    event.stopPropagation();
	    $(this).parent().next('.dropdown').addClass('is-open');
	});

	// INIT
	// $('.lv-dynamic-menu .has-dropdown > a').append($submenuTrigger);

	// BACK
	$('.lv-dynamic-menu .dropdown').click(function(event){
	    $(this).removeClass('is-open');
	    event.stopPropagation();
	});

	$('.lv-dynamic-menu a').click(function(event){
	    event.stopPropagation();
	});
}

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------


