var start = document.getElementById('start-page');
spinner = $( "#spinner" ).spinner();

start.addEventListener('click', function(){
	Timer.minutes = spinner.spinner( "value" );
	minutes.innerHTML = ("<p>" + Timer.minutes + "</p>"); 
});