$('#countdown').countdown('2020/12/21', { elapse: true }).on('update.countdown', function(event) {
	if(event.elapsed) $(this).text(event.strftime('%D일 %H시간 %M분 %S초가 지났습니다.'));
	else $(this).html('<h1>' + event.strftime('%-Y년 %-d일 %-H시간 %M분 %S초가 남았습니다.' + '</h1>'));
});
