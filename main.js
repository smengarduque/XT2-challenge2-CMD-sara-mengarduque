function realtimeClock(){
	var rtClock = new Date();

	var hours = rtClock.getHours();
	var minutes = rtClock.getMinutes();
	var seconds = rtClock.getSeconds();

if(hours >= 9 && hours <= 20){
	document.getElementById('weericoon').classList.remove('hide');
	document.getElementById('icoom2').classList.add('hide');
} else{
	document.getElementById('icoon2').classList.remove('hide');
	document.getElementById('weericoon').classList.add('hide');
}


// if (hours > 9 && < 20){
// 		document.getElementById('weericoon').classList.remove('far fa-moon');
// 		document.getElementById('weericoon').classList.add('far fa-sun');
// 	} else{
// 		document.getElementById('weericoon').classList.remove('far fa-sun');
// 		document.getElementById('weericoon').classList.add('far fa-moon');
// 	}

	//Add AM and PM system
	var amPm = (hours < 12) ? "AM" : "PM";

	//Convert the hours component to 12-hour format
	hours = (hours > 12) ? hours - 12 : hours;

	//Pad the hours, minutes and seconds with leading zeros
	hours = ("0" + hours).slice(-2);
	minutes = ("0" + minutes).slice(-2);
	seconds = ("0" + seconds).slice(-2);

	//Display the clock
	document.getElementById('clock').innerHTML =
		hours + " : " + minutes + " : " + seconds + "" + amPm;
	var t = setTimeout(realtimeClock, 500); 


	//Datum//
	var today = new Date();
	document.getElementById('date').innerHTML = today.getDate() + '-' + (today.getMonth()+1) + '-' + '2032';
}
	/*
	document.getElementById('date').innerHTML = today.getDate();
	document.getElementById('date').innerHTML = today.getMonth() + 1;
	document.getElementById('date').innerHTML = today.getFullYear();
		document.getElementById('date').innerHTML = today.getDate() + '-' + (today.getMonth()+1) + '-' + today.getFullYear();
	*/

//if day then sun//
/*function sun(){
	if (uur >= 9 && <= 20){
		document.getElementById('clock').classList.remove('nacht');
		document.getElementById('clock').classList.add('dag');
	} else{
		document.getElementById('clock').classList.remove('dag');
		document.getElementById('clock').classList.add('nacht');
	}

	if (seconds < 10){
		seconds = '0' + seconds;
	}

	document.getElementById('clock').classList.remove('nacht');
}
	

*/



