var start = document.getElementById('start-page');
spinner = $( "#spinner" ).spinner();

start.addEventListener('click', function(){
	if (spinner.spinner( "value" ) < 0 || spinner.spinner( "value" ) === null ){
		spinner.spinner( "value", 25 );
		alert('Please enter a valid time value.');
	}
	Timer.minutes = spinner.spinner( "value" );
	minutes.innerHTML = ("<p>" + Timer.minutes + "</p>"); 
});


