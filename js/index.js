setInterval(() => {
	const remainingTime = parseInt((new Date('2020/12/21') - Date.now()) / 1000);
	if(remainingTime > 0) {
		const parsedTime = parseTime(remainingTime);
		document.getElementById('message').innerHTML = '<h2>코코아가 성인이 될 때까지...</h2><div id="counter"><div id="value"><h1>' + parsedTime.days + '일<br>' + parsedTime.hours +'시간 ' + parsedTime.minutes + '분 ' + parsedTime.seconds + '초</h1></div></div>남았습니다.';
	} else {
		const parsedTime = parseTime(-remainingTime);
		document.getElementById('message').innerHTML = '<h2>코코아가 성인이 되고...</h2><div id="counter"><div id="value"><h1>' + parsedTime.days + '일<br>' + parsedTime.hours +'시간 ' + parsedTime.minutes + '분 ' + parsedTime.seconds + '초</h1></div></div>지났습니다.';	
	}
	function parseTime(seconds) {
		const days = parseInt(seconds / (3600 * 24));
		seconds -= days * (3600 * 24);
		const hours = parseInt(seconds / 3600);
		seconds -= hours * 3600;
		const minutes = parseInt(seconds / 60);
		seconds -= minutes * 60;
		return { days, hours, minutes, seconds };
	}
}, 100);
