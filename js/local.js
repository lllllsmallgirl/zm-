var lrmp = 0; //机旁控制转速
var lrmpx = 0; //暂存机旁控制转速
var lbox1c = document.getElementById('lbox1canvas');
var lbox1ctx = lbox1c.getContext("2d");
var airstart = 0; //机旁空气启动变量，1为空气启动状态，0为非空气启动状态
var airstarting = 0; //1表示处于空气启动后到转速为0的这一过程中，0表示在空气启动之前或转速为0 后
var lshutdownLed = document.getElementById('lshutDownLed')
lbox1ctx.font = '18px Arial';
lbox1ctx.fillStyle = '#FFFF00';
lbox1ctx.fillText('AHEAD', 78, 33);
lbox1ctx.fillText('ASTERN', 235, 33);
lbox1ctx.fillText('SHUT DOWN', 78, 82);
lbox1ctx.beginPath();
lbox1ctx.font = '14px Arial';
lbox1ctx.fillStyle = '#FFFF00';
lbox1ctx.fillText('TURNING GEAR', 80, 120);
lbox1ctx.fillText('ENGAGED', 80, 135);
lbox1ctx.fillText('BRIDGE', 235, 72);
lbox1ctx.fillText('CONTROL', 235, 87);
lbox1ctx.fillText('AUX BLOWER', 80, 168);
lbox1ctx.fillText('RUNNING', 80, 183);
lbox1ctx.fillText('CONTROL ROOM', 235, 120);
lbox1ctx.fillText('CONTROL', 235, 135);
lbox1ctx.fillText('EMERGENCY', 235, 168);
lbox1ctx.fillText('CONTROL', 235, 183);
lbox1ctx.beginPath();
lbox1ctx.font = '13px Arial';
lbox1ctx.fillStyle = '#FFFFFF';
lbox1ctx.fillText('CANCEL', 91, 225);
lbox1ctx.fillText('SHUT DOWN', 77, 240);
lbox1ctx.fillText('LAMP', 219, 225);
lbox1ctx.fillText('TEST', 219, 240);

// canvas副本
var plbox1c = document.getElementById('plbox1canvas');
var plbox1ctx = plbox1c.getContext("2d");
plbox1ctx.font = '18px Arial';
plbox1ctx.fillStyle = '#FFFF00';
plbox1ctx.fillText('AHEAD', 78, 33);
plbox1ctx.fillText('ASTERN', 235, 33);
plbox1ctx.fillText('SHUT DOWN', 78, 82);
plbox1ctx.beginPath();
plbox1ctx.font = '14px Arial';
plbox1ctx.fillStyle = '#FFFF00';
plbox1ctx.fillText('TURNING GEAR', 80, 120);
plbox1ctx.fillText('ENGAGED', 80, 135);
plbox1ctx.fillText('BRIDGE', 235, 72);
plbox1ctx.fillText('CONTROL', 235, 87);
plbox1ctx.fillText('AUX BLOWER', 80, 168);
plbox1ctx.fillText('RUNNING', 80, 183);
plbox1ctx.fillText('CONTROL ROOM', 235, 120);
plbox1ctx.fillText('CONTROL', 235, 135);
plbox1ctx.fillText('EMERGENCY', 235, 168);
plbox1ctx.fillText('CONTROL', 235, 183);
plbox1ctx.beginPath();
plbox1ctx.font = '13px Arial';
plbox1ctx.fillStyle = '#FFFFFF';
plbox1ctx.fillText('CANCEL', 91, 225);
plbox1ctx.fillText('SHUT DOWN', 77, 240);
plbox1ctx.fillText('LAMP', 219, 225);
plbox1ctx.fillText('TEST', 219, 240);


var glbox1c = document.getElementById('glbox1canvas');
var glbox1ctx = glbox1c.getContext("2d");
glbox1ctx.font = '18px Arial';
glbox1ctx.fillStyle = '#FFFF00';
glbox1ctx.fillText('AHEAD', 78, 33);
glbox1ctx.fillText('ASTERN', 235, 33);
glbox1ctx.fillText('SHUT DOWN', 78, 82);
glbox1ctx.beginPath();
glbox1ctx.font = '14px Arial';
glbox1ctx.fillStyle = '#FFFF00';
glbox1ctx.fillText('TURNING GEAR', 80, 120);
glbox1ctx.fillText('ENGAGED', 80, 135);
glbox1ctx.fillText('BRIDGE', 235, 72);
glbox1ctx.fillText('CONTROL', 235, 87);
glbox1ctx.fillText('AUX BLOWER', 80, 168);
glbox1ctx.fillText('RUNNING', 80, 183);
glbox1ctx.fillText('CONTROL ROOM', 235, 120);
glbox1ctx.fillText('CONTROL', 235, 135);
glbox1ctx.fillText('EMERGENCY', 235, 168);
glbox1ctx.fillText('CONTROL', 235, 183);
glbox1ctx.beginPath();
glbox1ctx.font = '13px Arial';
glbox1ctx.fillStyle = '#FFFFFF';
glbox1ctx.fillText('CANCEL', 91, 225);
glbox1ctx.fillText('SHUT DOWN', 77, 240);
glbox1ctx.fillText('LAMP', 219, 225);
glbox1ctx.fillText('TEST', 219, 240);


var olbox1c = document.getElementById('olbox1canvas');
var olbox1ctx = olbox1c.getContext("2d");
olbox1ctx.font = '18px Arial';
olbox1ctx.fillStyle = '#FFFF00';
olbox1ctx.fillText('AHEAD', 78, 33);
olbox1ctx.fillText('ASTERN', 235, 33);
olbox1ctx.fillText('SHUT DOWN', 78, 82);
olbox1ctx.beginPath();
olbox1ctx.font = '14px Arial';
olbox1ctx.fillStyle = '#FFFF00';
olbox1ctx.fillText('TURNING GEAR', 80, 120);
olbox1ctx.fillText('ENGAGED', 80, 135);
olbox1ctx.fillText('BRIDGE', 235, 72);
olbox1ctx.fillText('CONTROL', 235, 87);
olbox1ctx.fillText('AUX BLOWER', 80, 168);
olbox1ctx.fillText('RUNNING', 80, 183);
olbox1ctx.fillText('CONTROL ROOM', 235, 120);
olbox1ctx.fillText('CONTROL', 235, 135);
olbox1ctx.fillText('EMERGENCY', 235, 168);
olbox1ctx.fillText('CONTROL', 235, 183);
olbox1ctx.beginPath();
olbox1ctx.font = '13px Arial';
olbox1ctx.fillStyle = '#FFFFFF';
olbox1ctx.fillText('CANCEL', 91, 225);
olbox1ctx.fillText('SHUT DOWN', 77, 240);
olbox1ctx.fillText('LAMP', 219, 225);
olbox1ctx.fillText('TEST', 219, 240);

var tlbox1c = document.getElementById('tlbox1canvas');
var tlbox1ctx = tlbox1c.getContext("2d");
tlbox1ctx.font = '18px Arial';
tlbox1ctx.fillStyle = '#FFFF00';
tlbox1ctx.fillText('AHEAD', 78, 33);
tlbox1ctx.fillText('ASTERN', 235, 33);
tlbox1ctx.fillText('SHUT DOWN', 78, 82);
tlbox1ctx.beginPath();
tlbox1ctx.font = '14px Arial';
tlbox1ctx.fillStyle = '#FFFF00';
tlbox1ctx.fillText('TURNING GEAR', 80, 120);
tlbox1ctx.fillText('ENGAGED', 80, 135);
tlbox1ctx.fillText('BRIDGE', 235, 72);
tlbox1ctx.fillText('CONTROL', 235, 87);
tlbox1ctx.fillText('AUX BLOWER', 80, 168);
tlbox1ctx.fillText('RUNNING', 80, 183);
tlbox1ctx.fillText('CONTROL ROOM', 235, 120);
tlbox1ctx.fillText('CONTROL', 235, 135);
tlbox1ctx.fillText('EMERGENCY', 235, 168);
tlbox1ctx.fillText('CONTROL', 235, 183);
tlbox1ctx.beginPath();
tlbox1ctx.font = '13px Arial';
tlbox1ctx.fillStyle = '#FFFFFF';
tlbox1ctx.fillText('CANCEL', 91, 225);
tlbox1ctx.fillText('SHUT DOWN', 77, 240);
tlbox1ctx.fillText('LAMP', 219, 225);
tlbox1ctx.fillText('TEST', 219, 240);


document.getElementById('lhandwheelCon').style.border = '1px solid red'





//扳手转动
var lhandle1 = document.getElementById('lhandle1');
var lhandle1x = 0; //标识位 0为REMOTE 1为LOCAL
lhandle1.onclick = function () {
	console.log(lhandle1x)
	if (lhandle1x % 2 == 0) {
		// this.style.transformOrigin = '31% 31%';
		// this.style.transform = 'rotate(' + 90 + 'deg)';
		// lhandle1x += 1;
		controlLocation();
	} else {
		// this.style.transformOrigin = '31% 31%';
		// this.style.transform = 'rotate(' + 0 + 'deg)';
		// lhandle1x += 1;
		controlLocation();
	}

}

var lhandle2 = document.getElementById('lhandle2');
var lhandle2x = 1; //标识位 1为AHEAD 0为ASTERN
lhandle2.onclick = function () {
	if (lhandle2x % 2 == 0) {
		this.style.transformOrigin = '31% 31%';
		this.style.transform = 'rotate(' + 90 + 'deg)';
		document.getElementById('laheadLed').style.backgroundColor = '#00FF00';
		document.getElementById('lasternLed').style.backgroundColor = '#800000';
		document.getElementById('pswitch2').style.display = 'none';
		document.getElementById('plaheadLed').style.backgroundColor = '#00FF00';
		document.getElementById('plasternLed').style.backgroundColor = '#800000';
		document.getElementById('olaheadLed').style.backgroundColor = '#00FF00';
		document.getElementById('olasternLed').style.backgroundColor = '#800000';
		document.getElementById('glaheadLed').style.backgroundColor = '#00FF00';
		document.getElementById('glasternLed').style.backgroundColor = '#800000';
		document.getElementById('tlaheadLed').style.backgroundColor = '#00FF00';
		document.getElementById('tlasternLed').style.backgroundColor = '#800000';
		lhandle2x += 1;
	} else {
		this.style.transformOrigin = '31% 31%';
		this.style.transform = 'rotate(' + 0 + 'deg)';

		document.getElementById('laheadLed').style.backgroundColor = '#085A13';
		document.getElementById('lasternLed').style.backgroundColor = '#FF0000';
		document.getElementById('pswitch2').style.display = 'block';
		document.getElementById('plaheadLed').style.backgroundColor = '#085A13';
		document.getElementById('plasternLed').style.backgroundColor = '#FF0000';
		document.getElementById('olaheadLed').style.backgroundColor = '#085A13';
		document.getElementById('olasternLed').style.backgroundColor = '#FF0000';
		document.getElementById('glaheadLed').style.backgroundColor = '#085A13';
		document.getElementById('glasternLed').style.backgroundColor = '#FF0000';
		document.getElementById('tlaheadLed').style.backgroundColor = '#085A13';
		document.getElementById('tlasternLed').style.backgroundColor = '#FF0000';
		lhandle2x += 1;
	}

}

//锁紧手柄
var lhandle3 = document.getElementById('lhandle3');
var lhandle3x = 0; //标识位 0为LOCK 1为UNLOCK
var x = 0;
lhandle3.onclick = function () {
	lhandle3x += 1; console.log('local的')
	if (lhandle3x % 2 == 1) {
		this.style.transformOrigin = '31% 31%';
		this.style.transform = 'rotate(' + 90 + 'deg)';
		// lhandle3x += 1;
		// startMove(this, 'opacity', 0);
		console.log('lhandle3x', lhandle3x);
		wx = 1;
		yy = 1;
		console.log('wx', wx);
		startMove(document.getElementById('wheelswitch'), 'opacity', 100);
	} else {
		this.style.transformOrigin = '31% 31%';
		this.style.transform = 'rotate(' + 0 + 'deg)';
		// lhandle3x += 1;
		console.log('lhandle3x', lhandle3x);
		wx = 0;
		console.log('wx', wx);
		startMove(document.getElementById('wheelswitch'), 'opacity', 0);
	}

}
//摇柄
var lwheel1 = document.getElementById('lwheel1');
var lwheel2 = document.getElementById('lwheel2');
var lwheelx1 = 0;
var lwheelx2 = 0;
var lwheelx2x = 0; //表盘刻度变化系数
var lwheelx1x = 5; //表盘刻度变化系数

function lprintPancel1(a) {
	var lw1c = document.getElementById("lwheel1canvas");
	var lw1ctx = lw1c.getContext("2d");
	lw1ctx.clearRect(0, 0, 140, 11);
	lw1ctx.beginPath();
	lw1ctx.rect(0, 0, 28 * a, 11);
	lw1ctx.fillStyle = "red"
	lw1ctx.fill();
}
lprintPancel1(lwheelx1x);

function lprintPancel2(a) {
	var lw2c = document.getElementById("lwheel2canvas");
	var lw2ctx = lw2c.getContext("2d");
	lw2ctx.clearRect(0, 0, 190, 210);
	lw2ctx.beginPath();
	lw2ctx.rect(58, 197 - 15 * a, 22, 15 * a);
	lw2ctx.fillStyle = "red"
	lw2ctx.fill();
	lw2ctx.moveTo(59, 145);
	lw2ctx.lineTo(82, 145);
	lw2ctx.strokeStyle = "blue";
	lw2ctx.stroke();
}
lprintPancel2(lwheelx2x);

var lbuttonStart = document.getElementById('lbuttonStart');
var lbuttonStop = document.getElementById('lbuttonStop');

// var timeStart,timeEnd,time;//申明全局变量

// function getTimeNow()//获取此刻时间
// {
// 	var now=new Date();
// 	return now.getTime();
// }
// function holdDown()//鼠标按下时触发
// {
// 	timeStart=getTimeNow();//获取鼠标按下时的时间
// 	time=setInterval(function()//setInterval会每100毫秒执行一次
// 	{
// 		timeEnd=getTimeNow();//也就是每100毫秒获取一次时间
// 		if(timeEnd-timeStart>10000)//如果此时检测到的时间与第一次获取的时间差有1000毫秒
// 		{
// 			clearInterval(time);//便不再继续重复此函数 （clearInterval取消周期性执行）
// 　　　       alert("空气起动成功！！！");//并弹出代码
// 			lbuttonStart.style.backgroundColor = "grey";

// 		}
// 	},10);
// }
// function holdUp()
// {
// 	clearInterval(time);//如果按下时间不到1000毫秒便弹起，
// }
var l2dsio = 0
// lbuttonStart.onmousedown = function () {
// 	l2dsio = 1
// 	lbuttonStart.style.backgroundColor = "green";

// 	if (value16x % 2 == 1 && value3x % 2 == 1 && value122x % 2 == 1 && value116x % 2 == 1 && valueMainx % 2 == 1 && lhandle1x % 2 == 1) {
// 			airstart = 2;
// 		 // LED()
// 		 schematicX = 1;
// 	}
// 		console.log('airstart', lrmp)

// }

// lbuttonStart.onmouseup = function () {
// 	l2dsio =2
// 	lbuttonStart.style.backgroundColor = "grey";
// 	if(rmp < 15){
// 		// alert("空气起动失败！");
// 		airstart = 1;
// 		yd=0;
// 	}
// 	else{
// 		// alert("空气起动成功！");
// 		airstart = 2;
// 	}
// 	// airstart = 2;

// 	console.log('airstop', lrmpx);
// }
$('#lbuttonStart').on('mousedown', function () {
	l2dsio = 1
	lbuttonStart.style.backgroundColor = "green";

	if (value16x % 2 == 1 && value3x % 2 == 1 && value122x % 2 == 1 && value116x % 2 == 1 && valueMainx % 2 == 1 && lhandle1x % 2 == 1) {
		airstart = 2;
		// LED()
		schematicX = 1;
	}
	console.log('airstart', lrmp)
})
$('#lbuttonStart').on('mouseup', function () {
	l2dsio = 2
	lbuttonStart.style.backgroundColor = "grey";
	if (rmp < 15) {
		// alert("空气起动失败！");
		document.getElementById('startfailure').style.color = 'red'
		airstart = 1;
		yd = 0;
	}
	else {
		// alert("空气起动成功！");
		document.getElementById('startfailure').style.color = 'white'
		airstart = 2;
	}
	// airstart = 2;

	console.log('airstop', lrmpx);
})
var lsio = 0
$('#pstart').on('mousedown', function () { //二次启动(按了stop）需要将油门调为0！！！
	lsio = 1;
	startMove(this, 'opacity', 100);
	if (z == 0) {
		lrmp = 30
		lwheelx2x = 4;
		airstart = 2;
		//LED()
		schematicX = 1;
		document.getElementById('cm1Starting').style.color = '#00FF00'
		console.log('空气启动中')
	}
	if (value16x % 2 == 1 && value3x % 2 == 1 && value122x % 2 == 1 && value116x % 2 == 1 && valueMainx % 2 == 1 && lhandle1x % 2 == 1 && impactwheelx % 2 == 1) {
		airstart = 2;
		//LED()
		schematicX = 1;
		document.getElementById('cm1Starting').style.color = '#00FF00'
		console.log('空气启动中')
		// console.log('airstart', lrmp)
	}
})
$('#pstart').on('mouseup', function () {
	lsio = 2
	startMove(this, 'opacity', 0);
	document.getElementById('cm1Starting').style.color = 'white'
	if (rmp < 15) {
		// alert("空气起动失败！");
		document.getElementById('startfailure').style.color = 'red'
		document.getElementById('cseqStartFail').style.backgroundColor = 'red'
		airstart = 1;
		yd = 0;
	}
	else {
		if (z == 0) {
			airstart = 1;
			yd = 0;
		}
		// alert("空气起动成功！");
		// point5 += 20
		document.getElementById('startfailure').style.color = 'white'
		document.getElementById('cseqStartFail').style.backgroundColor = '#c3c3c3'

		airstart = 2;
	}
	console.log('airstart', airstart); console.log('ydx', ydx);
	// console.log('airsredtop', lrmpx);
})

$('#pstop').on('mousedown', function () {
	yd = 0;
	ydx = 0;
	rmp = 0;
	rmpx = 0;
	brmp = 0;
	trmp = 0;
	lrmp = 0;
	airstart = 0

	z = 0;
	$('#wheelstart').css('display', 'none');
	$('#wheeloil1').css('display', 'none');
	$('#wheeloil1.5').css('display', 'none');
	$('#wheeloil2').css('display', 'none');
	$('#wheeloil3').css('display', 'none');
	$('#wheeloil4').css('display', 'none');

	$('#panel_s').css('display', 'none');
	$('#panel').css('display', 'block');
	$('#panel_1').css('display', 'none');
	$('#panel_2').css('display', 'none');
	$('#panel_3').css('display', 'none');
	$('#panel_4').css('display', 'none');
	$('#panel_5').css('display', 'none');
})
lbuttonStop.onmousedown = function () {
	lbuttonStop.style.backgroundColor = "#B40404";
	yd = 0;
	ydx = 0;
	rmp = 0;
	rmpx = 0;
	brmp = 0;
	trmp = 0;
	lrmp = 0;
	airstart = 0

	z = 0;
	$('#wheelstart').css('display', 'none');
	$('#wheeloil1').css('display', 'none');
	$('#wheeloil1.5').css('display', 'none');
	$('#wheeloil2').css('display', 'none');
	$('#wheeloil3').css('display', 'none');
	$('#wheeloil4').css('display', 'none');

	$('#panel_s').css('display', 'none');
	$('#panel').css('display', 'block');
	$('#panel_1').css('display', 'none');
	$('#panel_2').css('display', 'none');
	$('#panel_3').css('display', 'none');
	$('#panel_4').css('display', 'none');
	$('#panel_5').css('display', 'none');
}
lbuttonStop.onmouseup = function () {
	lbuttonStop.style.backgroundColor = "grey";
}

var lwheel1Left = document.getElementById('lwheel1Left');
lwheel1Left.onmousemove = function () {
	this.style.cursor = "url('img/cursorLeft.ico'), auto";
}
var lwheel1Right = document.getElementById('lwheel1Right');
lwheel1Right.onmousemove = function () {
	this.style.cursor = "url('img/cursorRight.ico'), auto";
}
lwheel1Left.onclick = function () {
	lwheelx1 += 45;
	lwheel1.style.transform = 'rotate(' + lwheelx1 + 'deg)';
	lwheelx1x -= 1;
	if (lwheelx1x <= 0) {
		lwheelx1x = 0;
	}
	if (lwheelx1x <= 2) {
		document.getElementById('lhandwheelDis').style.border = '1px solid red'
		document.getElementById('lhandwheelCon').style.border = ''
		startMove(document.getElementById('impactwheel'), 'opacity', 100);
		impactwheelx = 1;
		console.log('imx', impactwheelx);
	} else {
		document.getElementById('lhandwheelDis').style.border = ''
		document.getElementById('lhandwheelCon').style.border = '1px solid red'
		startMove(document.getElementById('impactwheel'), 'opacity', 0);
		impactwheelx = 0;
	}

	lprintPancel1(lwheelx1x);
	console.log('lwheelx1x', lwheelx1x)
}
lwheel1Right.onclick = function () {
	lwheelx1 -= 45;
	lwheel1.style.transform = 'rotate(' + lwheelx1 + 'deg)';
	lwheelx1x += 1;
	if (lwheelx1x >= 5) {
		lwheelx1x = 5;
	}
	if (lwheelx1x <= 2) {
		document.getElementById('lhandwheelDis').style.border = '1px solid red'
		// document.getElementById('lhandwheelDis').style.color='yellow'
		document.getElementById('lhandwheelCon').style.border = ''
		startMove(document.getElementById('impactwheel'), 'opacity', 100);
		impactwheelx = 1;
	} else {
		document.getElementById('lhandwheelDis').style.border = ''
		document.getElementById('lhandwheelCon').style.border = '1px solid red'
		startMove(document.getElementById('impactwheel'), 'opacity', 0);
		impactwheelx = 0;
		console.log('imx', impactwheelx);
	}
	lprintPancel1(lwheelx1x);
	console.log('lwheelx1x', lwheelx1x)
}

var lwheel2Left = document.getElementById('lwheel2Left');
lwheel2Left.onmousemove = function () {
	this.style.cursor = "url('img/cursorLeft.ico'), auto";
}
var lwheel2Right = document.getElementById('lwheel2Right');
lwheel2Right.onmousemove = function () {
	this.style.cursor = "url('img/cursorRight.ico'), auto";
}
lwheel2Right.onclick = function () {
	if (lhandle3x % 2 == 1) {
		lwheelx2 += 45;
		lwheel2.style.transform = 'rotate(' + lwheelx2 + 'deg)';
		lwheelx2x += 1;
		if (lwheelx2x >= 11) {
			lwheelx2x = 11;
		}
		if (lwheelx2x < 4) {
			z = 0;
			$('#wheelstart').css('display', 'none');
			$('#wheeloil1').css('display', 'none');
			$('#wheeloil1_5').css('display', 'none');
			$('#wheeloil2').css('display', 'none');
			$('#wheeloil3').css('display', 'none');
			$('#wheeloil4').css('display', 'none');
		}
		if (lwheelx2x == 4) {
			z = 1;
			$('#wheelstart').css('display', 'block');
			$('#wheeloil1').css('display', 'none');
			$('#wheeloil1_5').css('display', 'none');
			$('#wheeloil2').css('display', 'none');
			$('#wheeloil3').css('display', 'none');
			$('#wheeloil4').css('display', 'none');

			$('#panel_s').css('display', 'block');
			$('#panel').css('display', 'none');
			$('#panel_1').css('display', 'none');
			$('#panel_2').css('display', 'none');
			$('#panel_3').css('display', 'none');
			$('#panel_4').css('display', 'none');
			$('#panel_5').css('display', 'none');
		}
		if (lwheelx2x == 5) {
			z = 2;
			$('#wheelstart').css('display', 'none');
			$('#wheeloil1').css('display', 'block');
			$('#wheeloil1_5').css('display', 'none');
			$('#wheeloil2').css('display', 'none');
			$('#wheeloil3').css('display', 'none');
			$('#wheeloil4').css('display', 'none');

			$('#panel_s').css('display', 'none');
			$('#panel').css('display', 'none');
			$('#panel_1').css('display', 'block');
			$('#panel_2').css('display', 'none');
			$('#panel_3').css('display', 'none');
			$('#panel_4').css('display', 'none');
			$('#panel_5').css('display', 'none');
		}
		if (lwheelx2x == 7) {
			z = 3;
			$('#wheelstart').css('display', 'none');
			$('#wheeloil1').css('display', 'none');
			$('#wheeloil1_5').css('display', 'block');
			$('#wheeloil2').css('display', 'none');
			$('#wheeloil3').css('display', 'none');
			$('#wheeloil4').css('display', 'none');

			$('#panel_s').css('display', 'none');
			$('#panel').css('display', 'none');
			$('#panel_1').css('display', 'none');
			$('#panel_2').css('display', 'block');
			$('#panel_3').css('display', 'none');
			$('#panel_4').css('display', 'none');
			$('#panel_5').css('display', 'none');
		}
		if (lwheelx2x == 8) {
			z = 4;
			$('#wheelstart').css('display', 'none');
			$('#wheeloil1').css('display', 'none');
			$('#wheeloil1_5').css('display', 'none');
			$('#wheeloil2').css('display', 'block');
			$('#wheeloil3').css('display', 'none');
			$('#wheeloil4').css('display', 'none');

			$('#panel_s').css('display', 'none');
			$('#panel').css('display', 'none');
			$('#panel_1').css('display', 'none');
			$('#panel_2').css('display', 'none');
			$('#panel_3').css('display', 'block');
			$('#panel_4').css('display', 'none');
			$('#panel_5').css('display', 'none');
		}
		if (lwheelx2x == 9) {
			z = 5;
			$('#wheelstart').css('display', 'none');
			$('#wheeloil1').css('display', 'none');
			$('#wheeloil1_5').css('display', 'none');
			$('#wheeloil2').css('display', 'none');
			$('#wheeloil3').css('display', 'block');
			$('#wheeloil4').css('display', 'none');

			$('#panel_s').css('display', 'none');
			$('#panel').css('display', 'none');
			$('#panel_1').css('display', 'none');
			$('#panel_2').css('display', 'none');
			$('#panel_3').css('display', 'none');
			$('#panel_4').css('display', 'block');
			$('#panel_5').css('display', 'none');
		}
		if (lwheelx2x == 11) {
			z = 6;
			$('#wheelstart').css('display', 'none');
			$('#wheeloil1').css('display', 'none');
			$('#wheeloil1_5').css('display', 'none');
			$('#wheeloil2').css('display', 'none');
			$('#wheeloil3').css('display', 'none');
			$('#wheeloil4').css('display', 'block');

			$('#panel_s').css('display', 'none');
			$('#panel').css('display', 'none');
			$('#panel_1').css('display', 'none');
			$('#panel_2').css('display', 'none');
			$('#panel_3').css('display', 'none');
			$('#panel_4').css('display', 'none');
			$('#panel_5').css('display', 'block');


		}
		lprintPancel2(lwheelx2x);
		lrmp += 7.5;
		lrmp = parseInt(lrmp);
		if (lrmp >= 110) {
			lrmp = 110;
		}
	}
}
lwheel2Left.onclick = function () {
	if (lhandle3x % 2 == 1) {
		lwheelx2 -= 45;
		lwheel2.style.transform = 'rotate(' + lwheelx2 + 'deg)';
		lwheelx2x -= 1;
		if (lwheelx2x <= 0) {
			lwheelx2x = 0;
		}
		if (lwheelx2x < 4) {
			z = 0;
			$('#wheelstart').css('display', 'none');
			$('#wheeloil1').css('display', 'none');
			$('#wheeloil1_5').css('display', 'none');
			$('#wheeloil2').css('display', 'none');
			$('#wheeloil3').css('display', 'none');
			$('#wheeloil4').css('display', 'none');
		}
		if (lwheelx2x == 4) {
			z = 1;
			$('#wheelstart').css('display', 'block');
			$('#wheeloil1').css('display', 'none');
			$('#wheeloil1_5').css('display', 'none');
			$('#wheeloil2').css('display', 'none');
			$('#wheeloil3').css('display', 'none');
			$('#wheeloil4').css('display', 'none');
		}
		if (lwheelx2x == 5) {
			z = 2;
			$('#wheelstart').css('display', 'none');
			$('#wheeloil1').css('display', 'block');
			$('#wheeloil1_5').css('display', 'none');
			$('#wheeloil2').css('display', 'none');
			$('#wheeloil3').css('display', 'none');
			$('#wheeloil4').css('display', 'none');
		}
		if (lwheelx2x == 7) {
			z = 3;
			$('#wheelstart').css('display', 'none');
			$('#wheeloil1').css('display', 'none');
			$('#wheeloil1_5').css('display', 'block');
			$('#wheeloil2').css('display', 'none');
			$('#wheeloil3').css('display', 'none');
			$('#wheeloil4').css('display', 'none');
		}
		if (lwheelx2x == 8) {
			z = 4;
			$('#wheelstart').css('display', 'none');
			$('#wheeloil1').css('display', 'none');
			$('#wheeloil1_5').css('display', 'none');
			$('#wheeloil2').css('display', 'block');
			$('#wheeloil3').css('display', 'none');
			$('#wheeloil4').css('display', 'none');
		}
		if (lwheelx2x == 9) {
			z = 5;
			$('#wheelstart').css('display', 'none');
			$('#wheeloil1').css('display', 'none');
			$('#wheeloil1_5').css('display', 'none');
			$('#wheeloil2').css('display', 'none');
			$('#wheeloil3').css('display', 'block');
			$('#wheeloil4').css('display', 'none');
		}
		if (lwheelx2x == 11) {
			z = 6;
			$('#wheelstart').css('display', 'none');
			$('#wheeloil1').css('display', 'none');
			$('#wheeloil1_5').css('display', 'none');
			$('#wheeloil2').css('display', 'none');
			$('#wheeloil3').css('display', 'none');
			$('#wheeloil4').css('display', 'block');
		}
		lprintPancel2(lwheelx2x);
		lrmp -= 7.5;
		lrmp = parseInt(lrmp);
		if (lrmp <= 0) {
			lrmp = 0;
		}
	}
}

var operableLed = document.getElementsByClassName('operableLed');
var mouseOnLed = function () {
	for (var i = 0; i < operableLed.length; i++) {
		operableLed[i].onmouseover = function () {
			this.style.opacity = 0.8;
		}
		operableLed[i].onmouseout = function () {
			this.style.opacity = 1;
		}
	}
}
mouseOnLed();

var lspeeds = document.getElementById('lbox2box3');
var lspeedsAll = lspeeds.getElementsByTagName('div');
var lspeedsLed = lspeeds.getElementsByClassName('lspeedButtonLed');
// var lclearSpeedLed = function () {
// 	for (var i = 0; i < lspeedsAll.length; i++) {
// 		lspeedsAll[i].style.borderColor = 'white';
// 	}
// 	for (var i1 = 0; i1 < lspeedsLed.length; i1++) {
// 		lspeedsLed[i1].style.backgroundColor = 'white';
// 	}
// }
var plspeeds = document.getElementById('plbox2box3');
var plspeedsAll = plspeeds.getElementsByTagName('div');
var plspeedsLed = plspeeds.getElementsByClassName('plspeedButtonLed');
// var plclearSpeedLed = function () {
// 	for (var i = 0; i < plspeedsAll.length; i++) {
// 		plspeedsAll[i].style.borderColor = 'white';
// 	}
// 	for (var i1 = 0; i1 < plspeedsLed.length; i1++) {
// 		plspeedsLed[i1].style.backgroundColor = 'white';
// 	}
// }
function plclearSpeedLed(briled, locled) {
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
		plspeedsAll[i].style.borderColor = 'white';
	}
	for (var i1 = 0; i1 < lspeedsLed.length; i1++) {
		plspeedsLed[i1].style.backgroundColor = 'white';
	}
	plspeedsLed[briled].style.backgroundColor = 'red';
	if (lhandle1x % 2 == 1) {//机旁控制
		//驾驶台车钟显示集控室的当前车令
		btled1[locled].style.background = 'red';
		btled2[locled].style.background = 'red';
	}
}

// ZM复制车钟的点击事件
document.getElementById('plstopled').style.backgroundColor = '#FFC200';

document.getElementById('lnavFull').onclick = function () {
	locled = 0;
	lclearSpeedLed(briled, locled);
	plclearSpeedLed(briled, locled);
	document.getElementById('plnavFullled').style.backgroundColor = '#FFC200';
	document.getElementById('plnavFull').style.borderColor = '#FFC200';
	document.getElementById('lnavFullled').style.backgroundColor = '#FFC200';
}
document.getElementById('plnavFull').onclick = function () {
	plclearSpeedLed();
	locled = 0;
	lclearSpeedLed(briled, locled);
	plclearSpeedLed(briled, locled);
	this.style.borderColor = '#FFC200';
	document.getElementById('lnavFullled').style.backgroundColor = '#FFC200';
	document.getElementById('lnavFull').style.borderColor = '#FFC200';
	document.getElementById('plnavFullled').style.backgroundColor = '#FFC200';
}
document.getElementById('lfull').onclick = function () {
	locled = 1;
	lclearSpeedLed(briled, locled);
	plclearSpeedLed(briled, locled);
	this.style.borderColor = '#FFC200';
	document.getElementById('plfull').style.borderColor = '#FFC200';
	document.getElementById('plfullled').style.backgroundColor = '#FFC200';

	document.getElementById('lfullled').style.backgroundColor = '#FFC200';
}
document.getElementById('plfull').onclick = function () {
	plclearSpeedLed(briled, locled);
	locled = 1;
	lclearSpeedLed(briled, locled);
	this.style.borderColor = '#FFC200';
	document.getElementById('plfullled').style.backgroundColor = '#FFC200';
	document.getElementById('lfull').style.borderColor = '#FFC200';
	document.getElementById('lfullled').style.backgroundColor = '#FFC200';
}
document.getElementById('lhalf').onclick = function () {
	locled = 2;
	plclearSpeedLed(briled, locled);
	lclearSpeedLed(briled, locled);
	this.style.borderColor = '#FFC200';
	document.getElementById('plhalf').style.borderColor = '#FFC200';
	document.getElementById('plhalfled').style.backgroundColor = '#FFC200';
	document.getElementById('lhalfled').style.backgroundColor = '#FFC200';
}
document.getElementById('plhalf').onclick = function () {
	locled = 2;
	plclearSpeedLed(briled, locled);
	lclearSpeedLed(briled, locled);
	this.style.borderColor = '#FFC200';
	document.getElementById('lhalfled').style.backgroundColor = '#FFC200';
	document.getElementById('lhalf').style.borderColor = '#FFC200';
	document.getElementById('plhalfled').style.backgroundColor = '#FFC200';
}
document.getElementById('lslow').onclick = function () {
	locled = 3;
	lclearSpeedLed(briled, locled);
	plclearSpeedLed();
	this.style.borderColor = '#FFC200';
	document.getElementById('plslow').style.borderColor = '#FFC200';
	document.getElementById('plslowled').style.backgroundColor = '#FFC200';
	document.getElementById('lslowled').style.backgroundColor = '#FFC200';
}
document.getElementById('plslow').onclick = function () {
	plclearSpeedLed();
	locled = 3;
	lclearSpeedLed(briled, locled);
	this.style.borderColor = '#FFC200';
	document.getElementById('plslowled').style.backgroundColor = '#FFC200';
	document.getElementById('lslow').style.borderColor = '#FFC200';
	document.getElementById('lslowled').style.backgroundColor = '#FFC200';
}
document.getElementById('ldeSlow').onclick = function () {
	locled = 4;
	lclearSpeedLed(briled, locled);
	plclearSpeedLed();
	this.style.borderColor = '#FFC200';
	document.getElementById('pldeSlowled').style.backgroundColor = '#FFC200';
	document.getElementById('pldeSlow').style.borderColor = '#FFC200';
	document.getElementById('ldeSlowled').style.backgroundColor = '#FFC200';
}
document.getElementById('pldeSlow').onclick = function () {
	plclearSpeedLed();
	locled = 4;
	lclearSpeedLed(briled, locled);
	this.style.borderColor = '#FFC200';
	document.getElementById('ldeSlowled').style.backgroundColor = '#FFC200';
	document.getElementById('ldeSlow').style.borderColor = '#FFC200';
	document.getElementById('pldeSlowled').style.backgroundColor = '#FFC200';
}
document.getElementById('lstop').onclick = function () {
	locled = 5;
	lclearSpeedLed(briled, locled);
	plclearSpeedLed();
	this.style.borderColor = '#FFC200';
	document.getElementById('plstop').style.borderColor = '#FFC200';
	document.getElementById('plstopled').style.backgroundColor = '#FFC200';
	document.getElementById('lstopled').style.backgroundColor = '#FFC200';
}
document.getElementById('plstop').onclick = function () {
	plclearSpeedLed();
	locled = 5;
	lclearSpeedLed(briled, locled);
	this.style.borderColor = '#FFC200';
	document.getElementById('lstop').style.borderColor = '#FFC200';
	document.getElementById('lstopled').style.backgroundColor = '#FFC200';
	document.getElementById('plstopled').style.backgroundColor = '#FFC200';
}
document.getElementById('ldeSlow1').onclick = function () {
	locled = 6;
	lclearSpeedLed(briled, locled);
	plclearSpeedLed();
	this.style.borderColor = '#FFC200';
	document.getElementById('pldeSlow1').style.borderColor = '#FFC200';
	document.getElementById('pldeSlow1led').style.backgroundColor = '#FFC200';
	document.getElementById('ldeSlow1led').style.backgroundColor = '#FFC200';
}
document.getElementById('pldeSlow1').onclick = function () {
	plclearSpeedLed();
	locled = 6;
	lclearSpeedLed(briled, locled);
	this.style.borderColor = '#FFC200';
	document.getElementById('ldeSlow1').style.borderColor = '#FFC200';
	document.getElementById('ldeSlow1led').style.backgroundColor = '#FFC200';
	document.getElementById('pldeSlow1led').style.backgroundColor = '#FFC200';
}
document.getElementById('lslow1').onclick = function () {
	locled = 7;
	lclearSpeedLed(briled, locled);
	plclearSpeedLed();
	this.style.borderColor = '#FFC200';
	document.getElementById('plslow1').style.borderColor = '#FFC200';
	document.getElementById('plslow1led').style.backgroundColor = '#FFC200';
	document.getElementById('lslow1led').style.backgroundColor = '#FFC200';
}
document.getElementById('plslow1').onclick = function () {
	plclearSpeedLed();
	locled = 7;
	lclearSpeedLed(briled, locled);
	this.style.borderColor = '#FFC200';
	document.getElementById('lslow1').style.borderColor = '#FFC200';
	document.getElementById('lslow1led').style.backgroundColor = '#FFC200';
	document.getElementById('plslow1led').style.backgroundColor = '#FFC200';
}
document.getElementById('lhalf1').onclick = function () {
	locled = 8;
	lclearSpeedLed(briled, locled);
	plclearSpeedLed();
	this.style.borderColor = '#FFC200';
	document.getElementById('plhalf1').style.borderColor = '#FFC200';
	document.getElementById('plhalf1led').style.backgroundColor = '#FFC200';
	document.getElementById('lhalf1led').style.backgroundColor = '#FFC200';
}
document.getElementById('plhalf1').onclick = function () {
	plclearSpeedLed();
	locled = 8;
	lclearSpeedLed(briled, locled);
	this.style.borderColor = '#FFC200';
	document.getElementById('lhalf1').style.borderColor = '#FFC200';
	document.getElementById('lhalf1led').style.backgroundColor = '#FFC200';
	document.getElementById('plhalf1led').style.backgroundColor = '#FFC200';
}
document.getElementById('lfull1').onclick = function () {
	locled = 9;
	lclearSpeedLed(briled, locled);
	plclearSpeedLed();
	this.style.borderColor = '#FFC200';
	document.getElementById('plfull1').style.borderColor = '#FFC200';
	document.getElementById('plfull1led').style.backgroundColor = '#FFC200';
	document.getElementById('lfull1led').style.backgroundColor = '#FFC200';
}
document.getElementById('plfull1').onclick = function () {
	plclearSpeedLed();
	locled = 9;
	lclearSpeedLed(briled, locled);
	this.style.borderColor = '#FFC200';
	document.getElementById('lfull1').style.borderColor = '#FFC200';
	document.getElementById('lfull1led').style.backgroundColor = '#FFC200';
	document.getElementById('plfull1led').style.backgroundColor = '#FFC200';
}
document.getElementById('lemAst').onclick = function () {
	locled = 10;
	lclearSpeedLed(briled, locled);
	plclearSpeedLed();
	this.style.borderColor = '#FFC200';
	document.getElementById('plemAst').style.borderColor = '#FFC200';
	document.getElementById('plemAstled').style.backgroundColor = '#FFC200';
	document.getElementById('lemAstled').style.backgroundColor = '#FFC200';
}
document.getElementById('plemAst').onclick = function () {
	plclearSpeedLed();
	locled = 10;
	lclearSpeedLed(briled, locled);
	this.style.borderColor = '#FFC200';
	document.getElementById('lemAst').style.borderColor = '#FFC200';
	document.getElementById('lemAstled').style.backgroundColor = '#FFC200';
	document.getElementById('plemAstled').style.backgroundColor = '#FFC200';
}
/*紧急停车*/
var lemergencyStop = document.getElementById('lemergencyStop'); //紧急停车
var lcancelSHD = document.getElementById('lbuttonCancelShutDown'); //取消紧急停车按钮
var lcancelSHDx = 0;
lemergencyStop.onmouseover = function () {
	this.style.backgroundColor = '#DD001B'
}
lemergencyStop.onmouseleave = function () {
	this.style.backgroundColor = '#7f0000'
}
lemergencyStop.onclick = function () {
	var a = 1;
	clearInterval(cancel)
	var cancel = setInterval(() => { //取消紧急停车按钮闪烁
		if (a % 2 == 1) {
			lcancelSHD.style.borderColor = "red"
			a++
		} else {
			lcancelSHD.style.borderColor = "white"
			a++
		}
		if (lcancelSHDx == 1) {
			clearInterval(cancel)
			lcancelSHD.style.borderColor = "white"
		}
	}, 300);

	setTimeout(() => {
		clearInterval(cancel)
		lcancelSHD.style.borderColor = "white"
		if (lcancelSHDx == 0) {
			lshutdownLed.style.backgroundColor = ' #FF0000'
			yd = 0;
			ydx = 0;
			rmp = 0;
			rmpx = 0;
			brmp = 0;
			trmp = 0;
			lrmp = 0;
		}
	}, 5000);
}
lcancelSHD.onclick = function () {
	lcancelSHDx = 1;
	setTimeout(() => {
		lcancelSHDx = 0;
	}, 7000);
}
// ZM紧急停车 待改进

var plemergencyStop = document.getElementById('plemergencyStop'); //紧急停车
var plcancelSHD = document.getElementById('plbuttonCancelShutDown'); //取消紧急停车按钮
var plcancelSHDx = 0;
plemergencyStop.onmouseover = function () {
	this.style.backgroundColor = '#DD001B'
}
plemergencyStop.onmouseleave = function () {
	this.style.backgroundColor = '#7f0000'
}
plemergencyStop.onclick = function () {
	var a = 1;
	clearInterval(cancel)
	var cancel = setInterval(() => { //取消紧急停车按钮闪烁
		if (a % 2 == 1) {
			plcancelSHD.style.borderColor = "red"
			a++
		} else {
			plcancelSHD.style.borderColor = "white"
			a++
		}
		if (plcancelSHDx == 1) {
			clearInterval(cancel)
			plcancelSHD.style.borderColor = "white"
		}
	}, 300);

	setTimeout(() => {
		clearInterval(cancel)
		plcancelSHD.style.borderColor = "white"
		if (plcancelSHDx == 0) {
			yd = 0;
			ydx = 0;
			rmp = 0;
			rmpx = 0;
			brmp = 0;
			trmp = 0;
			lrmp = 0;
		}
	}, 5000);
}
plcancelSHD.onclick = function () {
	plcancelSHDx = 1;
	setTimeout(() => {
		plcancelSHDx = 0;
	}, 7000);
}







// ZM panel页面的start和stop 具体给油还没写
// var plbuttonStart = document.getElementById('pstart');
// var plbuttonStop = document.getElementById('pstop');
// plbuttonStart.onmousedown = function () {
// 	// lbuttonStart.style.backgroundColor = "green";
// 	// lbuttonStop.style.backgroundColor = "grey";
// 	 if(value16x % 2 == 1 && value3x % 2 == 1 && value122x % 2 == 1 && value116x % 2 == 1 && valueMainx%2==1 && lwheelx1x>=3 && lhandle1x % 2 == 1){
// 		LED(); //车钟led初始化
// 		schematicX = 1;
// 		lrmpx=lrmp;
// 		lrmp=30;
// 		console.log('ok',lrmp);
// 	 }
// }
// plbuttonStart.onmouseup = function () {
// 	// lbuttonStart.style.backgroundColor = "grey";
// 	lrmp=lrmpx;
// 	console.log('lrmp',lrmpx);
// }

// plbuttonStop.onclick = function () {
// 	// lbuttonStop.style.backgroundColor = "#B40404";
// }

// var pimpactwheel = document.getElementById('impactwheel');
// // lwheel1Left.onmousemove = function () {
// // 	this.style.cursor = "url('img/cursorLeft.ico'), auto";
// // }
// // var lwheel1Right = document.getElementById('lwheel1Right');
// // lwheel1Right.onmousemove = function () {
// // 	this.style.cursor = "url('img/cursorRight.ico'), auto";
// // }
// var imx=0;

// pimpactwheel.onclick = function () {
// 		imx+=1;console.log('imx',imx);
// 		if(imx%2==1){
// 		document.getElementById('lhandwheelDis').style.border = ''
// 		document.getElementById('lhandwheelCon').style.border = '1px solid red'

// 		lwheelx1x=5;
// 		var lw1c = document.getElementById("lwheel1canvas");
// 		var lw1ctx = lw1c.getContext("2d");
// 		lw1ctx.clearRect(0, 0, 140, 11);
// 		lw1ctx.beginPath();
// 		lw1ctx.rect(0, 0, 140, 11);
// 		lw1ctx.fillStyle = "red"
// 		lw1ctx.fill();
// }
// if(imx%2==0){
// 	document.getElementById('lhandwheelDis').style.border = '1px solid red'
// 		document.getElementById('lhandwheelCon').style.border = ''

// 		lwheelx1x=0;
// 		var lw1c = document.getElementById("lwheel1canvas");
// 		var lw1ctx = lw1c.getContext("2d");
// 		lw1ctx.clearRect(0, 0, 140, 11);
// 		lw1ctx.beginPath();
// 		lw1ctx.rect(0, 0, 0, 11);
// 		lw1ctx.fillStyle = "red"
// 		lw1ctx.fill();
// }

// }