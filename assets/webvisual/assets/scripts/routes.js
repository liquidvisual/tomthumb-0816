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
	var hasAuthenticated = $('.has-authenticated').length;
	var hasAuthenticatedCached = $('.has-authenticated-cached').length;

	//-----------------------------------------------------------------
	// SETUP NAVIGATION (ATTEMPT)
	//-----------------------------------------------------------------

	setupNavigation();

	//-----------------------------------------------------------------
	// 01. ENTERING VIA /manage/
	///-----------------------------------------------------------------

	if (level1 == "") {
		console.log('Defaulting to welcome view...');
		window.location.replace('#/overview/welcome/');
		return loadRoute(); // exit and retry with new hash
	}

	//-----------------------------------------------------------------
	// 02. TAB SWITCHING
	//-----------------------------------------------------------------

	if (hasAuthenticated && level1 !== "" && level2 == "") {
		console.log('Switching Tabs ('+'level_1: '+level1+' level_2: '+level2+')');
		return;
	}

	//-----------------------------------------------------------------
	// 03. DEVELOPMENT
	//-----------------------------------------------------------------

	if (hasAuthenticated && level1 == "development") {
		console.log("Development reached. Do nothing.");
		return;
	}

	//-----------------------------------------------------------------
	// 04. PREVIEW MODE
	//-----------------------------------------------------------------

	if (level1 == "preview" && level2 !== "") {
		console.log("Preview Mode activated");
		// Load new SRC into iframe
		var previewURL = '/'+getHashBang(2).join('/');

		console.log('what is hashbang 2?: '+getHashBang(2));

		if (getHashBang(2,3) == "home") previewURL = "/"; // redirect home, because slash is hard to interpret


		$preview.attr('src', previewURL).removeAttr('hidden');
		$mainView.attr('hidden', 'true');

		if (hasAuthenticatedCached || !hasAuthenticated) playIntro();

		//----
		lastHeight = 0;
		curHeight = 0;
		$frame = $preview;
		setInterval(function(){
			curHeight = $frame.contents().find('body').height();
			if ( curHeight != lastHeight ) {
				$frame.css('height', (lastHeight = curHeight) + 'px' );
			}
		}, 300);
		//----

		showLoading();

		return;
	}

	//-----------------------------------------------------------------
	// 05. Load Mode - ie. Anything other than 'Preview'
	//-----------------------------------------------------------------

	path = '/assets/webvisual/views/'+level1+'/'+level2+'.html';
	// path = '/assets/webvisual/views/'+getHashBang(1).join('/') +'.html';
	console.log('Preparing path: '+path);

	$preview.attr('hidden', ''); // hide preview iframe - not needed
	$mainView.removeAttr('hidden');

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
			$(this).load('/assets/webvisual/views/overview/404.html');
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
	$('body').removeClass('has-loaded').addClass('is-loading');

	$('[data-preview]').load(function() {
		$('body').removeClass('is-loading').addClass('has-loaded');
		// add timeout here - not load but onReady
	});
}









