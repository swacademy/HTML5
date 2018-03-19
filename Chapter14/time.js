var yourtimeEl = document.getElementById('yourtime');
var servertimeEl = document.getElementById('servertime');
var startTime = new Date().getTime();
var liveServerTime = typeof servertime == "number";

function myfun() {
	var t = new Date();
    var d = t.getTime() - startTime;
	yourtimeEl.innerHTML = niceTime(t);
	servertimeEl.innerHTML = liveServerTime ? 
	            niceTime(new Date(servertime + d)) : servertime;  
    setTimeout(myfun, 1000);
}

function niceTime(t) {
  return t.getHours() + ':' + two(t.getMinutes()) + ':' + two(t.getSeconds());
}

function two(s) {
  return (s+'').length == 2 ? s : '0' + s;
}



