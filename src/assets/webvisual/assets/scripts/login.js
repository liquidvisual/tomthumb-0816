/*
    LOGIN SCRIPTS - Last updated: 15.07.16
*/
//-----------------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------------

// localStorage.setItem("loggedIn", ""); // REMOVE THIS
var loggedIn = localStorage.getItem("loggedIn");

//-----------------------------------------------------------------
// AUTHENTICATE
//-----------------------------------------------------------------

function authenticate() {
	trace('Authenticating...');

	$('body').removeClass('is-loading');

	if (loggedIn) {
		trace('Authentication passed - bypassing login.');
		$('body').addClass('has-authenticated-cached'); // one off
		loadRoute();
	} else {
		trace('No login cookie detected. Initialise login buttons...');
	}
}

//-----------------------------------------------------------------
// INITALISE LOGIN BUTTONS
//-----------------------------------------------------------------

function initLoginButtons() {
	trace('Login buttons initialising...');

	$('[data-login]').click(function(event){
		trace('Login Pressed');
		event.preventDefault();
		setLogin(true);
		loadRoute();  // <<<<<<<<<======================
	});

	$('[data-logout]').click(function(event){
		trace('Logout Pressed');
	    setLogin(false);
	    // will redirect to /manage/
	});
}

//-----------------------------------------------------------------
// PLAY INTRO ONCE
//-----------------------------------------------------------------

function playIntro() {
	if (!$('.has-authenticated').length) {
		$('body').addClass('has-authenticated');

		// Add cache class to prevent login from appearing after animation
		var cacheDelay = setTimeout(function(){ $('body').addClass('has-authenticated-cached has-animated'); }, 2000);

		// setTimeout(function(){
		// 	$('#sfx-login')[0].play(); // SOUND
		// }, 900);
	}
}

//-----------------------------------------------------------------
// GET LOGIN
//-----------------------------------------------------------------

function getLogin() {
    return localStorage.getItem("loggedIn");
}

//-----------------------------------------------------------------
// SET LOGIN
//-----------------------------------------------------------------

function setLogin(value) {
	if (value == false) value = ""; // localStorage needs blank string

	if (typeof(Storage) != "undefined") {
		localStorage.setItem("loggedIn", value);
		trace('Setting loggedIn to: '+value);
	} else {
		trace('Oops! Local Storage not supported.');
	}
}

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------