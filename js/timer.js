var Timer = {
	minutes: 25,
	seconds: 60
};

var countingMinutes = false, audioPlaying = true;
var startStopTimerButton = document.getElementById('start');
var resetTimerButton = document.getElementById('reset');
var toggleAudio = document.getElementById('audio');
var start = document.getElementById('start-page');
workSpinner = $( "#workSpinner" ).spinner();
breakSpinner = $( "#breakSpinner" ).spinner();
var goBack = document.getElementById('go-back');
var startBreak = document.getElementById('start-break');
var restartWorkSession = document.getElementById('restart-work-session');

var seconds = document.getElementById('seconds');
var display = Timer.seconds;
var minutes = document.getElementById('minutes');

/* Start Page */

start.addEventListener('click', function(){
	if (workSpinner.spinner( "value" ) < 0 || workSpinner.spinner( "value" ) === null ){
		workSpinner.spinner( "value", 25 );
		alert('Please enter a valid time value.');
	}
	// resetTimer();
	countingMinutes = false;
	Timer.minutes = workSpinner.spinner( "value" );
	minutes.innerHTML = ("<p>" + Timer.minutes + "</p>");
	Timer.seconds = 0;
	seconds.innerHTML = ("<p>" + addDigit(Timer.seconds) + "</p>");
	document.getElementById('timer-selection-id').style.display = 'none'; 
	document.getElementById('timer-id').style.display = 'inherit'; 

	document.getElementById('break-text').style.display = 'none'; 
	clickCountDown();
});

/* Timer */ 

minutes.innerHTML = ("<p>" + Timer.minutes + "</p>");

if (Timer.seconds === 60){
	display = '00';
} 

seconds.innerHTML = ("<p>" + display + "</p>");

function addDigit(num) {
  return (num < 10) ? '0' + num.toString() : num.toString();
}

function secondsCountDown(){
	countingMinutes = true;
	if (Timer.seconds === 60 || Timer.seconds === 00 ){
		Timer.minutes = Timer.minutes - 1;
		minutes.innerHTML = ("<p>" + Timer.minutes + "</p>");
	} 
	if (Timer.seconds <= 0){
		Timer.seconds = 60;
	} 
	Timer.seconds -- ;
	seconds.innerHTML = ("<p>" + addDigit(Timer.seconds) + "</p>");
	if(Timer.seconds === 00 && Timer.minutes === 0){
		countingMinutes = false;
		clearInterval(secondsInterval);
		document.getElementById('alarm-noise').play();
		audioPlaying = true;
		if ($('#work-text').css('display') === 'block'){
			document.getElementById('start-break').style.display = 'flex';
		} else if ($('#break-text').css('display') === 'block'){
			document.getElementById('restart-work-session').style.display = 'flex';
		}
	}
}

startStopTimerButton.addEventListener('click', clickCountDown);
function clickCountDown(){
	if (countingMinutes === false && !(Timer.seconds === 00 && Timer.minutes === 0)){
		var btn = document.getElementById("start");
		btn.disabled = true;
		secondsInterval = window.setInterval(secondsCountDown, 1000);
		function buttonAvailable(){ // turn the start/stop button on after 2 seconds
	    return function(){
	      btn.disabled = false;
	    }
		}
		setTimeout(buttonAvailable(), 1000);
	} else if ((Timer.seconds === 00 && Timer.minutes === 0) || (Timer.minutes < 0)){
		countingMinutes = false;
		clearInterval(secondsInterval);
		Timer.seconds = 0;
		seconds.innerHTML = ("<p>" + addDigit(Timer.seconds) + "</p>");
		if ($('#work-text').css('display') === 'block'){
			document.getElementById('start-break').style.display = 'flex';
		} else if ($('#break-text').css('display') === 'block'){
			document.getElementById('restart-work-session').style.display = 'flex';
		}
		minutes.innerHTML = ("<p>" + Timer.minutes + "</p>");
		document.getElementById('alarm-noise').pause();
		audioPlaying = false;
	} else {
		countingMinutes = false;
		clearInterval(secondsInterval);
	}
}

resetTimerButton.addEventListener('click', resetTimer);

function resetTimer(){
	countingMinutes = false;
	clearInterval(secondsInterval);
	Timer.seconds = 0;
	seconds.innerHTML = ("<p>" + addDigit(Timer.seconds) + "</p>");
	if ($('#work-text').css('display') === 'block'){
		Timer.minutes = workSpinner.spinner( "value" );
		minutes.innerHTML = ("<p>" + workSpinner.spinner( "value" ) + "</p>");
	} else if ($('#break-text').css('display') === 'block'){
		Timer.minutes = breakSpinner.spinner( "value" );
		minutes.innerHTML = ("<p>" + breakSpinner.spinner( "value" ) + "</p>");
	}
	document.getElementById('alarm-noise').pause();
	audioPlaying = false;
}

toggleAudio.addEventListener('click', function(){
	if (audioPlaying && (Timer.seconds === 00 && Timer.minutes === 0)){
		document.getElementById('alarm-noise').pause();
		audioPlaying = false;
	} else if ((Timer.seconds === 00 && Timer.minutes === 0)) {
		document.getElementById('alarm-noise').play();
		audioPlaying = true;
	}
});

goBack.addEventListener('click', function(){
	document.getElementById('timer-selection-id').style.display = 'block';
	document.getElementById('timer-id').style.display = 'none'; 
	// resetTimer();
	countingMinutes = false;
	clearInterval(secondsInterval);
	document.getElementById('alarm-noise').pause();
	document.getElementById('start-break').style.display = 'none';
	document.getElementById('restart-work-session').style.display = 'none';
	document.getElementById('break-text').style.display = 'none'; 
	document.getElementById('work-text').style.display = 'inherit'; 
});

startBreak.addEventListener('click', function (){
	document.getElementById('start-break').style.display = 'none';
	document.getElementById('restart-work-session').style.display = 'none';
	document.getElementById('alarm-noise').pause();
	Timer.minutes = breakSpinner.spinner( "value" );
	minutes.innerHTML = ("<p>" + breakSpinner.spinner( "value" ) + "</p>");
	document.getElementById('break-text').style.display = 'inherit'; 
	document.getElementById('work-text').style.display = 'none';
	clickCountDown();
});

restartWorkSession.addEventListener('click', function (){
	document.getElementById('start-break').style.display = 'none';
	document.getElementById('restart-work-session').style.display = 'none';
	document.getElementById('alarm-noise').pause();
	Timer.minutes = workSpinner.spinner( "value" );
	minutes.innerHTML = ("<p>" + workSpinner.spinner( "value" ) + "</p>");
	document.getElementById('break-text').style.display = 'none'; 
	document.getElementById('work-text').style.display = 'inherit';
	clickCountDown();
});
