/* 运动框架*/
function getStyle(obj, name) {
	if (obj.currentStyle) {
		return obj.currentStyle[name];
	} else {
		return getComputedStyle(obj, false)[name];
	}
}

function startMove(obj, attr, iTarget) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function () {
		var cur = 0;

		if (attr == 'opacity') {
			cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
		} else {
			cur = parseInt(getStyle(obj, attr));
		}

		var speed = (iTarget - cur) / 6;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

		if (cur == iTarget) {
			clearInterval(obj.timer);
		} else {
			if (attr == 'opacity') {
				obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
				obj.style.opacity = (cur + speed) / 100;

			} else {
				obj.style[attr] = cur + speed + 'px';
			}
		}
	}, 30);
}

function printPanel(x, y, r1, r2, id1) {
	var c = document.getElementById(id1);
	var ctx = c.getContext("2d");
	var r0 = r2 + (r1 - r2) / 2;
	ctx.strokeStyle = "black";
	ctx.moveTo(x - r1, y);
	ctx.arc(x, y, r1, -1 * Math.PI, -0.5 * Math.PI, false);
	ctx.lineTo(x, y - r2);
	ctx.arc(x, y, r2, -0.5 * Math.PI, -1 * Math.PI, true);
	ctx.lineTo(x - r1, y);
	ctx.stroke();
	ctx.fillStyle = "#D8D8D8";
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(x, y - r1);
	ctx.arc(x, y, r1, -0.5 * Math.PI, 0 * Math.PI, false);
	ctx.lineTo(x + r2, y);
	ctx.arc(x, y, r2, 0 * Math.PI, -0.5 * Math.PI, true);
	ctx.stroke();
	ctx.fillStyle = "darkgreen";
	ctx.fill();
	//画刻度
	for (var n = 1; n < 11; n++) {
		var n1 = n * Math.PI / 20;
		ctx.moveTo(x - r1 * Math.cos(n1), y - r1 * Math.sin(n1));
		ctx.lineTo(x - r0 * Math.cos(n1), y - r0 * Math.sin(n1));
		ctx.lineWidth = 1;
		ctx.stroke();
	};
	for (var n = 1; n < 11; n++) {
		var n1 = n * Math.PI / 20;
		ctx.moveTo(x + r1 * Math.cos(n1), y - r1 * Math.sin(n1));
		ctx.lineTo(x + r0 * Math.cos(n1), y - r0 * Math.sin(n1));
		ctx.stroke();
	};
	ctx.beginPath();
	ctx.moveTo(x + r1 * Math.cos(0.25 * Math.PI), y - r1 * Math.sin(0.25 * Math.PI));
	ctx.lineTo(x + r0 * Math.cos(0.25 * Math.PI) * 0.96, y - r0 * Math.sin(0.25 * Math.PI) * 0.96);
	ctx.lineWidth = 3;
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(x + r1 * Math.cos(0.5 * Math.PI), y - r1 * Math.sin(0.5 * Math.PI));
	ctx.lineTo(x + r0 * Math.cos(0.5 * Math.PI) * 0.96, y - r0 * Math.sin(0.5 * Math.PI) * 0.96);
	ctx.lineWidth = 3;
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(x - r1 * Math.cos(0.25 * Math.PI), y - r1 * Math.sin(0.25 * Math.PI));
	ctx.lineTo(x - r0 * Math.cos(0.25 * Math.PI) * 0.96, y - r0 * Math.sin(0.25 * Math.PI) * 0.96);
	ctx.lineWidth = 3;
	ctx.stroke();
}

//*********画度量*****
//x,y 圆心
//r1  外圆半径
//min 最小刻度
//max 最大刻度
//id
function printScale(x, y, r1, min, max, id) {
	var c = document.getElementById(id);
	var ctx = c.getContext("2d");
	//	ctx.beginPath();
	ctx.strokeStyle = "white";
	ctx.font = "30px Arial";
	ctx.strokeText((min + max) / 2, x - 8, y - r1 - 10);
	ctx.strokeText(0.75 * min + 0.25 * max, x - 0.9 * r1, y - 0.85 * r1);
	ctx.strokeText(min, x - 1.35 * r1, y - 10);
	ctx.strokeText(0.25 * min + 0.75 * max, x + 0.75 * r1, y - 0.85 * r1);
	ctx.strokeText(max, x + 1.1 * r1, y - 10);
}

/*驾控台画杠杆*/
//ydx车钟位置
//yd为实际燃油齿条刻度
function bpointerLever1(ydx, yd, id) {
	var c = document.getElementById(id);
	var ctx = c.getContext("2d");
	if (yd >= 120) {
		yd = 120
	}
	var a = ydx * 1.3;
	var b = yd * 1.3;
	ydx = parseInt(ydx)
	yd = parseInt(yd)
	ctx.clearRect(0, 0, 300, 600);
	ctx.beginPath();
	ctx.moveTo(110, 257 - a);
	ctx.lineTo(160, 237 - a);
	ctx.lineTo(110, 217 - a);
	ctx.lineTo(110, 257 - a);
	ctx.stroke();
	ctx.moveTo(230, 257 - b);
	ctx.lineTo(280, 237 - b);
	ctx.lineTo(230, 217 - b);
	ctx.lineTo(230, 257 - b);
	ctx.stroke();

	ctx.fillStyle = "yellow";
	ctx.fill();
	ctx.strokeStyle = "yellow";
	ctx.font = "22px Arial ";
	ctx.fontWeight = 300;
	ctx.fillText(ydx, 130, 420);
	ctx.fillText(yd, 220, 420);
}

//旋转指针的角度
//x 所要旋转到的角度
//id 指针的id
function pointerRotate(x, id) {
	var a = document.getElementById(id);
	a.style.transformOrigin = 'center bottom';
	a.style.transform = 'rotate(' + x + 'deg)';
}

//innerChange改变示数
//x为数字
//y为单位
function innerChange(x, y, id) {
	var a = document.getElementById(id);
	a.innerHTML = x + ' ' + y;
}

//speedLevelChange为当车钟变化时，气动逻辑图里手柄随之分级变化的函数
//v传入的车钟示数
//min、max最大最小值
function speedLevelChange(v) {
	for (var b = 0; b < 3; b++) {
		if ((b * 8) <= v && v < (b * 8 + 8)) {
			sdctx.drawImage(picMap, 433 + b * 127, 521, 124, 89, 72, 488, 155, 100); //速度车钟min-2位置			
		}
	}
	for (var c = 0; c < 6; c++) {
		if ((c * 8 + 24) <= v && v < (c * 8 + 32)) {
			sdctx.drawImage(picMap, 821, 2 + c * 91, 124, 89, 72, 488, 155, 100); //速度车钟3-max位置
		}

	}
	if (v >= 72) {
		sdctx.drawImage(picMap, 821, 457, 124, 89, 72, 488, 155, 100); //速度车钟max位置
	}
}
//var a=2
//sdctx.drawImage(picMap,432+a*127,520,125,89,70,480,155,100);//速度车钟min-3位置
//sdctx.drawImage(picMap,820,274,125,89,70,480,155,100);//速度车钟6位置
//	for(var a = 0; a < 6; a++) {
//		if((min +3*b+ a * b) <= b && b < (min + a * b +4* b)) {
//			sdctx.drawImage(picMap,820,1+a*91,125,89,70,480,155,100); //速度车钟3-max位置


//车钟变量，用于相互之间通信
var briled = 5;
var telled = 1;
var locled = 5;

//  车钟LED初始化函数,颜色正常
function lclearSpeedLed(briled, locled) {
	for (var i = 0; i < 5; i++) {
		btled1[i].style.background = '#006400';
		btled2[i].style.background = '#006400';
	}
	for (var i = 6; i < 11; i++) {
		btled1[i].style.background = '#640000';
		btled2[i].style.background = '#640000';
	}
	btled1[5].style.background = ' #99af1c';
	btled2[5].style.background = ' #99af1c';
	//驾驶台车钟显示驾驶台的当前车令
	// btled1[briled].style.background = '#00FF00';
	// btled2[briled].style.background = '#00FF00';

	for (var i = 0; i < lspeedsAll.length; i++) {
		lspeedsAll[i].style.borderColor = 'white';
	}
	for (var i1 = 0; i1 < lspeedsLed.length; i1++) {
		lspeedsLed[i1].style.backgroundColor = 'white';
	}
	lspeedsLed[briled].style.backgroundColor = 'red';
	if (lhandle1x % 2 == 1) {//机旁控制
		//驾驶台车钟显示集控室的当前车令
		btled1[locled].style.background = 'red';
		btled2[locled].style.background = 'red';
	}
}

function briLEDclear(briled) {
	for (var i = 0; i < 5; i++) {
		ttled1[i].style.background = '#006400';
		ttled2[i].style.background = '#006400';
		btled1[i].style.background = '#006400';
		btled2[i].style.background = '#006400';
	}
	for (var i = 6; i < 11; i++) {
		ttled1[i].style.background = '#640000';
		ttled2[i].style.background = '#640000';
		btled1[i].style.background = '#640000';
		btled2[i].style.background = '#640000';
	}
	btled1[5].style.background = ' #99af1c';
	btled2[5].style.background = ' #99af1c';

	lclearSpeedLed(briled, telled)
	plclearSpeedLed(briled, locled)
	//驾驶台车钟显示驾驶台的当前车令
	// btled1[briled].style.background = '#00FF00';
	// btled2[briled].style.background = '#00FF00';
	//集控室车钟显示驾驶台当前车令
	ttled1[briled].style.background = 'red';
	ttled2[briled].style.background = 'red';
	btled1[telled].style.background = 'red';
	btled2[telled].style.background = 'red';

	if (briled == telled) {
		btled1[telled].style.background = ' #00FF00';
		btled2[telled].style.background = ' #00FF00';
	}

	//机旁车钟显示驾驶台当前车令
	lspeedsLed[briled].style.background = 'red';
	plspeedsLed[briled].style.background = 'red';


}

function telLEDclear(briled, telled) {
	//集控室,驾驶台车钟归位，驾驶台车钟归位
	for (var i = 0; i < 5; i++) {
		ttled1[i].style.background = '#006400';
		ttled2[i].style.background = '#006400';
		btled1[i].style.background = '#006400';
		btled2[i].style.background = '#006400';
	}
	for (var i = 6; i < 11; i++) {
		ttled1[i].style.background = '#640000';
		ttled2[i].style.background = '#640000';
		btled1[i].style.background = '#640000';
		btled2[i].style.background = '#640000';
	}
	ttled1[5].style.background = ' #99af1c';
	ttled2[5].style.background = ' #99af1c';
	btled1[5].style.background = ' #99af1c';
	btled2[5].style.background = ' #99af1c';

	//集控室车钟显示驾驶台当前车令
	ttled1[briled].style.background = 'red';
	ttled2[briled].style.background = 'red';
	btled1[telled].style.background = 'red';
	btled2[telled].style.background = 'red';

	if (briled == telled) {
		ttled1[telled].style.background = '#00FF00';
		ttled2[telled].style.background = '#00FF00';
		btled1[briled].style.background = '#00FF00';
		btled2[briled].style.background = '#00FF00';
	} else {
		//集控室车钟显示驾驶台当前车令
		ttled1[briled].style.background = 'red';
		ttled2[briled].style.background = 'red';
	}

	//集控室车钟显示集控室当前车令
	// ttled1[telled].style.background = '#00FF00';
	// ttled2[telled].style.background = '#00FF00';

	//驾驶台车钟显示驾驶台的当前车令
	// btled1[briled].style.background = '#00FF00';
	// btled2[briled].style.background = '#00FF00';

	if (lhandle1x % 2 == 0) {
		if (thandlex % 2 == 1) {
			//驾驶台车钟显示机旁的当前车令
			btled1[locled].style.background = 'red';
			btled2[locled].style.background = 'red';
		}
	}

}

