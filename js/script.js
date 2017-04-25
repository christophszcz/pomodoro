var Timer = {
	minutes: 25,
	seconds: 60
};

var countingMinutes = false, audioPlaying = true;
var startStopTimerButton = document.getElementById('start');
var resetTimerButton = document.getElementById('reset');
var toggleAudio = document.getElementById('audio');

// Work Timer 

var seconds = document.getElementById('seconds');
var display = Timer.seconds;
var minutes = document.getElementById('minutes');

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
	Timer.seconds-- ;
	seconds.innerHTML = ("<p>" + addDigit(Timer.seconds) + "</p>");
	if(Timer.seconds === 00 && Timer.minutes === 0){
		countingMinutes = false;
		clearInterval(secondsInterval);
		document.getElementById('alarm-noise').play();
		audioPlaying = true;
	}
}

startStopTimerButton.addEventListener('click', clickCountDown);
function clickCountDown(){
	if (countingMinutes === false && !(Timer.seconds === 00 && Timer.minutes === 0)){
		secondsInterval = window.setInterval(secondsCountDown, 1000);
	} else if (Timer.seconds === 00 && Timer.minutes === 0){
		countingMinutes = false;
		clearInterval(secondsInterval);
		Timer.seconds = 0;
		seconds.innerHTML = ("<p>" + addDigit(Timer.seconds) + "</p>");
		Timer.minutes = 25;
		minutes.innerHTML = ("<p>" + Timer.minutes + "</p>");
		document.getElementById('alarm-noise').pause();
		audioPlaying = false;
	} else {
		countingMinutes = false;
		clearInterval(secondsInterval);
	}
}

resetTimerButton.addEventListener('click', function(){
	countingMinutes = false;
	clearInterval(secondsInterval);
	Timer.seconds = 0;
	seconds.innerHTML = ("<p>" + addDigit(Timer.seconds) + "</p>");
	Timer.minutes = 25;
	minutes.innerHTML = ("<p>" + Timer.minutes + "</p>");
	document.getElementById('alarm-noise').pause();
	audioPlaying = false;
});

toggleAudio.addEventListener('click', function(){
	if (audioPlaying && (Timer.seconds === 00 && Timer.minutes === 0)){
		document.getElementById('alarm-noise').pause();
		audioPlaying = false;
	} else if ((Timer.seconds === 00 && Timer.minutes === 0)) {
		document.getElementById('alarm-noise').play();
		audioPlaying = true;
	}
});
