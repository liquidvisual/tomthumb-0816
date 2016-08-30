/*
    NOTES - Last updated: 30.08.16
*/
//-----------------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

function getPageNotes(){
	var pageNotes = JSON.parse(localStorage.getItem("pageNotes"));
	var pageNotesList = '';
	var $noteCountIcon = $('[data-note-count]');

	if (Boolean(pageNotes)) {
		pageNotesList += '<ul data-page-notes>';

		for (note in pageNotes) {
		    var noteTitle = pageNotes[note].title;
		    var noteDate = pageNotes[note].date;
		    var noteBody = pageNotes[note].body;

	    	pageNotesList += '<li>';
	    		if (noteTitle) pageNotesList += '<b>'+noteTitle+'</b>';
	    		pageNotesList += '<p>';
	    			pageNotesList += noteBody;
	    		pageNotesList += '</p>';
	    		if (noteDate) pageNotesList += '<small class="lv-notes-panel-date"><date><b>Updated</b> ';
	    			pageNotesList += noteDate;
	    		pageNotesList += '</date></small>';
	   		pageNotesList += '</li>';
		}

		pageNotesList += '</ul>';

		// Set note count
		$noteCountIcon.removeAttr('hidden').text(pageNotes.length);

	} else {

		// Hide note count
		$noteCountIcon.attr('hidden', true).text('');
		pageNotesList += '<p class="text-xs-center p-y-2" data-page-notes>There are no notes.</p>';
	}

	// Populate notes list
	$('[data-page-notes]').replaceWith($(pageNotesList));
}

var pollPageNotes = setInterval(function(){
	getPageNotes();
}, 600);

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------


