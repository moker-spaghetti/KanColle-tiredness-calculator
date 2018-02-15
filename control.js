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
	var trdForm = document.getElementById('tiredness');
	var tiredness = Number(trdForm.innerHTML) + delta;
	if (tiredness > 100) {
		tiredness = 100;
		message = message + ",over100";
	} else if (tiredness < 0) {
		tiredness = 0;
		message = message + ",under0";
	}
	trdForm.innerHTML = tiredness;
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