var Timer = {
	minutes: 25,
	seconds: 60
};

var counting = false;

var startTimerButton = document.getElementById('start');

// while (timer.minutes > 0) {
// 	function 

// Seconds  

var clock = document.getElementById('clock');
var display = Timer.seconds;
if (Timer.seconds === 60){
	display = '00';
} 
clock.innerHTML = ("<p>" + display + "</p>");

function addDigit(num) {
  return (num < 10) ? '0' + num.toString() : num.toString();
}

function secondsCountDown(){
	counting = true;
	if (Timer.seconds <= 0){
		Timer.seconds = 60;
	} 
	Timer.seconds -- ;
	clock.innerHTML = ("<p>" + addDigit(Timer.seconds) + "</p>");
}

startTimerButton.addEventListener('click', clickCountDown);
function clickCountDown(){
	if (counting === false){
		secondsInterval = window.setInterval(secondsCountDown, 1000);
	} else{
		counting = false;
		clearInterval(secondsInterval);
	}	
}
