//**************集控室画表盘
printPanel(250, 280, 150, 130, 'cCanvas');
printPanel(680, 225, 120, 100, 'cCanvas');
printPanel(680, 470, 120, 100, 'cCanvas');
printScale(250, 280, 150, -120, 120, 'cCanvas');
printScale(680, 225, 117, 0, 40, 'cCanvas');
printScale(680, 470, 117, 0, 100, 'cCanvas');

var cc = document.getElementById('cCanvas');
var cctx = cc.getContext("2d");
cctx.font = "25px Arial ";
cctx.fontWeight = 300;
cctx.fillStyle = "white";
cctx.fillText("ME RPM", 215, 80);
cctx.fillText("START AIR PRESS", 600, 50);
cctx.fillText("FUEL INDEX", 620, 300);

/*驾控台画杠杆*/
//bpointerLever1(r,x,y,id);
//r为传入的rmp
//x为canvas的横坐标
//y为canvas的横坐标
// bpointerLever1(0, 110, 230, 'cCanvas1');

//limiter
var cLimitersMenu = document.getElementById('cLimitersMenu');
var cLimiters = document.getElementById('cLimiters');
cLimiters.onclick = function () {
	cLimitersMenu.style.display = "block";
}
var cLimitersHomeButton = document.getElementById("cLimitersHomeButton");
cLimitersHomeButton.onclick = function () {
	cLimitersMenu.style.display = "none";
}

var cMenuLi = bLimitersMenu.getElementsByTagName('li');
cMenuLi[7].onclick = function () {
	pidBox.style.display = "block";
}


//菜单弹出及隐藏
var cEngineStateBox = document.getElementById('cEngineStateBox');
var cEngineState = document.getElementById('cEngineState');
cEngineState.onclick = function () {
	cEngineStateBox.style.display = "block";
}
document.getElementById('cEngineStateHomeButton').onclick = function () {
	cEngineStateBox.style.display = "none";
}

/*时序图*/
var cSeqDiagram = document.getElementById("cSeqDiagram");
var cseqBox = document.getElementById("cseq");
cSeqDiagram.onclick = function () {
	cseqBox.style.display = "block";
}
var cseqHomeButton = document.getElementById("cseqHomeButton");
cseqHomeButton.onclick = function () {
	cseqBox.style.display = "none";
}

document.getElementById('cControlPos').onclick = function () {
	document.getElementById('ccontrolPosBox').style.display = 'block';
}
document.getElementById('ccpHomeButton').onclick = function () {
	document.getElementById('ccontrolPosBox').style.display = 'none';
}

var ccpc = document.getElementById('ccontrolPosCanvas');
var ccpctx = ccpc.getContext('2d');
ccpctx.font = '30px"微软雅黑';
ccpctx.fillStyle = "white";
ccpctx.textBaseline = "top";
ccpctx.fillText("Control Position", 530, 20);
ccpctx.fillText("PORT WING", 150, 150);
ccpctx.fillText("STB. WING", 950, 150);
ccpctx.fillText("BRIDGE", 560, 300);
ccpctx.fillText("ECR", 380, 370);
ccpctx.fillText("ECR Manual Control", 700, 370);
ccpctx.fillText("Local Manual Control", 560, 450);


var clicksafesys = 0
document.getElementById('cSafetySys').onclick = function () {
	clicksafesys = 1
	$('#safety').css('display', 'block')
	$('#safesysbtn').css('display', 'block')
	$('#safesysbtn').css('opacity', 1)
	$('#safety').css('opacity', 1)
	$('#cSafetyHome').css('display', 'block')
	// $('#cAlarm').css('opacity',0)
	// $('#cLimiters').css('opacity',0)
	// $('#cControlPos').css('opacity',0)
	// $('#cMiscMenu').css('opacity',0)
	// $('#cFineTuning').css('opacity',0)
	// $('#cSafetySys').css('opacity',0)
	// $('#cEngineState').css('opacity',0)
	// $('#cEngineMode').css('opacity',0)
	// $('#cEngineState').css('opacity',0)
	// $('#cSeqDiagram').css('opacity',0)

}
document.getElementById('cSafetyHomeButton').onclick = function () {
	clicksafesys = 0
	$('#cSafetyHome').css('display', 'none')
	$('#safety').css('opacity', 0)
	$('#safesysbtn').css('display', 'none')
}

// document.getElementById('cAlarm').onclick = function () {
// 	$('#cAlarmBox').css('display', 'block')
// 	$('#cAlarmHome').css('display', 'block')

// }
document.getElementById('bAlarm').onclick = function () {
	$('#bAlarmBox').css('display', 'block')
	$('#cAlarmHome').css('display', 'block')

}
document.getElementById('cAlarmHomeButton').onclick = function () {
	$('#cSafetyHome').css('display', 'none')
	$('#bAlarmBox').css('display', 'none')

}

// if (ydx > 0) {
// 	document.getElementById('cseqAheadcmd').style.backgroundColor = 'green'
// 	document.getElementById('cseqEngineRuningAhead').style.backgroundColor = 'green'
// }
// if (ydx == 0) {
// 	document.getElementById('cseqAheadcmd').style.backgroundColor = '#c3c3c3'
// 	// document.getElementById('cseqEngineRuningAhead').style.backgroundColor = '#c3c3c3'


// }