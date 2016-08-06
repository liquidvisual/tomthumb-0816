/*
    ROUTES.JS - Last updated: 21.07.16
*/
//-----------------------------------------------------------------
/*
	/manage/#/development/docs/installation-and-setup/
	/manage/#/content/settings/
	/manage/#/preview/...
*/
//-----------------------------------------------------------------

function loadRoute() {

	console.log('Loading main view...');

	//-----------------------------------------------------------------
	// VARIABLES
	//-----------------------------------------------------------------

	var path;
	var level1 = getHashBang(1,2); // eg. /development/
	var level2 = getHashBang(2,3); // eg. /development/docs/
	var level3 = getHashBang(3,4); // eg. /development/docs/installation-and-setup/
	var $mainView = $('[data-view]');
	var $preview = $('[data-preview]');
	var hasAuthenticated = $('.has-authenticated, .has-authenticated-cached').length;

	//-----------------------------------------------------------------
	// SETUP NAVIGATION (ATTEMPT)
	//-----------------------------------------------------------------

	setupNavigation();

	//-----------------------------------------------------------------
	// Entering via /manage/
	///-----------------------------------------------------------------

	if (level1 == "") {
		console.log('Defaulting to welcome view...');
		window.location.replace('#/overview/welcome/');
		return loadRoute(); // exit and retry with new hash
	}

	//-----------------------------------------------------------------
	// IF PREVIEW EXISTS
	//-----------------------------------------------------------------

	if (hasAuthenticated && level1 == "preview") {
		console.log("PREVIEW YES");
		// Load new SRC into iframe
		var previewURL = '/'+getHashBang(2).join('/');
		$preview.attr('src', previewURL).removeAttr('hidden');
		showLoading();
		return;
	}

	//-----------------------------------------------------------------
	// Tab Switching
	//-----------------------------------------------------------------

	if (hasAuthenticated && level1 && !level2) {
		console.log('Switching Tabs');
		return;
	}

	//-----------------------------------------------------------------
	//
	//-----------------------------------------------------------------

	path = '/builder-app/views/'+level1+'/'+level2+'.html';
	console.log('Preparing path: '+path);

	$preview.attr('hidden', ''); // hide preview iframe - not needed

	//-----------------------------------------------------------------
	// LOAD MODULE
	//-----------------------------------------------------------------

    $mainView.load(path, function(response, status, xhr) {
    	console.log('STATUS: '+status)

    	//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    	// SUCCESS
    	//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    	if (status == 'success') {
    		console.log('Main view loaded successfully. Rendering page...');
    		playIntro();
    	}
    	//=========================================
    	// 404
    	//=========================================

		else if (status == "error") {
			console.log('Failed to load. Attempting to load 404 page.');
			$(this).load('/builder-app/views/overview/404.html');
			playIntro();
		}
	});
}

//-----------------------------------------------------------------
// UTILITY: Get Hashbang
//-----------------------------------------------------------------

function getHashBang(start, end) {
	var hashBang_arr = window.location.hash.split('/');
	return hashBang_arr.slice(start, end);
}

//-----------------------------------------------------------------
// UTILITY: SHOW LOADING
//-----------------------------------------------------------------

function showLoading() {
	$('body').addClass('is-loading');

	$('[data-preview]').ready(function() {
		$('body').removeClass('is-loading');
	});
}
