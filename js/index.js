$('#countdown').countdown('2020/12/21', { elapse: true }).on('update.countdown', function(event) {
	if(event.elapsed) $(this).text(event.strftime('%D일 %H시간 %M분 %S초가 지났습니다.'));
	else $(this).html('<h1>' + event.strftime('%-Y년 %-d일 %-H시간 %M분 %S초가 남았습니다.' + '</h1>'));
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

	document.getElementById(this.innerHTML.toLowerCase()).style.display = "block";

	this.style.backgroundColor = 'pink';
})