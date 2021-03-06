/* Written by: Clayotn Smith
   File: Single page web app
   
*/

(function(){
  
  // Bind an event to window.onhashchange that, when the hash changes, gets the
  // hash and adds the class "selected" to any matching nav link.
  function loadContent( fileName ){
    $.get( "content/" + fileName + '.html')
        .success(function(data) {
		    $('#anchor').html(data);
	    }).error(function() {
		    $('#anchor').html('<h1 class=centeredContent> page ' + fileName + ' missing </h1>');
	    });
    };
    
    // A function that handles the hashchange event
    function nav() {
	
    	// get the hash
	    var hash = location.hash.substr(1);
	
    	// Log the new hash.
    	console.log( 'The hash is ' + ( hash.replace( /^#/, '' ) || 'blank' ) + '.') ;
	
    	// Iterate over all nav links, setting the "selected" class as-appropriate.
    	$('a').removeClass('active');
	
	    // Add the active class to the current link.
	    $('a[href="#' + hash + '"]').addClass('active');

    	// Insert the content from respective html file.
    	loadContent(hash);
    };

    // If there is no hash is the url then the page will default to home
    if (!location.hash){
        location.hash = '#Home'; 
	     nav();
    
    // Else there will be a hash. Go to hash page
    }else{ 
        nav();
    }
    
    // On the hashchange event, call the nav function.
    $(window).on("hashchange", nav );
})();
