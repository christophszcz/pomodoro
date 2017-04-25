var Timer = {
	minutes: 25,
	seconds: 60
};

var countingMinutes = false;
var startTimerButton = document.getElementById('start');

// Minutes / Seconds 

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
}

startTimerButton.addEventListener('click', clickCountDown);
function clickCountDown(){
	if (countingMinutes === false){
		secondsInterval = window.setInterval(secondsCountDown, 1000);
	} else{
		countingMinutes = false;
		clearInterval(secondsInterval);
	}	
}
