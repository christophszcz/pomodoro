var timer = {
	minutes: 25,
	seconds: 60
};

// while (timer.minutes > 0) {
// 	function 

// }

var clock = document.getElementById('clock');
clock.innerHTML = ("<p>" + timer.seconds + "</p>");

function secondsCountDown(){
	timer.seconds -- ;
	clock.innerHTML = ("<p>" + timer.seconds + "</p>");
}

setInterval(secondsCountDown, 1000);
 