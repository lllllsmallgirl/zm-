var pic10 = new Image();
pic10.src = "img/01.png";
var pic00 = new Image();
pic00.src = "img/00.png";
var pic20 = new Image();
pic20.src = "img/02.png"; //起动后，方向阀门有气
var picMap = new Image();
picMap.src = "img/pictureMap.jpeg";
var picxx1 = new Image();
picxx1.src = "img/充气后1.png";
var picxx2 = new Image();
picxx2.src = "img/充气后2.png";
var picblock2 = new Image();
picblock2.src = "img/unblocked.png";

var sdc = document.getElementById('sdc');
var sdctx = sdc.getContext("2d");

var values = document.getElementById('values');
var value16 = document.getElementById('value16'); //阀门16
var value16txt = document.getElementById('value16txt'); //阀门16介绍框
var value16x = 0; //阀门16的计数器，用于判断显示哪张底图
var value16confirmBox = document.getElementById('value16confirmBox')
var valve16ComfirmTxt = document.getElementById('valve16ComfirmTxt')
var valve16Comfirm = document.getElementById('valve16Comfirm')
var valve16Cancel = document.getElementById('valve16Cancel')
var schematicDiagramPicture = document.getElementById("schematicDiagramPicture");
value16.onclick = function () {
	if (value16x % 2 == 1) {
		value16confirmBox.style.display = 'block'
		valve16ComfirmTxt.innerHTML = "是否关闭空气控制阀"
	} else {
		value16confirmBox.style.display = 'block'
		valve16ComfirmTxt.innerHTML = "是否起动空气控制阀"
	}
}
valve16Comfirm.onclick = function () {
	value16x += 1;

	value16confirmBox.style.display = 'none'
}
valve16Cancel.onclick = function () {
	value16confirmBox.style.display = 'none'
}


let schematicX = 0;//0代表初始状态，未完成；1代表起动逻辑完成但是没有起动；2代表空气起动状态；

function valueCheck() {
	if (value16x % 2 == 1) {
		value16txt.innerHTML = "点击关闭空气控制阀";
		schematicDiagramPicture.src = "img/01.png";
	} else {
		schematicDiagramPicture.src = "img/00.png";
		value16txt.innerHTML = "点击起动空气控制阀";
	}
	// sdc2tx.drawImage(picblock2,0,0,91,51,904,68,92,46)
	if (valueMainx % 2 == 1) {
		valueMaintxt.innerHTML = "点击关闭主起动阀"
		sdc2tx.drawImage(picblock2, 0, 0, 91, 51, 904, 68, 92, 46)
	} else {
		valueMaintxt.innerHTML = "点击打开主起动阀"
		sdc2tx.clearRect(904, 68, 92, 46)
	}

	if (value122x % 2 == 1) {
		value122txt.innerHTML = "点击关闭安全阀";
		sdc2tx.drawImage(picMap, 615, 106, 14, 38, 970, 23, 19, 45);
		sdc2tx.drawImage(picMap, 655, 204, 40, 1, 663, 48, 309, 2); //紫线
		sdc2tx.drawImage(picMap, 655, 204, 40, 1, 662, 48, 2, 99); //紫线
		sdc2tx.drawImage(picMap, 655, 204, 40, 1, 578, 147, 13, 2); //紫线
		sdc2tx.drawImage(picMap, 655, 204, 40, 1, 658, 146, 5, 2); //紫线
		sdc2tx.drawImage(picMap, 655, 204, 40, 1, 862, 33, 7, 2); //紫线
		sdc2tx.drawImage(picMap, 655, 204, 40, 1, 884, 33, 7, 2); //紫线
		sdc2tx.drawImage(picMap, 655, 204, 40, 1, 891, 33, 2, 16); //紫线
		sdc2tx.drawImage(picMap, 655, 204, 40, 1, 807, 39, 3, 13); //紫线
		sdc2tx.drawImage(picMap, 650, 198, 53, 29, 591, 131, 67, 33); //125紫色
		sdc2tx.drawImage(picMap, 514, 336, 14, 14, 845, 25, 17, 16); //121方框黄
		sdc2tx.drawImage(picMap, 514, 351, 14, 14, 845, 25, 17, 16); //121方框红
	} else {
		sdc2tx.drawImage(picMap, 600, 106, 14, 38, 970, 23, 19, 45);
		//sdc2tx.drawImage(picMap, 587, 53, 2, 20); //黑线
		sdc2tx.drawImage(picMap, 587, 53, 2, 20, 663, 48, 309, 2); //黑线
		sdc2tx.drawImage(picMap, 587, 53, 2, 20, 662, 48, 2, 99); //黑线
		sdc2tx.drawImage(picMap, 587, 53, 2, 20, 578, 147, 13, 2); //黑线
		sdc2tx.drawImage(picMap, 587, 53, 2, 20, 658, 146, 5, 2); //黑线
		sdc2tx.drawImage(picMap, 587, 53, 2, 20, 862, 33, 7, 2); //黑线
		sdc2tx.drawImage(picMap, 587, 53, 2, 20, 884, 33, 7, 2); //黑线
		sdc2tx.drawImage(picMap, 587, 53, 2, 20, 891, 33, 2, 16); //黑线
		sdc2tx.drawImage(picMap, 587, 53, 2, 20, 807, 39, 3, 13); //黑线
		sdc2tx.drawImage(picMap, 650, 168, 53, 29, 591, 131, 67, 33); //125
		sdc2tx.drawImage(picMap, 514, 336, 14, 14, 845, 25, 17, 16); //121方框黄
		value122txt.innerHTML = "点击起动安全阀";
	}
	if (value3x % 2 == 1) {
		value3txt.innerHTML = "点击关闭进排气空气阀";
		sdc2tx.drawImage(picMap, 0, 183, 39, 14, 1224, 535, 48, 16); //阀门3红开
		sdc2tx.drawImage(picMap, 649, 263, 30, 1, 1235, 80, 3, 440); //绿线
		sdc2tx.drawImage(picMap, 649, 263, 30, 1, 1185, 80, 10, 3); //绿线
		sdc2tx.drawImage(picMap, 649, 263, 30, 1, 1213, 80, 22, 3); //绿线
		sdc2tx.drawImage(picMap, 649, 263, 30, 1, 1185, 80, 3, 26); //绿线
		sdc2tx.drawImage(picMap, 649, 263, 30, 1, 1176, 106, 12, 3); //绿线
		sdc2tx.drawImage(picMap, 649, 263, 30, 1, 1176, 92, 6, 3); //绿线
		sdc2tx.drawImage(picMap, 649, 263, 30, 1, 1179, 42, 3, 52); //绿线
		sdc2tx.drawImage(picMap, 649, 263, 30, 1, 1080, 41, 21, 3); //绿线
		sdc2tx.drawImage(picMap, 649, 263, 30, 1, 1132, 41, 50, 3); //绿线
		sdc2tx.drawImage(picMap, 649, 263, 30, 1, 1117, 54, 3, 6); //绿线
		sdc2tx.drawImage(picMap, 649, 263, 30, 1, 1117, 68, 3, 33); //绿线
		sdc2tx.drawImage(picMap, 649, 263, 30, 1, 1117, 99, 29, 3); //绿线
		sdc2tx.drawImage(picMap, 649, 263, 30, 1, 1234, 519, 17, 3); //绿线
		sdc2tx.drawImage(picMap, 649, 263, 30, 1, 1248, 519, 3, 15); //绿线
	} else {
		value3txt.innerHTML = "点击起动进排气空气阀";
		sdc2tx.drawImage(picMap, 0, 168, 39, 14, 1224, 535, 48, 16); //阀门3黄关
		sdc2tx.drawImage(picMap, 587, 53, 2, 20, 1235, 80, 3, 440); //黑线
		sdc2tx.drawImage(picMap, 587, 53, 2, 20, 1185, 80, 10, 3); //黑线
		sdc2tx.drawImage(picMap, 587, 53, 2, 20, 1213, 80, 22, 3); //黑线
		sdc2tx.drawImage(picMap, 587, 53, 2, 20, 1185, 80, 3, 26); //黑线
		sdc2tx.drawImage(picMap, 587, 53, 2, 20, 1176, 106, 12, 3); //黑线
		sdc2tx.drawImage(picMap, 587, 53, 2, 20, 1176, 92, 6, 3); //黑线
		sdc2tx.drawImage(picMap, 587, 53, 2, 20, 1179, 42, 3, 52); //黑线
		sdc2tx.drawImage(picMap, 587, 53, 2, 20, 1080, 41, 21, 3); //黑线
		sdc2tx.drawImage(picMap, 587, 53, 2, 20, 1132, 41, 50, 3); //黑线
		sdc2tx.drawImage(picMap, 587, 53, 2, 20, 1117, 54, 3, 6); //黑线
		sdc2tx.drawImage(picMap, 587, 53, 2, 20, 1117, 68, 3, 33); //黑线
		sdc2tx.drawImage(picMap, 587, 53, 2, 20, 1117, 99, 29, 3); //黑线
		sdc2tx.drawImage(picMap, 587, 53, 2, 20, 1234, 519, 17, 3); //黑线
		sdc2tx.drawImage(picMap, 587, 53, 2, 20, 1248, 519, 3, 15); //黑线
	}

	if (value116x % 2 == 1) {
		value116txt.innerHTML = "点击合上盘车机";
		sdc2tx.drawImage(picMap, 601, 288, 31, 53, 817, 704, 39, 60); //116ON
		sdc2tx.drawImage(picMap, 630, 106, 14, 51, 792, 636, 18, 58); //115红开
		sdc2tx.drawImage(picMap, 649, 263, 30, 1, 550, 390, 8, 3); //绿线
		sdc2tx.drawImage(picMap, 649, 263, 30, 1, 555, 393, 3, 8); //绿线
		sdc2tx.drawImage(picMap, 649, 263, 30, 1, 556, 398, 227, 4); //绿线
		sdc2tx.drawImage(picMap, 649, 263, 30, 1, 779, 400, 4, 270); //绿线
		sdc2tx.drawImage(picMap, 649, 263, 30, 1, 779, 668, 12, 3); //绿线
	} else {
		value116txt.innerHTML = "点击脱开盘车机";
		sdc2tx.drawImage(picMap, 633, 288, 31, 53, 817, 704, 39, 60); //116OFF
		sdc2tx.drawImage(picMap, 645, 106, 14, 51, 792, 636, 18, 58); //115黄关
		sdc2tx.drawImage(picMap, 587, 53, 2, 20, 550, 390, 8, 3); //黑线
		sdc2tx.drawImage(picMap, 587, 53, 2, 20, 555, 393, 3, 8); //黑线
		sdc2tx.drawImage(picMap, 587, 53, 2, 20, 556, 398, 227, 4); //黑线
		sdc2tx.drawImage(picMap, 587, 53, 2, 20, 779, 400, 4, 270); //黑线
		sdc2tx.drawImage(picMap, 587, 53, 2, 20, 779, 668, 12, 3); //黑线
	}
	if (value118x % 2 == 1) {
		value118txt.innerHTML = "点击关闭空气分配器控制阀";
		sdc2tx.drawImage(picMap, 243, 168, 58, 14, 751, 120, 75, 17); //118开
	} else {
		value118txt.innerHTML = "点击起动空气分配器控制阀";
		sdc2tx.drawImage(picMap, 243, 198, 58, 14, 751, 120, 75, 17); //118关	
	}
	if (value728x % 2 == 1) {
		value728txt.innerHTML = "点击起动";
		sdc2tx.drawImage(picMap, 0, 168, 39, 14, 24, 405, 50, 16); //728关
	} else {
		value728txt.innerHTML = "点击关闭";
		sdc2tx.drawImage(picMap, 0, 183, 39, 14, 24, 405, 50, 16); //728开
	}
	if (cock2511x % 2 == 1) {
		cock2511txt.innerHTML = "点击起动";
		sdc2tx.drawImage(picMap, 601, 342, 12, 11, 1053, 592, 15, 14); //2511关
	} else {
		cock2511txt.innerHTML = "点击关闭";
		sdc2tx.drawImage(picMap, 614, 342, 12, 11, 1053, 592, 15, 14); //2511开
	}
	if (cock2512x % 2 == 1) {
		cock2512txt.innerHTML = "点击起动";
		sdc2tx.drawImage(picMap, 601, 342, 12, 11, 1058, 542, 15, 14); //2512关
	} else {
		cock2512txt.innerHTML = "点击关闭";
		sdc2tx.drawImage(picMap, 614, 342, 12, 11, 1058, 542, 15, 14); //2512开
	}
	if (cock2513x % 2 == 1) {
		cock2513txt.innerHTML = "点击起动";
		sdc2tx.drawImage(picMap, 601, 342, 12, 11, 1215, 370, 15, 14); //2513关
	} else {
		cock2531txt.innerHTML = "点击关闭";
		sdc2tx.drawImage(picMap, 614, 342, 12, 11, 1215, 370, 15, 14); //2513开
	}
	if (cock2514x % 2 == 1) {
		cock2514txt.innerHTML = "点击起动";
		sdc2tx.drawImage(picMap, 601, 342, 12, 11, 868, 26, 15, 14); //2514关
	} else {
		cock2514txt.innerHTML = "点击关闭";
		sdc2tx.drawImage(picMap, 614, 342, 12, 11, 868, 26, 15, 14); //2514开
	}
	if (cock2681x % 2 == 1) {
		cock2681txt.innerHTML = "点击起动";
		sdc2tx.drawImage(picMap, 601, 342, 12, 11, 108, 124, 16, 14); //2681关
	} else {
		cock2681txt.innerHTML = "点击关闭";
		sdc2tx.drawImage(picMap, 614, 342, 12, 11, 108, 124, 16, 14); //2681开
	}
	if (cock2682x % 2 == 1) {
		cock2682txt.innerHTML = "点击起动";
		sdc2tx.drawImage(picMap, 601, 342, 12, 11, 131, 332, 16, 14); //2682关
	} else {
		cock2682txt.innerHTML = "点击关闭";
		sdc2tx.drawImage(picMap, 614, 342, 12, 11, 131, 332, 16, 14); //2682开
	}
	// if (value16x % 2 == 1 && value3x % 2 == 1 && value122x % 2 == 1 && value116x % 2 == 1 && value118x % 2 == 1 && schematicX == 2 && valueMainx % 2 == 1) {
	// 	schematicDiagramPicture.src = "img/02.png";
	// 	schematicX = 5
	// 	console.log('阀门全关了')
	// 	document.getElementById('yunxing').style.display = 'none'
	// 	document.getElementById('ahead').style.display = 'none'
	// }

}

value16.onmouseover = function () {
	value16txt.style.display = 'block';
}
value16.onmouseout = function () {
	value16txt.style.display = 'none';
}

var sdc2 = document.getElementById('sdc2');
var sdc2tx = sdc2.getContext("2d");

var value122 = document.getElementById('value122'); //阀门122
var value122txt = document.getElementById('value122txt'); //阀门122介绍框
var value122x = 0; //阀门16的计数器，用于判断显示哪张底图
var value122confirmBox = document.getElementById('value122confirmBox')
var valve122ComfirmTxt = document.getElementById('valve122ComfirmTxt')
var valve122Comfirm = document.getElementById('valve122Comfirm')
var valve122Cancel = document.getElementById('valve122Cancel')
value122.onclick = function () {
	if (value122x % 2 == 1) {
		value122confirmBox.style.display = 'block'
		valve122ComfirmTxt.innerHTML = "是否关闭安全阀"
	} else {
		value122confirmBox.style.display = 'block'
		valve122ComfirmTxt.innerHTML = "是否起动安全阀"
	}
}
valve122Comfirm.onclick = function () {
	value122x += 1;

	value122confirmBox.style.display = 'none'
}
valve122Cancel.onclick = function () {
	value122confirmBox.style.display = 'none'
}


value122.onmouseover = function () {
	value122txt.style.display = 'block';
}
value122.onmouseout = function () {
	value122txt.style.display = 'none';
}

var value3 = document.getElementById('value3'); //阀门3
var value3txt = document.getElementById('value3txt'); //阀门3介绍框
var value3x = 0; //阀门3的计数器，用于判断显示哪张底图
var value3confirmBox = document.getElementById('value3confirmBox')
var valve3ComfirmTxt = document.getElementById('valve3ComfirmTxt')
var valve3Comfirm = document.getElementById('valve3Comfirm')
var valve3Cancel = document.getElementById('valve3Cancel')
value3.onclick = function () {
	if (value3x % 2 == 1) {
		value3confirmBox.style.display = 'block'
		valve3ComfirmTxt.innerHTML = "是否关闭进排气空气阀"
	} else {
		value3confirmBox.style.display = 'block'
		valve3ComfirmTxt.innerHTML = "是否起动进排气空气阀"
	}
}

valve3Comfirm.onclick = function () {
	value3x += 1;

	value3confirmBox.style.display = 'none'
}
valve3Cancel.onclick = function () {
	value3confirmBox.style.display = 'none'
}
value3.onmouseover = function () {
	value3txt.style.display = 'block';
}
value3.onmouseout = function () {
	value3txt.style.display = 'none';
}

var valueMain = document.getElementById('valueMain'); //主起动阀
var valueMaintxt = document.getElementById('valueMaintxt'); //主起动阀介绍框
var valueMainx = 0; //主起动阀的计数器，用于判断显示哪张底图
var valveMainconfirmBox = document.getElementById('valveMainconfirmBox')
var valveMainComfirmTxt = document.getElementById('valveMainComfirmTxt')
var valveMainComfirm = document.getElementById('valveMainComfirm')
var valveMainCancel = document.getElementById('valveMainCancel')
valueMain.onclick = function () {
	if (valueMainx % 2 == 1) {
		valveMainconfirmBox.style.display = 'block'
		valveMainComfirmTxt.innerHTML = "是否关闭主起动阀"
	} else {
		valveMainconfirmBox.style.display = 'block'
		valveMainComfirmTxt.innerHTML = "是否打开主起动阀"
	}
}
valveMainComfirm.onclick = function () {
	valueMainx += 1;

	valveMainconfirmBox.style.display = 'none'
}
valveMainCancel.onclick = function () {
	valveMainconfirmBox.style.display = 'none'
}
valueMain.onmouseover = function () {
	valueMaintxt.style.display = 'block';
}
valueMain.onmouseout = function () {
	valueMaintxt.style.display = 'none';
}

document.getElementById('lTurningGearEngagedLed').style.backgroundColor = '#FF0000';//ZM：盘车机灯
document.getElementById('plTurningGearEngagedLed').style.backgroundColor = '#FF0000';
document.getElementById('olTurningGearEngagedLed').style.backgroundColor = '#FF0000';
document.getElementById('glTurningGearEngagedLed').style.backgroundColor = '#FF0000';
document.getElementById('tlTurningGearEngagedLed').style.backgroundColor = '#FF0000';

var value116 = document.getElementById('value116'); //阀门116
var value116txt = document.getElementById('value116txt'); //阀门116介绍框
var value116x = 0; //阀门116的计数器，用于判断显示哪张底图
var value116confirmBox = document.getElementById('value116confirmBox')
var valve116ComfirmTxt = document.getElementById('valve116ComfirmTxt')
var valve116Comfirm = document.getElementById('valve116Comfirm')
var valve116Cancel = document.getElementById('valve116Cancel')
value116.onclick = function () {
	if (value116x % 2 == 1) {
		value116confirmBox.style.display = 'block'
		valve116ComfirmTxt.innerHTML = "是否合上盘车机"
	} else {
		value116confirmBox.style.display = 'block'
		valve116ComfirmTxt.innerHTML = "是否脱开盘车机"
	}
}
valve116Comfirm.onclick = function () {
	value116x += 1;

	value116confirmBox.style.display = 'none'
	document.getElementById('lTurningGearEngagedLed').style.backgroundColor = '#800000';//ZM：盘车机灯
	document.getElementById('plTurningGearEngagedLed').style.backgroundColor = '#800000';
	document.getElementById('olTurningGearEngagedLed').style.backgroundColor = '#800000';
	document.getElementById('glTurningGearEngagedLed').style.backgroundColor = '#800000';
	document.getElementById('tlTurningGearEngagedLed').style.backgroundColor = '#800000';
}
valve116Cancel.onclick = function () {
	value116confirmBox.style.display = 'none'
}


value116.onmouseover = function () {
	value116txt.style.display = 'block';
}
value116.onmouseout = function () {
	value116txt.style.display = 'none';
}

var value118 = document.getElementById('value118'); //阀门118 空气分配器控制阀
var value118txt = document.getElementById('value118txt'); //阀门118介绍框
var value118x = 0; //阀门118的计数器，用于判断显示哪张底图
var value118confirmBox = document.getElementById('value118confirmBox')
var valve118ComfirmTxt = document.getElementById('valve118ComfirmTxt')
var valve118Comfirm = document.getElementById('valve118Comfirm')
var valve118Cancel = document.getElementById('valve118Cancel')
value118.onclick = function () {
	if (value118x % 2 == 1) {
		value118confirmBox.style.display = 'block'
		valve118ComfirmTxt.innerHTML = "是否关闭空气分配器控制阀"
	} else {
		value118confirmBox.style.display = 'block'
		valve118ComfirmTxt.innerHTML = "是否起动空气分配器控制阀"
	}
}
valve118Comfirm.onclick = function () {
	value118x += 1;

	value118confirmBox.style.display = 'none'
}
valve118Cancel.onclick = function () {
	value118confirmBox.style.display = 'none'
}


value118.onmouseover = function () {
	value118txt.style.display = 'block';
}
value118.onmouseout = function () {
	value118txt.style.display = 'none';
}

var value728 = document.getElementById('value728'); //阀门728
var value728txt = document.getElementById('value728txt'); //阀门728介绍框
var value728x = 1; //阀门728的计数器，用于判断显示哪张底图
value728.onmouseover = function () {
	value728txt.style.display = 'block';
}
value728.onmouseout = function () {
	value728txt.style.display = 'none';
}
value728.onclick = function () {
	if (value728x % 2 == 1) {
		var value728c1 = confirm("是否关闭阀门");
		if (value728c1 == true) {
			value728x += 1;
		}
	} else {
		var value728c2 = confirm("是否起动阀门");
		if (value728c2 == true) {
			value728x += 1;
		}
	}
}

var cock2511 = document.getElementById('cock2511');
var cock2511txt = document.getElementById('cock2511txt');
var cock2511x = 1;
cock2511.onmouseover = function () {
	cock2511txt.style.display = 'block';
}
cock2511.onmouseout = function () {
	cock2511txt.style.display = 'none';
}
cock2511.onclick = function () {
	if (cock2511x % 2 == 1) {
		cock2511x += 1;
	} else {
		cock2511x += 1;
	}
}

var cock2512 = document.getElementById('cock2512');
var cock2512txt = document.getElementById('cock2512txt');
var cock2512x = 1;
cock2512.onmouseover = function () {
	cock2512txt.style.display = 'block';
}
cock2512.onmouseout = function () {
	cock2512txt.style.display = 'none';
}
cock2512.onclick = function () {
	if (cock2512x % 2 == 1) {
		cock2512x += 1;
	} else {
		cock2512x += 1;
	}
}

var cock2513 = document.getElementById('cock2513');
var cock2513txt = document.getElementById('cock2513txt');
var cock2513x = 1;
cock2513.onmouseover = function () {
	cock2513txt.style.display = 'block';
}
cock2513.onmouseout = function () {
	cock2513txt.style.display = 'none';
}
cock2513.onclick = function () {
	if (cock2513x % 2 == 1) {
		cock2513x += 1;
	} else {
		cock2531txt.innerHTML = "点击关闭";
	}
}

var cock2514 = document.getElementById('cock2514');
var cock2514txt = document.getElementById('cock2514txt');
var cock2514x = 1;
cock2514.onmouseover = function () {
	cock2514txt.style.display = 'block';
}
cock2514.onmouseout = function () {
	cock2514txt.style.display = 'none';
}
cock2514.onclick = function () {
	if (cock2514x % 2 == 1) {
		cock2514x += 1;
	} else {
		cock2514x += 1;
	}
}

var cock2681 = document.getElementById('cock2681');
var cock2681txt = document.getElementById('cock2681txt');
var cock2681x = 1;
cock2681.onmouseover = function () {
	cock2681txt.style.display = 'block';
}
cock2681.onmouseout = function () {
	cock2681txt.style.display = 'none';
}
cock2681.onclick = function () {
	if (cock2681x % 2 == 1) {
		cock2681x += 1;
	} else {
		cock2681x += 1;
	}
}

var cock2682 = document.getElementById('cock2682');
var cock2682txt = document.getElementById('cock2682txt');
var cock2682x = 1;
cock2682.onmouseover = function () {
	cock2682txt.style.display = 'block';
}
cock2682.onmouseout = function () {
	cock2682txt.style.display = 'none';
}
cock2682.onclick = function () {
	if (cock2682x % 2 == 1) {
		cock2682x += 1;
	} else {
		cock2682x += 1;
	}
}

//气动逻辑图动态变化
let qidongx = 1;

function qidongbian() {
	if (qidongx % 2 == 1) {
		sdc2tx.drawImage(picxx1, 0, 0, 379, 230, 667, 68, 380, 209);
		qidongx += 1;
	} else {
		sdc2tx.drawImage(picxx2, 0, 0, 379, 230, 667, 68, 380, 209);
		qidongx += 1;
	}
}

//检查是否起动准备就绪
function checkStart() {
	//起动条件完成   0为关闭状态1位起动状态
	if (value16x % 2 == 1 && value3x % 2 == 1 && value122x % 2 == 1 && value116x % 2 == 1 && value118x % 2 == 1 && valueMainx % 2 == 1) {
		pointerRotate(31, 'bStartAirPressPointer');
		document.getElementById('bStartAirPress').innerHTML = '27 bar';
		pointerRotate(31, 'cStartAirPressPointer');
		document.getElementById('cStartAirPress').innerHTML = '27 bar';
		console.log('阀门全关好了')

		if (schematicX == 0) {
			// schematicX = 1
			document.getElementById('yunxing').style.display = 'none'
			document.getElementById('ahead').style.display = 'none'
		}
		if (schematicX == 1) {
			schematicDiagramPicture.src = "img/01.png";
			sdc2tx.clearRect(667, 68, 380, 209);
			document.getElementById('yunxing').style.display = 'block'
			document.getElementById('ahead').style.display = 'block'

		}
		if (schematicX == 2) {
			qidongbian()
			document.getElementById('yunxing').style.display = 'none'
			document.getElementById('ahead').style.display = 'none'

		}
		if (schematicX == 5) {
			qidongbian()
		}

		if (ydx > 0) {
			rmpx = parseInt(rmp * 1.4);
			bstate.innerHTML = 'Running';
			cState.innerHTML = 'Running';
		} else {
			rmpx = 0;
			bstate.innerHTML = 'Stopping';
			cState.innerHTML = 'Stopping';

		}
		if (lwheelx1x >= 3) {
			document.getElementById('bEngReady').innerHTML = 'Eng Ready';
			document.getElementById('bEngReady').style.backgroundColor = '#01D867';
			document.getElementById('cEngReady').innerHTML = 'Eng Ready';
			document.getElementById('cEngReady').style.backgroundColor = '#01D867';
			document.getElementById('bSystemReady').innerHTML = 'System Ready';
			document.getElementById('bSystemReady').style.backgroundColor = '#01D867';
			document.getElementById('cSystemReady').innerHTML = 'System Ready';
			document.getElementById('cSystemReady').style.backgroundColor = '#01D867';
		}
	} else {
		document.getElementById('bEngReady').innerHTML = 'Eng N. Ready';
		document.getElementById('bEngReady').style.backgroundColor = 'red';
		document.getElementById('cEngReady').innerHTML = 'Eng N. Ready';
		document.getElementById('cEngReady').style.backgroundColor = 'red';
		document.getElementById('bSystemReady').innerHTML = 'System N. Ready';
		document.getElementById('bSystemReady').style.backgroundColor = 'red';
		document.getElementById('cSystemReady').innerHTML = 'System N.Ready';
		document.getElementById('cSystemReady').style.backgroundColor = 'red';
		pointerRotate(-90, 'bStartAirPressPointer');
		document.getElementById('bStartAirPress').innerHTML = '0 bar';
		pointerRotate(-90, 'cStartAirPressPointer');
		document.getElementById('cStartAirPress').innerHTML = '0 bar';

		bstate.innerHTML = 'Stopping';
		cState.innerHTML = 'Stopping';

		schematicX = 0;//气动逻辑未完成
	}
}

function controlLocation() {
	if (lhandle1x % 2 == 0) {
		if (thandlex % 2 == 0) {
			//驾驶台控制
			document.getElementById('pswitch4').style.display = 'none';
			$('#touming4').on('click', function () {    //把事件放在函数里面！！！！
				$('#pswitch4').css('display', 'none');
				document.getElementById('glbridgeControlLed').style.backgroundColor = '#00FF00';
				document.getElementById('glcontrolRoomControlLed').style.backgroundColor = ' #085A13';
				document.getElementById('glemergencyControlLed').style.backgroundColor = '#800000';


				document.getElementById('plbridgeControlLed').style.backgroundColor = '#00FF00';
				document.getElementById('plcontrolRoomControlLed').style.backgroundColor = ' #085A13';
				document.getElementById('plemergencyControlLed').style.backgroundColor = '#800000';
				document.getElementById('olbridgeControlLed').style.backgroundColor = '#00FF00';
				document.getElementById('olcontrolRoomControlLed').style.backgroundColor = ' #085A13';
				document.getElementById('olemergencyControlLed').style.backgroundColor = '#800000';
				document.getElementById('tlbridgeControlLed').style.backgroundColor = '#00FF00';
				document.getElementById('tlcontrolRoomControlLed').style.backgroundColor = ' #085A13';
				document.getElementById('tlemergencyControlLed').style.backgroundColor = '#800000';

				document.getElementById('lloc').style.borderColor = 'white';
				document.getElementById('llocled').style.backgroundColor = 'white';
				document.getElementById('lbcr').style.borderColor = '#FFC200';
				document.getElementById('lbcrled').style.backgroundColor = '#FFC200';
				document.getElementById('plbcr').style.borderColor = '#FFC200';
				document.getElementById('plbcrled').style.backgroundColor = '#FFC200';
				document.getElementById('lecr').style.borderColor = 'white';
				document.getElementById('lloc').style.borderColor = 'white';


				document.getElementById('lemergencyControlLed').style.backgroundColor = '#800000';
				document.getElementById('lbridgeControlLed').style.backgroundColor = '#00FF00';



			})



			document.getElementById('tbridgeLed').style.backgroundColor = '#FFC200';
			document.getElementById('ttecrLed').style.backgroundColor = 'white';
			document.getElementById('tlocalLed').style.backgroundColor = 'white';
			document.getElementById('tbridge').style.borderColor = '#FFC200';
			document.getElementById('tecr').style.borderColor = 'white';
			document.getElementById('tlocal').style.borderColor = 'white';
			document.getElementById('bbridgeLed').style.backgroundColor = '#FFC200';
			document.getElementById('btecrLed').style.backgroundColor = 'white';
			document.getElementById('blocalLed').style.backgroundColor = 'white';
			document.getElementById('bbridge').style.borderColor = '#FFC200';
			document.getElementById('becr').style.borderColor = 'white';
			document.getElementById('blocal').style.borderColor = 'white';
			document.getElementById('lbcrled').style.backgroundColor = '#FFC200';
			document.getElementById('lecrled').style.backgroundColor = 'white';
			document.getElementById('llocled').style.backgroundColor = 'white';
			document.getElementById('plbcrled').style.backgroundColor = '#FFC200';
			document.getElementById('plecrled').style.backgroundColor = 'white';
			document.getElementById('pllocled').style.backgroundColor = 'white';
			document.getElementById('lbcr').style.borderColor = '#FFC200';
			document.getElementById('lecr').style.borderColor = 'white';
			document.getElementById('lloc').style.borderColor = 'white';
			document.getElementById('plbcr').style.borderColor = '#FFC200';
			document.getElementById('plecr').style.borderColor = 'white';
			document.getElementById('plloc').style.borderColor = 'white';
			document.getElementById('bcpBridge').style.backgroundColor = 'green';
			document.getElementById('bcpEcr').style.backgroundColor = '#c3c3c3';
			document.getElementById('bcpLocalManualcontrol').style.backgroundColor = '#c3c3c3';
			document.getElementById('ccpBridge').style.backgroundColor = 'green';
			document.getElementById('ccpEcr').style.backgroundColor = '#c3c3c3';
			document.getElementById('ccpLocalManualcontrol').style.backgroundColor = '#c3c3c3';

			document.getElementById('lbridgeControlLed').style.backgroundColor = '#00FF00';
			document.getElementById('glbridgeControlLed').style.backgroundColor = '#00FF00';
			document.getElementById('plbridgeControlLed').style.backgroundColor = '#00FF00';
			document.getElementById('olbridgeControlLed').style.backgroundColor = '#00FF00';
			document.getElementById('tlbridgeControlLed').style.backgroundColor = '#00FF00';

			document.getElementById('lcontrolRoomControlLed').style.backgroundColor = ' #085A13';
			document.getElementById('plcontrolRoomControlLed').style.backgroundColor = ' #085A13';
			document.getElementById('olcontrolRoomControlLed').style.backgroundColor = ' #085A13';
			document.getElementById('glcontrolRoomControlLed').style.backgroundColor = ' #085A13';
			document.getElementById('tlcontrolRoomControlLed').style.backgroundColor = ' #085A13';
			document.getElementById('lemergencyControlLed').style.backgroundColor = '#800000';
			document.getElementById('glemergencyControlLed').style.backgroundColor = '#800000';
			document.getElementById('olemergencyControlLed').style.backgroundColor = '#800000';
			document.getElementById('plemergencyControlLed').style.backgroundColor = '#800000';
			document.getElementById('tlemergencyControlLed').style.backgroundColor = '#800000';
			document.getElementById('plbcr').style.borderColor = '#FFC200';

		} else {
			//集控室控制
			document.getElementById('pswitch4').style.display = 'none';
			$('#touming4').on('click', function () {
				$('#pswitch4').css('display', 'none');
				document.getElementById('glbridgeControlLed').style.backgroundColor = '#085A13';
				document.getElementById('glcontrolRoomControlLed').style.backgroundColor = ' #00FF00';
				document.getElementById('glemergencyControlLed').style.backgroundColor = '#800000';

				document.getElementById('plbridgeControlLed').style.backgroundColor = '#085A13';
				document.getElementById('plcontrolRoomControlLed').style.backgroundColor = ' #00FF00';
				document.getElementById('plemergencyControlLed').style.backgroundColor = '#800000';
				document.getElementById('olbridgeControlLed').style.backgroundColor = '#085A13';
				document.getElementById('olcontrolRoomControlLed').style.backgroundColor = ' #00FF00';
				document.getElementById('olemergencyControlLed').style.backgroundColor = '#800000';
				document.getElementById('tlbridgeControlLed').style.backgroundColor = '#085A13';
				document.getElementById('tlcontrolRoomControlLed').style.backgroundColor = ' #00FF00';
				document.getElementById('tlemergencyControlLed').style.backgroundColor = '#800000';

				document.getElementById('plbcr').style.borderColor = 'white';
				document.getElementById('plecr').style.borderColor = '#FFC200';
				document.getElementById('plloc').style.borderColor = 'white';

				document.getElementById('lcontrolRoomControlLed').style.backgroundColor = ' #00FF00';
				document.getElementById('lbridgeControlLed').style.backgroundColor = '#085A13';

			})
			document.getElementById('tbridgeLed').style.backgroundColor = 'white';
			document.getElementById('ttecrLed').style.backgroundColor = '#FFC200';
			document.getElementById('tlocalLed').style.backgroundColor = 'white';
			document.getElementById('tbridge').style.borderColor = 'white';
			document.getElementById('tecr').style.borderColor = '#FFC200';
			document.getElementById('tlocal').style.borderColor = 'white';
			document.getElementById('bbridgeLed').style.backgroundColor = 'white';
			document.getElementById('btecrLed').style.backgroundColor = '#FFC200';
			document.getElementById('blocalLed').style.backgroundColor = 'white';
			document.getElementById('bbridge').style.borderColor = 'white';
			document.getElementById('becr').style.borderColor = '#FFC200';
			document.getElementById('blocal').style.borderColor = 'white';
			document.getElementById('lbcrled').style.backgroundColor = 'white';
			document.getElementById('lecrled').style.backgroundColor = '#FFC200';
			document.getElementById('llocled').style.backgroundColor = 'white';
			document.getElementById('plbcrled').style.backgroundColor = 'white';
			document.getElementById('plecrled').style.backgroundColor = '#FFC200';
			document.getElementById('pllocled').style.backgroundColor = 'white';
			document.getElementById('lbcr').style.borderColor = 'white';
			document.getElementById('lecr').style.borderColor = '#FFC200';
			document.getElementById('lloc').style.borderColor = 'white';
			document.getElementById('plbcr').style.borderColor = 'white';
			document.getElementById('plecr').style.borderColor = '#FFC200';
			document.getElementById('plloc').style.borderColor = 'white';
			document.getElementById('bcpBridge').style.backgroundColor = '#c3c3c3';
			document.getElementById('bcpEcr').style.backgroundColor = 'green';
			document.getElementById('bcpLocalManualcontrol').style.backgroundColor = '#c3c3c3';
			document.getElementById('ccpBridge').style.backgroundColor = '#c3c3c3';
			document.getElementById('ccpEcr').style.backgroundColor = 'green';
			document.getElementById('ccpLocalManualcontrol').style.backgroundColor = '#c3c3c3';

			document.getElementById('lbridgeControlLed').style.backgroundColor = '#085A13';
			document.getElementById('plbridgeControlLed').style.backgroundColor = '#085A13';
			document.getElementById('olbridgeControlLed').style.backgroundColor = '#085A13';
			document.getElementById('glbridgeControlLed').style.backgroundColor = '#085A13';
			document.getElementById('tlbridgeControlLed').style.backgroundColor = '#085A13';
			document.getElementById('lcontrolRoomControlLed').style.backgroundColor = ' #00FF00';
			document.getElementById('plcontrolRoomControlLed').style.backgroundColor = ' #00FF00';
			document.getElementById('olcontrolRoomControlLed').style.backgroundColor = ' #00FF00';
			document.getElementById('glcontrolRoomControlLed').style.backgroundColor = ' #00FF00';
			document.getElementById('tlcontrolRoomControlLed').style.backgroundColor = ' #00FF00';
			document.getElementById('lemergencyControlLed').style.backgroundColor = '#800000';
		}
	} else {
		//机旁控制
		$('#touming4').on('click', function () {
			// lhandle1x += 1
			document.getElementById('lhandle1').style.transformOrigin = '31% 31%';
			document.getElementById('lhandle1').style.transform = 'rotate(' + 0 + 'deg)';

		})
		document.getElementById('pswitch4').style.display = 'block';
		document.getElementById('tbridgeLed').style.backgroundColor = 'white';
		document.getElementById('ttecrLed').style.backgroundColor = 'white';
		document.getElementById('tlocalLed').style.backgroundColor = '#FFC200';
		document.getElementById('tbridge').style.borderColor = 'white';
		document.getElementById('tecr').style.borderColor = 'white';
		document.getElementById('tlocal').style.borderColor = '#FFC200';
		document.getElementById('bbridgeLed').style.backgroundColor = 'white';
		document.getElementById('btecrLed').style.backgroundColor = 'white';
		document.getElementById('blocalLed').style.backgroundColor = '#FFC200';
		document.getElementById('bbridge').style.borderColor = 'white';
		document.getElementById('becr').style.borderColor = 'white';
		document.getElementById('blocal').style.borderColor = '#FFC200';
		document.getElementById('lbcrled').style.backgroundColor = 'white';
		document.getElementById('lecrled').style.backgroundColor = 'white';
		document.getElementById('llocled').style.backgroundColor = '#FFC200';
		document.getElementById('plbcrled').style.backgroundColor = 'white';
		document.getElementById('plecrled').style.backgroundColor = 'white';
		document.getElementById('pllocled').style.backgroundColor = '#FFC200';
		document.getElementById('lbcr').style.borderColor = 'white';
		document.getElementById('lecr').style.borderColor = 'white';
		document.getElementById('lloc').style.borderColor = '#FFC200';
		document.getElementById('plbcr').style.borderColor = 'white';
		document.getElementById('plecr').style.borderColor = 'white';
		document.getElementById('plloc').style.borderColor = '#FFC200';
		document.getElementById('bcpBridge').style.backgroundColor = '#c3c3c3';
		document.getElementById('bcpEcr').style.backgroundColor = '#c3c3c3';
		document.getElementById('bcpLocalManualcontrol').style.backgroundColor = 'green';
		document.getElementById('ccpBridge').style.backgroundColor = '#c3c3c3';
		document.getElementById('ccpEcr').style.backgroundColor = '#c3c3c3';
		document.getElementById('ccpLocalManualcontrol').style.backgroundColor = 'green';

		document.getElementById('lbridgeControlLed').style.backgroundColor = '#085A13';
		document.getElementById('lcontrolRoomControlLed').style.backgroundColor = ' #085A13';
		document.getElementById('lemergencyControlLed').style.backgroundColor = '#FF0000';

		document.getElementById('plemergencyControlLed').style.backgroundColor = '#FF0000';//2d控制3d的邓
		document.getElementById('olemergencyControlLed').style.backgroundColor = '#FF0000';
		document.getElementById('glemergencyControlLed').style.backgroundColor = '#FF0000';
		document.getElementById('tlemergencyControlLed').style.backgroundColor = '#FF0000';
		document.getElementById('plbridgeControlLed').style.backgroundColor = '#085A13';
		document.getElementById('olbridgeControlLed').style.backgroundColor = '#085A13';
		document.getElementById('glbridgeControlLed').style.backgroundColor = '#085A13';
		document.getElementById('tlbridgeControlLed').style.backgroundColor = '#085A13';
		document.getElementById('plcontrolRoomControlLed').style.backgroundColor = ' #085A13';
		document.getElementById('olcontrolRoomControlLed').style.backgroundColor = ' #085A13';
		document.getElementById('glcontrolRoomControlLed').style.backgroundColor = ' #085A13';
		document.getElementById('tlcontrolRoomControlLed').style.backgroundColor = ' #085A13';
	}
}

//起始为机旁控制
document.getElementById('tbridgeLed').style.backgroundColor = 'white';
document.getElementById('ttecrLed').style.backgroundColor = 'white';
document.getElementById('tlocalLed').style.backgroundColor = '#FFC200';
document.getElementById('tbridge').style.borderColor = 'white';
document.getElementById('tecr').style.borderColor = 'white';
document.getElementById('tlocal').style.borderColor = '#FFC200';
document.getElementById('bbridgeLed').style.backgroundColor = 'white';
document.getElementById('btecrLed').style.backgroundColor = 'white';
document.getElementById('blocalLed').style.backgroundColor = '#FFC200';
document.getElementById('bbridge').style.borderColor = 'white';
document.getElementById('becr').style.borderColor = 'white';
document.getElementById('blocal').style.borderColor = '#FFC200';
document.getElementById('lbcrled').style.backgroundColor = 'white';
document.getElementById('lecrled').style.backgroundColor = 'white';
document.getElementById('llocled').style.backgroundColor = '#FFC200';
document.getElementById('lbcr').style.borderColor = 'white';
document.getElementById('lecr').style.borderColor = 'white';
document.getElementById('lloc').style.borderColor = '#FFC200';
document.getElementById('bcpBridge').style.backgroundColor = '#c3c3c3';
document.getElementById('bcpEcr').style.backgroundColor = '#c3c3c3';
document.getElementById('bcpLocalManualcontrol').style.backgroundColor = 'green';
document.getElementById('ccpBridge').style.backgroundColor = '#c3c3c3';
document.getElementById('ccpEcr').style.backgroundColor = '#c3c3c3';
document.getElementById('ccpLocalManualcontrol').style.backgroundColor = 'green';

//辅车钟切换操作部位
//驾驶台夺位
let bridgelocation = 0;
document.getElementById('bbridge').onclick = function () {
	if (lhandle1x % 2 == 1 || thandlex % 2 == 1) {
		//非驾驶台控制
		this.style.borderColor = 'red';
		document.getElementById('tbridge').style.borderColor = 'red';
		document.getElementById('lbcr').style.borderColor = 'red';
		bridgelocation = 1;
	}
}
document.getElementById('tbridge').onclick = function () {
	if (bridgelocation == 1) {
		if (lhandle1x % 2 == 0 || thandlex % 2 == 1) {
			//控制位置在集控室
			document.getElementById('bbridge').style.borderColor = 'green';
			document.getElementById('tbridge').style.borderColor = 'green';
			document.getElementById('lbcr').style.borderColor = 'green';
			bridgelocation = 0;
		}
	}
}
document.getElementById('lbcr').onclick = function () {
	if (lgandle1x % 2 == 1) {
		//控制位置在机旁
		document.getElementById('bbridge').style.borderColor = 'green';
		document.getElementById('tbridge').style.borderColor = 'green';
		document.getElementById('lbcr').style.borderColor = 'green';
		bridgelocation = 0;
	}
}
//集控室夺位
let ecrlocation = 0;

var panduanq2 = 0
document.getElementById('tecr').onclick = function () {
	panduanq2 = 1
	if (lhandle1x % 2 == 1 || thandlex % 2 == 0) {
		//非集控室控制
		this.style.borderColor = 'red';
		document.getElementById('becr').style.borderColor = 'red';
		document.getElementById('lecr').style.borderColor = 'red';
		ecrlocation = 1;

	}
}
document.getElementById('lecr').onclick = function () {
	if (ecrlocation == 1) {
		if (lhandle1x % 2 == 1) {
			//控制位置在机旁
			document.getElementById('becr').style.borderColor = 'green';
			document.getElementById('tecr').style.borderColor = 'green';
			document.getElementById('lecr').style.borderColor = 'green';
			document.getElementById('plecr').style.borderColor = 'green';

			ecrlocation = 0;
		}
	}
}
document.getElementById('plecr').onclick = function () {
	if (ecrlocation == 1) {
		if (lhandle1x % 2 == 1) {
			//控制位置在机旁
			document.getElementById('becr').style.borderColor = 'green';
			document.getElementById('tecr').style.borderColor = 'green';
			document.getElementById('lecr').style.borderColor = 'green';
			document.getElementById('plecr').style.borderColor = 'green';

			ecrlocation = 0;
		}
	}
}

var panduanbecrDefen = 0
document.getElementById('becr').onclick = function () {
	panduanbecrDefen = 1
	if (ecrlocation == 1) {
		if (lhandle1x % 2 == 0 && thandlex % 2 == 0) {
			//控制位置在驾控台
			// if (panduanq2 == 1) {
			// 	panduanq2 = 2
			// }
			// point2 = 60
			document.getElementById('becr').style.borderColor = 'green';
			document.getElementById('tecr').style.borderColor = 'green';
			document.getElementById('lecr').style.borderColor = 'green';
			ecrlocation = 0;
		}
	}
}
//机旁夺位
let locallocation = 0;
document.getElementById('lloc').onclick = function () {
	if (lhandle1x % 2 == 0) {
		//非机旁控制
		this.style.borderColor = 'red';
		document.getElementById('tlocal').style.borderColor = 'red';
		document.getElementById('blocal').style.borderColor = 'red';
		locallocation = 1;

	}
}
document.getElementById('blocal').onclick = function () {
	if (locallocation == 1) {
		if (lhandle1x % 2 == 0 && thandlex % 2 == 0) {
			//控制位置在驾控台
			document.getElementById('blocal').style.borderColor = 'green';
			document.getElementById('tlocal').style.borderColor = 'green';
			document.getElementById('lloc').style.borderColor = 'green';
			locallocation = 0;
		}
	}
}
document.getElementById('tlocal').onclick = function () {
	if (locallocation == 1) {
		if (lhandle1x % 2 == 0 && thandlex % 2 == 1) {
			//控制位置在集控室
			document.getElementById('blocal').style.borderColor = 'green';
			document.getElementById('tlocal').style.borderColor = 'green';
			document.getElementById('lloc').style.borderColor = 'green';
			locallocation = 0;
		}
	}
}