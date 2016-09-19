/*
    ROUTES.JS - Last updated: 07.09.16
*/
//-----------------------------------------------------------------
/*
	/manage/#/developer/docs/installation-and-setup/
	/manage/#/content/settings/
	/manage/#/preview/...
*/
//-----------------------------------------------------------------

var PATH_DEFAULT = '#/overview/welcome/';
var PATH_WELCOME = '/assets/webvisual/views/overview/welcome.html';
var PATH_404 = '/assets/webvisual/views/overview/404.html';
var PATH_VIEWS = '/assets/webvisual/views/';
var iframePoller;

//-----------------------------------------------------------------
// LOAD ROUTE
//-----------------------------------------------------------------

function loadRoute() {

	var routeCallback = false;
	var path         = getHashBang(1).join('/'); // eg. /developer/docs/installation-and-setup/
	var level1       = getHashBang(1,2); // eg. /developer/
	var level2       = getHashBang(2,3); // eg. /developer/docs/
	var level3       = getHashBang(3,4); // eg. /developer/docs/installation-and-setup/
	//-----------------------------------------------------------------
	var $body        = $('body');
	var $mainView    = $('[data-view]');
	var $preview     = $('[data-preview]');
	//-----------------------------------------------------------------
	var hasAuthenticated          = $('.has-authenticated').length;
	var hasAuthenticatedCached    = $('.has-authenticated-cached').length;
	var isTabSwitching            = (hasAuthenticated && level1 !== "" && level2 == "");

	var isDeveloperTab          = (level1 == "developer");
	var isPreviewTab              = (isTabSwitching && level1 == "preview");
	var isPreviewURL              = (level1 == "preview" && level2 !== "");

	trace('Loading main view...');

	//-----------------------------------------------------------------
	// SETUP NAVIGATION (ATTEMPT)
	//-----------------------------------------------------------------

	setupNavigation();

	//-----------------------------------------------------------------
	// ENTERING VIA /manage/
	///-----------------------------------------------------------------

	if (level1 == "") {
		trace('Defaulting to welcome view...');
		window.location.replace(PATH_DEFAULT);
		return loadRoute(); // exit and retry with new hash
	}

	//-----------------------------------------------------------------
	// PREVIEW MODE
	//-----------------------------------------------------------------

	if (isPreviewURL) {
		var previewURL = '/'+getHashBang(2).join('/'); // Load new SRC into iframe

		trace("Preview Mode activated");

		// redirect home, because slash is hard to interpret
		if (getHashBang(2,3) == "home") previewURL = "/";
		if (hasAuthenticatedCached || !hasAuthenticated) playIntro(); // Coming in through cookie

		// If iframe exists, don't load the main again
		var $previewIframe = $('[data-preview]');
		if ($previewIframe.length) {
			$previewIframe.attr('src', previewURL); // not ideal
			return;
		}

		// Fill the callback to be executed by the final conditions below
		routeCallback = function(){
			$('[data-preview]').each(function(){
				$(this).attr('src', previewURL); // not ideal
			});
		}

		// resizeIframe($preview'); // start polling
	}

	//-----------------------------------------------------------------
	// Load URL when no tab switching is taking place UNLESS it's dev or prev
	//-----------------------------------------------------------------

	if ((isTabSwitching && !isPreviewTab) ) {
		playIntro();
		// clearInterval(iframePoller); // catch early

	} else {

		var path = level1 == "preview" ? (PATH_VIEWS + level1 + '/' + level1 + '.html') : (PATH_VIEWS + path.slice(0, -1) + '.html');
		console.log('Preparing path: '+path);
		loadModule($mainView, path, routeCallback);
	}
}

//-----------------------------------------------------------------
// LOAD MODULE
//-----------------------------------------------------------------

function loadModule(target, path, callback) {
    target.load(path, function(response, status, xhr) {
    	trace('STATUS: '+status);

    	// SUCCESS
    	if (status == 'success') {
    		trace('Main view loaded successfully. Rendering page...');
    		if (callback) callback();

    		// REFACTOR THIS INTO CALLBACK - MAKE IT WORK
    		// Set 'mode' on body. Eg. 'is-preview-mode'
    		$('body').attr('class', function(i, c){
    			return c.replace(/(^|\s)is-mode-\S+/g, '');
    		}).addClass('is-mode-'+window.location.hash.split('/').slice(1, 2));
    	}

    	// ERROR
		else if (status == "error") {
			trace('Failed to load. Attempting to load 404 page.');
			// $(this).load(PATH_404);
			$(this).load(PATH_WELCOME);
		}

		playIntro(); // keep this here
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

//-----------------------------------------------------------------
// UTILITY: RESIZE IFRAME
//-----------------------------------------------------------------

function resizeIframe($target) {

	previousHeight = 0;
	currentHeight = 0;

	iframePoller = setInterval(function(){
		// trace('iframe polling started');
		currentHeight = $target.contents().find('body').height();

		// trace('wowowowo: '+$target.attr('src'));

		if (currentHeight != previousHeight) {
			$target.css('height', (previousHeight = currentHeight) +'px');
		}
	}, 600);
}

//$('#sfx-click--soft')[0].play(); // SOUND
// mySound = new MediaElement('sfx-click--soft');
// mySound.play();