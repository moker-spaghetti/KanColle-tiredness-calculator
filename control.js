function error(message) {
	console.log("[ERROR]" + message);
	alert("[ERROR]" + message);
}

function log(message) {
	var log = document.getElementById('log');
	log.innerHTML = message + "<br>" + log.innerHTML;
	console.log(message);
	//TODO limit the number of log?
}


//ボタン処理
function setTiredness(num) {
	var trd = document.getElementById('tiredness');
	trd.innerHTML = num;
	log("Set to " + num);
}

function addTiredness(message, delta) {
	var trd = document.getElementById('tiredness');
	trd.innerHTML = Number(trd.innerHTML) + delta;
	log(message + "(" + delta + ")");
}

function resultBtn(message, delta) {
	if (document.getElementById('flagship').checked) {
		delta = delta + 3;
		addTiredness(message + ",flag",delta);
	} else {
		addTiredness(message, delta);
	}

}