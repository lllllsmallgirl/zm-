var plbuttonStart = document.getElementById('pstart');
var plbuttonStop = document.getElementById('pstop');
plbuttonStart.onmousedown = function () {
	// lbuttonStart.style.backgroundColor = "green";
	// lbuttonStop.style.backgroundColor = "grey";
	 if(value16x % 2 == 1 && value3x % 2 == 1 && value122x % 2 == 1 && value116x % 2 == 1 && valueMainx%2==1 && lwheelx1x>=3 && lhandle1x % 2 == 1){
		LED(); //车钟led初始化
		schematicX = 1;
		lrmpx=lrmp;
		lrmp=30;
		console.log('ok',lrmp);
	 }	
}
plbuttonStart.onmouseup = function () {
	// lbuttonStart.style.backgroundColor = "grey";
	lrmp=lrmpx;
	console.log('lrmp',lrmpx);
}

plbuttonStop.onclick = function () {
	// lbuttonStop.style.backgroundColor = "#B40404";
}

var pimpactwheel = document.getElementById('impactwheel');
// lwheel1Left.onmousemove = function () {
// 	this.style.cursor = "url('img/cursorLeft.ico'), auto";
// }
// var lwheel1Right = document.getElementById('lwheel1Right');
// lwheel1Right.onmousemove = function () {
// 	this.style.cursor = "url('img/cursorRight.ico'), auto";
// }
pimpactwheel.onclick = function () {

		document.getElementById('lhandwheelDis').style.border = ''
		document.getElementById('lhandwheelCon').style.border = '1px solid red'
	
}
lwheel1Left.onclick = function () {
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
	} else {
		document.getElementById('lhandwheelDis').style.border = ''
		document.getElementById('lhandwheelCon').style.border = '1px solid red'
	}
	lprintPancel1(lwheelx1x);
	console.log('lwheelx1x',lwheelx1x)
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
	if (lhandle3x%2== 1) {
		lwheelx2 += 45;
		lwheel2.style.transform = 'rotate(' + lwheelx2 + 'deg)';
		lwheelx2x += 1;
		if (lwheelx2x >= 11) {
			lwheelx2x = 11;
		}
		lprintPancel2(lwheelx2x);
		lrmp += 10;
		if (lrmp >= 110) {
			lrmp = 110;
		}
	}
}
lwheel2Left.onclick = function () {
	if (lhandle3x%2== 1) {
		lwheelx2 -= 45;
		lwheel2.style.transform = 'rotate(' + lwheelx2 + 'deg)';
		lwheelx2x -= 1;
		if (lwheelx2x <= 0) {
			lwheelx2x = 0;
		}
		lprintPancel2(lwheelx2x);
		lrmp -= 10;
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
var lclearSpeedLed = function () {
	for (var i = 0; i < lspeedsAll.length; i++) {
		lspeedsAll[i].style.borderColor = 'white';
	}
	for (var i1 = 0; i1 < lspeedsLed.length; i1++) {
		lspeedsLed[i1].style.backgroundColor = 'white';
	}
}
document.getElementById('lnavFull').onclick = function () {
	lclearSpeedLed();
	this.style.borderColor = '#FFC200';
	document.getElementById('lnavFullled').style.backgroundColor = '#FFC200';
}
document.getElementById('lfull').onclick = function () {
	lclearSpeedLed();
	this.style.borderColor = '#FFC200';
	document.getElementById('lfullled').style.backgroundColor = '#FFC200';
}
document.getElementById('lhalf').onclick = function () {
	lclearSpeedLed();
	this.style.borderColor = '#FFC200';
	document.getElementById('lhalfled').style.backgroundColor = '#FFC200';
}
document.getElementById('lslow').onclick = function () {
	lclearSpeedLed();
	this.style.borderColor = '#FFC200';
	document.getElementById('lslowled').style.backgroundColor = '#FFC200';
}
document.getElementById('ldeSlow').onclick = function () {
	lclearSpeedLed();
	this.style.borderColor = '#FFC200';
	document.getElementById('ldeSlowled').style.backgroundColor = '#FFC200';
}
document.getElementById('lstop').onclick = function () {
	lclearSpeedLed();
	this.style.borderColor = '#FFC200';
	document.getElementById('lstopled').style.backgroundColor = '#FFC200';
}
document.getElementById('ldeSlow1').onclick = function () {
	lclearSpeedLed();
	this.style.borderColor = '#FFC200';
	document.getElementById('ldeSlow1led').style.backgroundColor = '#FFC200';
}
document.getElementById('lslow1').onclick = function () {
	lclearSpeedLed();
	this.style.borderColor = '#FFC200';
	document.getElementById('lslow1led').style.backgroundColor = '#FFC200';
}
document.getElementById('lhalf1').onclick = function () {
	lclearSpeedLed();
	this.style.borderColor = '#FFC200';
	document.getElementById('lhalf1led').style.backgroundColor = '#FFC200';
}
document.getElementById('lfull1').onclick = function () {
	lclearSpeedLed();
	this.style.borderColor = '#FFC200';
	document.getElementById('lfull1led').style.backgroundColor = '#FFC200';
}
document.getElementById('lemAst').onclick = function () {
	lclearSpeedLed();
	this.style.borderColor = '#FFC200';
	document.getElementById('lemAstled').style.backgroundColor = '#FFC200';
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