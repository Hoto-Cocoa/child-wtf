$('#message').countdown('2020/12/21', { elapse: true }).on('update.countdown', function(event) {
	if(event.elapsed) $(this).html(event.strftime('<h2>코코아가 성인이 되고...</h2><div id="counter"><div id="value"><h1>%-m개월 %-d일<br>%-H시간 %M분 %S초</h1></div></div>지났습니다.'));
	else $(this).html(event.strftime('<h2>코코아가 성인이 될 때까지...</h2><div id="counter"><div id="value"><h1>%-m개월 %-d일<br>%-H시간 %M분 %S초</h1></div></div>남았습니다.'));
});

for(var i = 0, elements = document.getElementsByClassName('tablink'); i < elements.length; i++) elements[i].addEventListener('click', function(event) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].style.backgroundColor = "";
	}

	document.getElementById(this.innerHTML.toLowerCase().substring(this.innerHTML.toLowerCase().length - 1) === '.' ? this.innerHTML.toLowerCase().substring(0, this.innerHTML.toLowerCase().length - 1) : this.innerHTML.toLowerCase()).style.display = "block";

	this.style.backgroundColor = 'pink';
})