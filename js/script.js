var Timer = {
	minutes: 1,
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
		var audio = new Audio('audio/strangeAlarm.mp3'); 
		audioPlaying = true;
		audio.addEventListener('ended', function() {
    	this.currentTime = 0;
    	this.play();
		}, false);
		audio.play();
	}
}

startStopTimerButton.addEventListener('click', clickCountDown);
function clickCountDown(){
	if (countingMinutes === false){
		secondsInterval = window.setInterval(secondsCountDown, 1000);
	} else {
		countingMinutes = false;
		clearInterval(secondsInterval);
	}
}

resetTimerButton.addEventListener('click', function(){
	counting = false;
	clearInterval(secondsInterval);
	Timer.seconds = 0;
	seconds.innerHTML = ("<p>" + addDigit(Timer.seconds) + "</p>");
	Timer.minutes = 1;
	minutes.innerHTML = ("<p>" + Timer.minutes + "</p>");
});

// toggleAudio.addEventListener('click', function(){
// 	audio = new Audio('audio/strangeAlarm.mp3'); 
// 	audio.pause();
// 	audioPlaying = false;
// });
