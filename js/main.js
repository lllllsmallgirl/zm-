//阻止右键菜单
document.oncontextmenu = function (ev) {
	var oEvent = ev || event;
	return false;
}
//获取导航
var ahomepage = document.getElementById('ahomepage');
var abridge = document.getElementById('abridge');
var acontrolRoom = document.getElementById('acontrolRoom');
// var acontrolPanel = document.getElementById('acontrolPanel');
var alocal = document.getElementById('alocal');
var aschematicDiagram = document.getElementById('aschematicDiagram');
var athreeD = document.getElementById('athreeD');
var atelegraph = document.getElementById('atelegraph');
var adiagram = document.getElementById('adiagram');
var acondition = document.getElementById('acondition');
var agovernor = document.getElementById('agovernor');
//获取页面内容
var homepage = document.getElementById('homepage');
var bridge = document.getElementById('bridge');
var controlRoom = document.getElementById('controlRoom');
// var controlPanel = document.getElementById('controlPanel');
var local = document.getElementById('local');
var schmaticDiagram = document.getElementById('schematicDiagram');
var threeD = document.getElementById('threeD');
var telegraph = document.getElementById('telegraph');
var diagram = document.getElementById('diagram');
var condition = document.getElementById('condition');
var governor = document.getElementById('governor');

var menu = document.getElementById("menuUl");
var menuli = menu.getElementsByTagName("li");
// for(let menulix = 0; menulix < menuli.length; menulix++) {
// 	menuli[menulix].onmouseover = function() {
// 		this.style.background = '#819FF7';
// 	}
// 	menuli[menulix].onmouseout = function() {
// 		this.style.background = 'rgb(0, 103, 153)';
// 	}

// }

//画面切换函数
ahomepage.onclick = function () {
	aconditionx = 0
	homepage.style.display = "block";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	// controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	threeD.style.display = "none";
	telegraph.style.display = "none";
	diagram.style.display = "none";
	governor.style.display = "none";
	condition.style.display = "none";
	for (var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.backgroundColor = '';
		menuli[menulixx].style.color = 'white';
	}
	this.style.color = 'yellow';
	this.style.backgroundColor = " #9badaf"
}

abridge.onclick = function () {
	aconditionx = 0
	homepage.style.display = "none";
	bridge.style.display = "block";
	controlRoom.style.display = "none";
	// controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	threeD.style.display = "none";
	telegraph.style.display = "none";
	diagram.style.display = "none";
	governor.style.display = "none";
	condition.style.display = "none";

	for (var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.backgroundColor = '';
		menuli[menulixx].style.color = 'white';
	}
	this.style.color = 'yellow';
	this.style.backgroundColor = " #9badaf"
}
acontrolRoom.onclick = function () {
	document.getElementById('safety').src = document.getElementById('safety').getAttribute("data-src")
	if (clicksafesys == 0) {
		// $('#safety').css('display', 'none')
		$('#cSafetyHome').css('display', 'none')
		$('#safety').css('opacity', 0)
		$('#safesysbtn').css('display', 'none')
	}
	// else {
	// 	$('#safety').css('display', 'block')
	// }
	// $('#safesysbtn').css('opacity', 0)
	aconditionx = 0
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "block";
	// controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	threeD.style.display = "none";
	telegraph.style.display = "none";
	diagram.style.display = "none";
	governor.style.display = "none";
	condition.style.display = "none";

	for (var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.backgroundColor = '';
		menuli[menulixx].style.color = 'white';
	}
	this.style.color = 'yellow';
	this.style.backgroundColor = " #9badaf"
}
// acontrolPanel.onclick = function() {
// 	homepage.style.display = "none";
// 	bridge.style.display = "none";
// 	controlRoom.style.display = "none";
// 	controlPanel.style.display = "block";
// 	local.style.display = "none";
// 	schmaticDiagram.style.display = "none";
// 	threeD.style.display = "none";
// 	telegraph.style.display = "none";
// 	diagram.style.display = "none";

// 	for(var menulixx = 0; menulixx < menuli.length; menulixx++) {
// 		menuli[menulixx].style.color = 'white';
// 	}
// 	this.style.color = 'yellow';
// }
alocal.onclick = function () {
	document.getElementById('wheelstart').src = document.getElementById('wheelstart').getAttribute("data-src")
	document.getElementById('wheeloil1').src = document.getElementById('wheeloil1').getAttribute("data-src")
	document.getElementById('wheeloil1_5').src = document.getElementById('wheeloil1_5').getAttribute("data-src")
	document.getElementById('wheeloil2').src = document.getElementById('wheeloil2').getAttribute("data-src")
	document.getElementById('wheeloil3').src = document.getElementById('wheeloil3').getAttribute("data-src")
	document.getElementById('wheeloil4').src = document.getElementById('wheeloil4').getAttribute("data-src")

	document.getElementById('panel').src = document.getElementById('panel').getAttribute("data-src")
	document.getElementById('panel_s').src = document.getElementById('panel_s').getAttribute("data-src")
	document.getElementById('panel_1').src = document.getElementById('panel_1').getAttribute("data-src")
	document.getElementById('panel_2').src = document.getElementById('panel_2').getAttribute("data-src")
	document.getElementById('panel_3').src = document.getElementById('panel_3').getAttribute("data-src")
	document.getElementById('panel_4').src = document.getElementById('panel_4').getAttribute("data-src")
	document.getElementById('panel_5').src = document.getElementById('panel_5').getAttribute("data-src")

	document.getElementById('sanweijipang').src = document.getElementById('sanweijipang').getAttribute("data-src")

	aconditionx = 0
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	// controlPanel.style.display = "none";
	local.style.display = "block";
	schmaticDiagram.style.display = "none";
	threeD.style.display = "none";
	telegraph.style.display = "none";
	diagram.style.display = "none";
	governor.style.display = "none";
	condition.style.display = "none";

	for (var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.backgroundColor = '';
		menuli[menulixx].style.color = 'white';
	}
	this.style.color = 'yellow';
	this.style.backgroundColor = " #9badaf"
}

// ZM-----------

var lPic = document.getElementById('lpicture');
var lPiced = lPic.getElementsByTagName('img');

for (var i = 0; i < lPiced.length; i++) {

	lPiced[i].onmouseover = function () {
		startMove(this, 'opacity', 100);
	};
	lPiced[i].onmouseout = function () {
		startMove(this, 'opacity', 0);
	};
}
// “结构总览”的跳转
// white.onclick = function(){
// 	lmainsys.style.display = "none";
// 	lpanel.style.display = "none";
// 	lopwheel.style.display = "none";
// 	lgov.style.display = "none";
// 	ltele.style.display = "block";
// 	l2d.style.display = "none";
// }


// jquery 点击变色，其余恢复
$('#localmenu li').on('click', function () {

	// this.color = "rgb(112, 42, 89)";
	$(this).css({
		'border': ' 2px solid white',

		'background-color': '#9EACAE',
		'color': 'yellow'
	});
	$(this).siblings().css({
		'border': ' 1px solid white',
		'background-color': ' rgb(104, 156, 199)',
		'color': 'white'

	});
})


$('#pstop').on('mousedown', function () {
	startMove(this, 'opacity', 100);
})

$('#pstop').on('mouseup', function () {
	startMove(this, 'opacity', 0);
})
var x = 0;
var y = 0;
$('#pswitch1').on('click', function () {

	x += 1;
	if (x % 2 == 1) {
		startMove(this, 'opacity', 100);
		$('#touming').on('click', function () {
			if (x % 2 == 1) {
				$('#pswitch2').css('display', 'block');
				document.getElementById('plaheadLed').style.backgroundColor = '#085A13';
				document.getElementById('plasternLed').style.backgroundColor = '#FF0000';

				document.getElementById('olaheadLed').style.backgroundColor = '#085A13';
				document.getElementById('olasternLed').style.backgroundColor = '#FF0000';

				document.getElementById('glaheadLed').style.backgroundColor = '#085A13';
				document.getElementById('glasternLed').style.backgroundColor = '#FF0000';

				document.getElementById('tlaheadLed').style.backgroundColor = '#085A13';
				document.getElementById('tlasternLed').style.backgroundColor = '#FF0000';

				document.getElementById('lhandle2').style.transformOrigin = '31% 31%';
				document.getElementById('lhandle2').style.transform = 'rotate(' + 0 + 'deg)';
				lhandle2x += 1;
				// controlLocation();
				document.getElementById('laheadLed').style.backgroundColor = '#085A13';
				document.getElementById('lasternLed').style.backgroundColor = '#FF0000';
			}
		})
		$('#touming2').on('click', function () {
			$('#pswitch2').css('display', 'none');
			document.getElementById('plaheadLed').style.backgroundColor = '#00FF00';
			document.getElementById('plasternLed').style.backgroundColor = '#800000';

			document.getElementById('olaheadLed').style.backgroundColor = '#00FF00';
			document.getElementById('olasternLed').style.backgroundColor = '#800000';

			document.getElementById('glaheadLed').style.backgroundColor = '#00FF00';
			document.getElementById('glasternLed').style.backgroundColor = '#800000';

			document.getElementById('tlaheadLed').style.backgroundColor = '#00FF00';
			document.getElementById('tlasternLed').style.backgroundColor = '#800000';

			document.getElementById('lhandle2').style.transformOrigin = '31% 31%';
			document.getElementById('lhandle2').style.transform = 'rotate(' + 90 + 'deg)';
			lhandle2x += 1;
			// controlLocation();
			document.getElementById('laheadLed').style.backgroundColor = '#00FF00';
			document.getElementById('lasternLed').style.backgroundColor = '#800000';

		})
	}
	if (x % 2 == 0) {
		startMove(this, 'opacity', 0);
		$('#touming').on('click', function () {
			$('#pswitch2').css('display', 'none');

		})
		$('#touming2').on('click', function () {
			$('#pswitch2').css('display', 'none');
		})
	}

})

// $('#pswitch3').on('click', function () {
// 	y += 1;console.log(y)
// 	if (y % 2 == 1) {

// 		startMove(this, 'opacity', 100);
// 		$('#touming3').on('click', function () {
// 			$('#pswitch4').css('display', 'block');
// 			document.getElementById('glemergencyControlLed').style.backgroundColor = '#FF0000';
// 			document.getElementById('glbridgeControlLed').style.backgroundColor = '#085A13';
// 			document.getElementById('glcontrolRoomControlLed').style.backgroundColor = ' #085A13';

// 			document.getElementById('plemergencyControlLed').style.backgroundColor = '#FF0000';
// 			document.getElementById('plbridgeControlLed').style.backgroundColor = '#085A13';
// 			document.getElementById('plcontrolRoomControlLed').style.backgroundColor = ' #085A13';

// 			document.getElementById('olemergencyControlLed').style.backgroundColor = '#FF0000';
// 			document.getElementById('olbridgeControlLed').style.backgroundColor = '#085A13';
// 			document.getElementById('olcontrolRoomControlLed').style.backgroundColor = ' #085A13';

// 			document.getElementById('tlemergencyControlLed').style.backgroundColor = '#FF0000';
// 			document.getElementById('tlbridgeControlLed').style.backgroundColor = '#085A13';
// 			document.getElementById('tlcontrolRoomControlLed').style.backgroundColor = ' #085A13';

// 			document.getElementById('plbcr').style.borderColor = 'white';
// 			document.getElementById('plecr').style.borderColor = 'white';
// 			document.getElementById('plloc').style.borderColor = '#FFC200';

// 			document.getElementById('lemergencyControlLed').style.backgroundColor = '#FF0000';
// 			document.getElementById('lbridgeControlLed').style.backgroundColor = '#085A13';
// 			// document.getElementById('lcontrolRoomControlLed').style.backgroundColor = ' #085A13';


// 			document.getElementById('lhandle1').style.transformOrigin = '31% 31%';
// 			document.getElementById('lhandle1').style.transform = 'rotate(' + 90 + 'deg)';
// 			lhandle1x += 1;
// 			// controlLocation();

// 			document.getElementById('plcontrolRoomControlLed').style.backgroundColor = ' #085A13';
// 			document.getElementById('olcontrolRoomControlLed').style.backgroundColor = ' #085A13';
// 			document.getElementById('glcontrolRoomControlLed').style.backgroundColor = ' #085A13';
// 			document.getElementById('tlcontrolRoomControlLed').style.backgroundColor = ' #085A13';
// 			document.getElementById('lcontrolRoomControlLed').style.backgroundColor = ' #085A13';
// 			document.getElementById('lemergencyControlLed').style.backgroundColor = '#FF0000';
// 			document.getElementById('lbcrled').style.backgroundColor = 'white';
// 			document.getElementById('lecrled').style.backgroundColor = 'white';
// 			document.getElementById('llocled').style.backgroundColor = '#FFC200';
// 			document.getElementById('plbcrled').style.backgroundColor = 'white';
// 			document.getElementById('plecrled').style.backgroundColor = 'white';
// 			document.getElementById('pllocled').style.backgroundColor = '#FFC200';
// 			document.getElementById('plbcr').style.borderColor = 'white';
// 			document.getElementById('plecr').style.borderColor = 'white';
// 			document.getElementById('plloc').style.borderColor = '#FFC200';
// 			document.getElementById('lbcr').style.borderColor = 'white';
// 			document.getElementById('lecr').style.borderColor = 'white';
// 			document.getElementById('lloc').style.borderColor = '#FFC200';
// 		})
// 		$('#touming4').on('click', function () {
// 			$('#pswitch4').css('display', 'none');
// 			document.getElementById('plbcr').style.borderColor = '#FFC200';
// 			document.getElementById('plecr').style.borderColor = 'white';
// 			document.getElementById('plloc').style.borderColor = 'white';
// 			document.getElementById('pllocled').style.backgroundColor = 'white';

// 			document.getElementById('lhandle1').style.transformOrigin = '31% 31%';
// 			document.getElementById('lhandle1').style.transform = 'rotate(' + 0 + 'deg)';
// 			lhandle1x += 1;

// 		})
// 	}

// 	if (y % 2 == 0) {


// 		startMove(this, 'opacity', 0);


// 		// $('#touming3').on('click',function(){
// 		// 	$('#pswitch4').css('display','none');

// 		// })
// 		// $('#touming3').on('click', function () {

// 		// })
// 		$('#touming4').on('click', function () {
// 			$('#pswitch4').css('display', 'none');
// 		})

// 	}

// })
$('#pswitch3').on('click', function () {
	y += 1;
	if (y % 2 == 1) {
		startMove(this, 'opacity', 100);
	}
	if (y % 2 == 0) {
		startMove(this, 'opacity', 0);
	}
})
var lbtn1sio = 0
$('#touming3').on('click', function () {
	if (y % 2 == 1) {
		controlLocation();
		lbtn1sio = 1
		$('#pswitch4').css('display', 'block');

		document.getElementById('glemergencyControlLed').style.backgroundColor = '#FF0000';
		document.getElementById('glbridgeControlLed').style.backgroundColor = '#085A13';
		document.getElementById('glcontrolRoomControlLed').style.backgroundColor = ' #085A13';

		document.getElementById('plemergencyControlLed').style.backgroundColor = '#FF0000';
		document.getElementById('plbridgeControlLed').style.backgroundColor = '#085A13';
		document.getElementById('plcontrolRoomControlLed').style.backgroundColor = ' #085A13';

		document.getElementById('olemergencyControlLed').style.backgroundColor = '#FF0000';
		document.getElementById('olbridgeControlLed').style.backgroundColor = '#085A13';
		document.getElementById('olcontrolRoomControlLed').style.backgroundColor = ' #085A13';

		document.getElementById('tlemergencyControlLed').style.backgroundColor = '#FF0000';
		document.getElementById('tlbridgeControlLed').style.backgroundColor = '#085A13';
		document.getElementById('tlcontrolRoomControlLed').style.backgroundColor = ' #085A13';

		document.getElementById('plbcr').style.borderColor = 'white';
		document.getElementById('plecr').style.borderColor = 'white';
		document.getElementById('plloc').style.borderColor = '#FFC200';
		document.getElementById('tbridge').style.borderColor = 'white';
		document.getElementById('tecr').style.borderColor = 'white';
		document.getElementById('tlocal').style.borderColor = '#FFC200';

		document.getElementById('bbridge').style.borderColor = 'white';
		document.getElementById('becr').style.borderColor = 'white';
		document.getElementById('blocal').style.borderColor = '#FFC200';
		document.getElementById('lemergencyControlLed').style.backgroundColor = '#FF0000';
		document.getElementById('lbridgeControlLed').style.backgroundColor = '#085A13';
		// document.getElementById('lcontrolRoomControlLed').style.backgroundColor = ' #085A13';


		document.getElementById('lhandle1').style.transformOrigin = '31% 31%';
		document.getElementById('lhandle1').style.transform = 'rotate(' + 90 + 'deg)';
		lhandle1x += 1;
		// controlLocation();

		document.getElementById('plcontrolRoomControlLed').style.backgroundColor = ' #085A13';
		document.getElementById('olcontrolRoomControlLed').style.backgroundColor = ' #085A13';
		document.getElementById('glcontrolRoomControlLed').style.backgroundColor = ' #085A13';
		document.getElementById('tlcontrolRoomControlLed').style.backgroundColor = ' #085A13';
		document.getElementById('lcontrolRoomControlLed').style.backgroundColor = ' #085A13';
		document.getElementById('lemergencyControlLed').style.backgroundColor = '#FF0000';
		document.getElementById('lbcrled').style.backgroundColor = 'white';
		document.getElementById('lecrled').style.backgroundColor = 'white';
		document.getElementById('llocled').style.backgroundColor = '#FFC200';
		document.getElementById('plbcrled').style.backgroundColor = 'white';
		document.getElementById('plecrled').style.backgroundColor = 'white';
		document.getElementById('pllocled').style.backgroundColor = '#FFC200';
		document.getElementById('plbcr').style.borderColor = 'white';
		document.getElementById('plecr').style.borderColor = 'white';
		document.getElementById('plloc').style.borderColor = '#FFC200';
		document.getElementById('lbcr').style.borderColor = 'white';
		document.getElementById('lecr').style.borderColor = 'white';
		document.getElementById('lloc').style.borderColor = '#FFC200';
		document.getElementById('tbridge').style.borderColor = 'white';
		document.getElementById('tecr').style.borderColor = 'white';
		document.getElementById('tlocal').style.borderColor = '#FFC200';
		document.getElementById('tbridgeLed').style.backgroundColor = 'white';
		document.getElementById('ttecrLed').style.backgroundColor = 'white';
		document.getElementById('tlocalLed').style.backgroundColor = '#FFC200';

		document.getElementById('bbridge').style.borderColor = 'white';
		document.getElementById('becr').style.borderColor = 'white';
		document.getElementById('blocal').style.borderColor = '#FFC200';
		document.getElementById('bbridgeLed').style.backgroundColor = 'white';
		// document.getElementById('becrLed').style.backgroundColor = 'white';
		document.getElementById('blocalLed').style.backgroundColor = '#FFC200';


	}


})
$('#touming4').on('click', function () {
	// controlLocation();
	if (y % 2 == 1) {
		lhandle1x += 1;
		lbtn1sio = 2
		$('#pswitch4').css('display', 'none');
		document.getElementById('plbcr').style.borderColor = '#FFC200';
		document.getElementById('plbcrled').style.backgroundColor = '#FFC200';
		document.getElementById('plecr').style.borderColor = 'white';
		document.getElementById('plloc').style.borderColor = 'white';
		document.getElementById('pllocled').style.backgroundColor = 'white';
		document.getElementById('lbcrled').style.backgroundColor = '#FFC200';
		document.getElementById('lecrled').style.backgroundColor = 'white';
		document.getElementById('llocled').style.backgroundColor = 'white';
		document.getElementById('lbcr').style.borderColor = '#FFC200';
		document.getElementById('lecr').style.borderColor = 'white';
		document.getElementById('lloc').style.borderColor = 'white';

		document.getElementById('glemergencyControlLed').style.backgroundColor = 'rgb(128, 0, 0)';
		document.getElementById('glbridgeControlLed').style.backgroundColor = '#00FF00';
		document.getElementById('glcontrolRoomControlLed').style.backgroundColor = ' #085A13';

		document.getElementById('plemergencyControlLed').style.backgroundColor = 'rgb(128, 0, 0)';
		document.getElementById('plbridgeControlLed').style.backgroundColor = '#00FF00';
		document.getElementById('plcontrolRoomControlLed').style.backgroundColor = ' #085A13';

		document.getElementById('olemergencyControlLed').style.backgroundColor = 'rgb(128, 0, 0)';
		document.getElementById('olbridgeControlLed').style.backgroundColor = '#00FF00';
		document.getElementById('olcontrolRoomControlLed').style.backgroundColor = ' #085A13';

		document.getElementById('tlemergencyControlLed').style.backgroundColor = 'rgb(128, 0, 0)';
		document.getElementById('tlbridgeControlLed').style.backgroundColor = '#00FF00';
		document.getElementById('tlcontrolRoomControlLed').style.backgroundColor = ' #085A13';

		document.getElementById('lcontrolRoomControlLed').style.backgroundColor = ' #085A13';
		document.getElementById('lemergencyControlLed').style.backgroundColor = 'rgb(128, 0, 0)';
		document.getElementById('lbridgeControlLed').style.backgroundColor = '#00FF00';

		document.getElementById('bbridge').style.borderColor = '#FFC200';
		document.getElementById('becr').style.borderColor = 'white';
		document.getElementById('blocal').style.borderColor = 'white';
		document.getElementById('bbridgeLed').style.backgroundColor = '#FFC200';
		// document.getElementById('becrLed').style.backgroundColor = 'white';
		document.getElementById('blocalLed').style.backgroundColor = 'white';

		document.getElementById('tbridge').style.borderColor = '#FFC200';
		document.getElementById('tecr').style.borderColor = 'white';
		document.getElementById('tlocal').style.borderColor = 'white';
		document.getElementById('tbridgeLed').style.backgroundColor = '#FFC200';
		document.getElementById('ttecrLed').style.backgroundColor = 'white';
		document.getElementById('tlocalLed').style.backgroundColor = 'white';

		if (thandlex % 2 == 1) {//集控室控制
			document.getElementById('glcontrolRoomControlLed').style.backgroundColor = ' #00FF00';

			document.getElementById('plbcr').style.borderColor = 'white';
			document.getElementById('plecr').style.borderColor = '#FFC200';
			document.getElementById('plloc').style.borderColor = 'white';
			document.getElementById('lbcr').style.borderColor = 'white';
			document.getElementById('lecr').style.borderColor = '#FFC200';
			document.getElementById('lloc').style.borderColor = 'white';
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
		}
		document.getElementById('lhandle1').style.transformOrigin = '31% 31%';
		document.getElementById('lhandle1').style.transform = 'rotate(' + 0 + 'deg)';
		// lhandle1x += 1;	
	}
	if (y % 2 == 0) {//平衡参数landle1x，使其连续
		lhandle1x += 1;
	}


})

//油门开关
var wx = 0;
var yy = 0;
document.getElementById('wheelswitch').onclick = function () {
	wx += 1;
	console.log('wx', wx);
	if (wx % 2 == 1) {
		startMove(this, 'opacity', 100);
		lhandle3x = wx;
		console.log('lhandle3x', lhandle3x);
		document.getElementById('lhandle3').style.transformOrigin = '31% 31%';
		document.getElementById('lhandle3').style.transform = 'rotate(' + 90 + 'deg)';
		yy += 1;
	}

	if (wx % 2 == 0) {
		startMove(this, 'opacity', 0);
		lhandle3x = wx - 2;
		console.log('lhandle3x', lhandle3x);
		document.getElementById('lhandle3').style.transformOrigin = '31% 31%';
		document.getElementById('lhandle3').style.transform = 'rotate(' + 0 + 'deg)';
		// 	if (lhandle3x % 2 == 0) {
		// 	   $('#lhandle3').css('transformOrigin','31% 31%');
		// 	   $('#lhandle3').css('transform','rotate(' + 90 + 'deg)');
		//    } else {
		// 	   $('#lhandle3').css('transformOrigin','31% 31%');
		// 	   $('#lhandle3').css('transform','rotate(' + 0 + 'deg)');

		//    }
		yy -= 1;
	}

}
// document.getElementById('conBefore').onclick=function(){//原始状况
// 	wx=0;console.log('wx',wx);
// 	startMove(document.getElementById('wheelswitch'), 'opacity', 0);
// }

var impactwheelx = 0;
document.getElementById('impactwheel').onclick = function () {
	impactwheelx += 1;
	console.log('imx', impactwheelx);
	if (impactwheelx % 2 == 1) {
		startMove(this, 'opacity', 100);
		document.getElementById('lhandwheelDis').style.border = '1px solid red'
		document.getElementById('lhandwheelCon').style.border = ''

		lwheelx1x = 0;
		var lw1c = document.getElementById("lwheel1canvas");
		var lw1ctx = lw1c.getContext("2d");
		lw1ctx.clearRect(0, 0, 140, 11);
		lw1ctx.beginPath();
		lw1ctx.rect(0, 0, 0, 11);
		lw1ctx.fillStyle = "red"
		lw1ctx.fill();

	}
	if (impactwheelx % 2 == 0) {

		startMove(this, 'opacity', 0);
		document.getElementById('lhandwheelDis').style.border = ''
		document.getElementById('lhandwheelCon').style.border = '1px solid red'

		lwheelx1x = 5;
		var lw1c = document.getElementById("lwheel1canvas");
		var lw1ctx = lw1c.getContext("2d");
		lw1ctx.clearRect(0, 0, 140, 11);
		lw1ctx.beginPath();
		lw1ctx.rect(0, 0, 140, 11);
		lw1ctx.fillStyle = "red"
		lw1ctx.fill();
	}
}
// lwheel1Right.onclick = function () {
// 	lwheelx1 += 45;
// 	lwheel1.style.transform = 'rotate(' + lwheelx1 + 'deg)';
// 	lwheelx1x -= 1;
// 	if (lwheelx1x <= 0) {
// 		lwheelx1x = 0;
// 	}
// 	if (lwheelx1x <= 2) {
// 		document.getElementById('lhandwheelDis').style.border = '1px solid red'
// 		document.getElementById('lhandwheelCon').style.border = ''
// 		// startMove($('#impactwheel'), 'opacity', 0);
// 		startMove(document.getElementById('impactwheel'), 'opacity', 0);
// 		impactwheelx = 0;
// 		console.log('imx', impactwheelx);
// 	} else {
// 		document.getElementById('lhandwheelDis').style.border = ''
// 		document.getElementById('lhandwheelCon').style.border = '1px solid red'
// 		// startMove($('#impactwheel'), 'opacity', 100);
// 	}

// 	lprintPancel1(lwheelx1x);
// 	console.log('lwheelx1x', lwheelx1x)
// }
// lwheel1Left.onclick = function () {
// 	lwheelx1 -= 45;
// 	lwheel1.style.transform = 'rotate(' + lwheelx1 + 'deg)';
// 	lwheelx1x += 1;
// 	if (lwheelx1x >= 5) {
// 		lwheelx1x = 5;
// 	}
// 	if (lwheelx1x <= 2) {
// 		document.getElementById('lhandwheelDis').style.border = '1px solid red'
// 		// document.getElementById('lhandwheelDis').style.color='yellow'
// 		document.getElementById('lhandwheelCon').style.border = ''

// 	} else {
// 		document.getElementById('lhandwheelDis').style.border = ''
// 		document.getElementById('lhandwheelCon').style.border = '1px solid red'
// 		// startMove($('#impactwheel'), 'opacity', 100);	
// 		startMove(document.getElementById('impactwheel'), 'opacity', 100);
// 		impactwheelx = 0;
// 		console.log('imx', impactwheelx);
// 	}
// 	lprintPancel1(lwheelx1x);
// 	console.log('lwheelx1x', lwheelx1x)
// }
var sio = 0;
document.getElementById('conBefore').onclick = function () { //原始状况
	sio = 1;
	wx = 0; ydx = 0; aconditionx += 1
	console.log('wx', wx);
	yy = 0;
	impactwheelx = 1;
	startMove(document.getElementById('impactwheel'), 'opacity', 100);
	console.log('imx', impactwheelx);
	value16x = 0;
	value122x = 0;
	value3x = 0;
	value116x = 0;
	value118x = 0;
	valueMainx = 0;
	condition.style.display = 'none';
	// conditionX+=1;
	//气动操作车钟图
	sdc2tx.drawImage(picMap, 180, 521, 123, 88, 69, 481, 155, 100)
	document.getElementById('yunxing').style.display = 'none'
	document.getElementById('ahead').style.display = 'none'

	// schematicX = 0 用下面的两行代码代替
	schematicDiagramPicture.src = "img/01.png";
	sdc2tx.clearRect(667, 68, 380, 209);
	// document.getElementById('schematicDiagramPicture').style.display = 'block'
	document.getElementById('bridgecontrol').style.display = 'none'

	//下面是取消故障的代码
	document.getElementById('SHDC').style.color = 'white'
	document.getElementById('SHDA').style.color = 'white'
	document.getElementById('SLDC').style.color = 'white'
	document.getElementById('SLDA').style.color = 'white'
	// document.getElementsById('box').checked = false

	for (let i = 0; i < boxes.length; i++) {
		boxes[i].checked = false;
	}
	for (let i = 0; i < lights.length; i++) {
		lights[i].style.display = 'none'
	}
	document.getElementById('l2').style.opacity = '0'
	document.getElementById('l3').style.opacity = '0'
	document.getElementById('l4').style.opacity = '0'
	document.getElementById('l8').style.opacity = '0'
	document.getElementById('l9').style.opacity = '0'
	document.getElementById('l10').style.opacity = '0'
	document.getElementById('l11').style.opacity = '0'
	document.getElementById('l12').style.opacity = '0'
	document.getElementById('l13').style.opacity = '0'
	document.getElementById('l14').style.opacity = '0'
	document.getElementById('l15').style.opacity = '0'
	document.getElementById('l16').style.opacity = '0'
	document.getElementById('l17').style.opacity = '0'
	document.getElementById('l18').style.opacity = '0'
	document.getElementById('l19').style.opacity = '0'
	document.getElementById('l20').style.opacity = '0'
	document.getElementById('l21').style.opacity = '0'

	document.getElementById('lright3').style.display = 'none'
	document.getElementById('lright4').style.display = 'none'

	document.getElementById('cseqBridge').style.backgroundColor = '#c3c3c3'
	document.getElementById('cseqManualbcr').style.backgroundColor = '#c3c3c3'

	btelegraph1lever.style.top = '-335px';
	z = 0;
	$('#wheelstart').css('display', 'none');
	$('#wheeloil1').css('display', 'none');
	$('#wheeloil1.5').css('display', 'none');
	$('#wheeloil2').css('display', 'none');
	$('#wheeloil3').css('display', 'none');
	$('#wheeloil4').css('display', 'none');
	btelegraph1lever.style.top = '-330px';
	ttelegraph1lever.style.top = '0px';
	ttelegraph2lever.style.top = '0px';
	ttelegraph2watch.innerHTML = 'STOP';

	lshutdownLed.style.backgroundColor = ' #800000';

	document.getElementById('lhandwheelDis').style.border = '1px solid red'
	document.getElementById('lhandwheelCon').style.border = ''

	// startMove(document.getElementById('impactwheel'), 'opacity', 0);
	startMove(document.getElementById('wheelswitch'), 'opacity', 0);

	//调速器
	$('#light1_1').css('opacity', 0);
	$('#light1_2').css('opacity', 1);
	$('#light2_1').css('opacity', 0);
	$('#light2_2').css('opacity', 0);
	$('#light2_3').css('opacity', 1);
	$('#light2_4').css('opacity', 0);
	$('#light2_5').css('opacity', 0);
	rmpxlim = 80;
	ydlim = 92;


	lhandle1x = 1; //机旁页面扳手 指向LOCAL
	lhandle1.style.transformOrigin = '31% 31%';
	lhandle1.style.transform = 'rotate(' + 90 + 'deg)';
	lhandle2x = 1; //标识位 1为AHEAD 0为ASTERN
	lhandle2.style.transformOrigin = '31% 31%';
	lhandle2.style.transform = 'rotate(' + 90 + 'deg)';
	lhandle3x = 0; //标识位 0为LOCK 1为UNLOCK
	lhandle3.style.transformOrigin = '31% 31%';
	lhandle3.style.transform = 'rotate(' + 0 + 'deg)';
	thandlex = 0; //集控车钟页面扳手 指向BRIDGE
	thandle.style.transformOrigin = '31% 31%';
	thandle.style.transform = 'rotate(' + 90 + 'deg)';
	controlLocation();
	//机旁的手轮
	lwheelx1x = 0; //
	lprintPancel1(lwheelx1x);
	lwheelx2x = 0; //
	lprintPancel2(lwheelx2x);

	bStandBy.style.backgroundColor = '#01D867';
	bStandBy.innerHTML = 'FWE';
	cStandBy.style.backgroundColor = '#01D867';
	cStandBy.innerHTML = 'FWE';

	yd = 0;
	ydx = 0;
	rmp = 0;
	rmpx = 0;
	brmp = 0;
	trmp = 0;
	lrmp = 0;
	//	LED()
	// schematicX = 0;

	briled = 5;
	telled = 5;
	locled = 5;
	briLEDclear(briled);
	telLEDclear(briled, telled);
	lclearSpeedLed(briled, locled);
	btled1[telled].style.background = ' #00FF00';
	btled2[telled].style.background = ' #00FF00';
}
function onBefore() {
	sio = 1;
	wx = 0; ydx = 0; aconditionx += 1
	console.log('wx', wx);
	yy = 0;
	impactwheelx = 1;
	startMove(document.getElementById('impactwheel'), 'opacity', 100);
	console.log('imx', impactwheelx);
	value16x = 0;
	value122x = 0;
	value3x = 0;
	value116x = 0;
	value118x = 0;
	valueMainx = 0;
	condition.style.display = 'none';
	// conditionX+=1;
	//气动操作车钟图
	sdc2tx.drawImage(picMap, 180, 521, 123, 88, 69, 481, 155, 100)
	document.getElementById('yunxing').style.display = 'none'
	document.getElementById('ahead').style.display = 'none'

	// schematicX = 0 用下面的两行代码代替
	schematicDiagramPicture.src = "img/01.png";
	sdc2tx.clearRect(667, 68, 380, 209);
	// document.getElementById('schematicDiagramPicture').style.display = 'block'
	document.getElementById('bridgecontrol').style.display = 'none'

	//下面是取消故障的代码
	document.getElementById('SHDC').style.color = 'white'
	document.getElementById('SHDA').style.color = 'white'
	document.getElementById('SLDC').style.color = 'white'
	document.getElementById('SLDA').style.color = 'white'
	// document.getElementsById('box').checked = false

	for (let i = 0; i < boxes.length; i++) {
		boxes[i].checked = false;
	}
	for (let i = 0; i < lights.length; i++) {
		lights[i].style.display = 'none'
	}
	document.getElementById('l2').style.opacity = '0'
	document.getElementById('l3').style.opacity = '0'
	document.getElementById('l4').style.opacity = '0'
	document.getElementById('l8').style.opacity = '0'
	document.getElementById('l9').style.opacity = '0'
	document.getElementById('l10').style.opacity = '0'
	document.getElementById('l11').style.opacity = '0'
	document.getElementById('l12').style.opacity = '0'
	document.getElementById('l13').style.opacity = '0'
	document.getElementById('l14').style.opacity = '0'
	document.getElementById('l15').style.opacity = '0'
	document.getElementById('l16').style.opacity = '0'
	document.getElementById('l17').style.opacity = '0'
	document.getElementById('l18').style.opacity = '0'
	document.getElementById('l19').style.opacity = '0'
	document.getElementById('l20').style.opacity = '0'
	document.getElementById('l21').style.opacity = '0'

	document.getElementById('lright3').style.display = 'none'
	document.getElementById('lright4').style.display = 'none'

	document.getElementById('cseqBridge').style.backgroundColor = '#c3c3c3'
	document.getElementById('cseqManualbcr').style.backgroundColor = '#c3c3c3'

	btelegraph1lever.style.top = '-335px';
	z = 0;
	$('#wheelstart').css('display', 'none');
	$('#wheeloil1').css('display', 'none');
	$('#wheeloil1.5').css('display', 'none');
	$('#wheeloil2').css('display', 'none');
	$('#wheeloil3').css('display', 'none');
	$('#wheeloil4').css('display', 'none');
	btelegraph1lever.style.top = '-330px';
	ttelegraph1lever.style.top = '0px';
	ttelegraph2lever.style.top = '0px';
	ttelegraph2watch.innerHTML = 'STOP';

	lshutdownLed.style.backgroundColor = ' #800000';

	document.getElementById('lhandwheelDis').style.border = '1px solid red'
	document.getElementById('lhandwheelCon').style.border = ''

	// startMove(document.getElementById('impactwheel'), 'opacity', 0);
	startMove(document.getElementById('wheelswitch'), 'opacity', 0);

	//调速器
	$('#light1_1').css('opacity', 0);
	$('#light1_2').css('opacity', 1);
	$('#light2_1').css('opacity', 0);
	$('#light2_2').css('opacity', 0);
	$('#light2_3').css('opacity', 1);
	$('#light2_4').css('opacity', 0);
	$('#light2_5').css('opacity', 0);
	rmpxlim = 80;
	ydlim = 92;


	lhandle1x = 1; //机旁页面扳手 指向LOCAL
	lhandle1.style.transformOrigin = '31% 31%';
	lhandle1.style.transform = 'rotate(' + 90 + 'deg)';
	lhandle2x = 1; //标识位 1为AHEAD 0为ASTERN
	lhandle2.style.transformOrigin = '31% 31%';
	lhandle2.style.transform = 'rotate(' + 90 + 'deg)';
	lhandle3x = 0; //标识位 0为LOCK 1为UNLOCK
	lhandle3.style.transformOrigin = '31% 31%';
	lhandle3.style.transform = 'rotate(' + 0 + 'deg)';
	thandlex = 0; //集控车钟页面扳手 指向BRIDGE
	thandle.style.transformOrigin = '31% 31%';
	thandle.style.transform = 'rotate(' + 90 + 'deg)';
	controlLocation();
	//机旁的手轮
	lwheelx1x = 0; //
	lprintPancel1(lwheelx1x);
	lwheelx2x = 0; //
	lprintPancel2(lwheelx2x);

	bStandBy.style.backgroundColor = '#01D867';
	bStandBy.innerHTML = 'FWE';
	cStandBy.style.backgroundColor = '#01D867';
	cStandBy.innerHTML = 'FWE';

	yd = 0;
	ydx = 0;
	rmp = 0;
	rmpx = 0;
	brmp = 0;
	trmp = 0;
	lrmp = 0;
	//	LED()
	// schematicX = 0;

	briled = 5;
	telled = 5;
	locled = 5;
	briLEDclear(briled);
	telLEDclear(briled, telled);
	lclearSpeedLed(briled, locled);
}

//油门开关控制油门的逻辑
var z = 0;

var pwheelx1x = 0;

$('#wheeltouming').on('click', function () {
	if (yy == 1) {
		z += 1;
		if (z == 1) {
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
			lrmp = 30;
			lwheelx2x = 4;
			lprintPancel2(4);

		}
		if (z == 2) {
			// point5 += 20
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
			lrmp = 50;
			lwheelx2x = 5;
			lprintPancel2(5);
		}
		if (z == 3) {
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
			lrmp = 60;
			lwheelx2x = 7;
			lprintPancel2(7);
		}
		if (z == 4) {
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
			lrmp = 70;
			lwheelx2x = 8;
			lprintPancel2(8);
		}
		if (z == 5) {
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
			lrmp = 80;
			lwheelx2x = 9;
			lprintPancel2(9);
		}
		if (z == 6) {
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
			lrmp = 90;
			lwheelx2x = 11;
			lprintPancel2(11);
		}
		if (z >= 6) {
			z = 6;
		}
	}
})
$('#wheeltoumingleft').on('click', function () {
	if (yy == 1) {
		z -= 1;
		if (z == 1) {
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
			lrmp = 30;
			lwheelx2x = 4;
			lprintPancel2(4);
		}
		if (z == 2) {
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
			lrmp = 50;
			lwheelx2x = 5;
			lprintPancel2(5);
		}
		if (z == 3) {
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
			lrmp = 60;
			lwheelx2x = 7;
			lprintPancel2(7);
		}
		if (z == 4) {
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
			lrmp = 70;
			lwheelx2x = 8;
			lprintPancel2(8);
		}
		if (z == 5) {
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
			lrmp = 80;
			lwheelx2x = 9;
			lprintPancel2(9);
		}
		if (z == 6) {
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
			lrmp = 90;
			lwheelx2x = 11;
			lprintPancel2(11);
		}
		if (z == 0) {
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
		if (z <= 0) {
			z = 0;
		}
	}

})

// else{
// 	$('#wheeltouming').on('click',function(){})
// 	$('#wheeltoumingleft').on('click',function(){})
// }


// document.getElementById('glbridgeControlLed').style.backgroundColor = '#00FF00';
// document.getElementById('glemergencyControlLed').style.backgroundColor = '#800000';

// document.getElementById('plbridgeControlLed').style.backgroundColor = '#00FF00';
// document.getElementById('plemergencyControlLed').style.backgroundColor = '#800000';
// document.getElementById('olbridgeControlLed').style.backgroundColor = '#00FF00';
// document.getElementById('olemergencyControlLed').style.backgroundColor = '#800000';
// document.getElementById('tlbridgeControlLed').style.backgroundColor = '#00FF00';
// document.getElementById('tlemergencyControlLed').style.backgroundColor = '#800000';












$('#white1').on('click', function () {
	$('#ltele').css('display', 'block');
	$('#lpanel').css('display', 'none');
	$('#lmainsys').css('display', 'none');
	$('#lgov').css('display', 'none');
	$('#lopwheel').css('display', 'none');
	$('#l2d').css('display', 'none');
	$('#lm_tele').css({
		'border': ' 2px solid white',
		'background-color': '#9EACAE',
		'color': 'yellow'
	});
	$('#lm_tele').siblings().css({
		'border': ' 1px solid white',
		'background-color': '',
		'color': ''

	});
})
$('#white2').on('click', function () {
	$('#ltele').css('display', 'none');
	$('#lpanel').css('display', 'none');
	$('#lmainsys').css('display', 'none');
	$('#lgov').css('display', 'block');
	$('#lopwheel').css('display', 'none');
	$('#l2d').css('display', 'none');
	$('#lm_gov').css({
		'border': ' 2px solid white',
		'background-color': '#9EACAE',
		'color': 'yellow'
	});
	$('#lm_gov').siblings().css({
		'border': ' 1px solid white',
		'background-color': '',
		'color': ''

	});
})
$('#white3').on('click', function () {
	$('#ltele').css('display', 'none');
	$('#lpanel').css('display', 'block');
	$('#lmainsys').css('display', 'none');
	$('#lgov').css('display', 'none');
	$('#lopwheel').css('display', 'none');
	$('#l2d').css('display', 'none');
	$('#lm_panel').css({
		'border': ' 2px solid white',
		'background-color': '#9EACAE',
		'color': 'yellow'
	});
	$('#lm_panel').siblings().css({
		'border': ' 1px solid white',
		'background-color': '',
		'color': ''

	});
})
$('#white4').on('click', function () {
	$('#ltele').css('display', 'none');
	$('#lpanel').css('display', 'none');
	$('#lmainsys').css('display', 'none');
	$('#lgov').css('display', 'none');
	$('#lopwheel').css('display', 'block');
	$('#l2d').css('display', 'none');
	$('#lm_opwheel').css({
		'border': ' 2px solid white',
		'background-color': '#9EACAE',
		'color': 'yellow'
	});
	$('#lm_opwheel').siblings().css({
		'border': ' 1px solid white',
		'background-color': '',
		'color': ''

	});
})



var zmm = 0;
lm_mainsys.onclick = function () {
	zmm = 1;
	lmainsys.style.display = "block";
	lpanel.style.display = "none";
	lopwheel.style.display = "none";
	lgov.style.display = "none";
	ltele.style.display = "none";
	l2d.style.display = "none";
}
lm_panel.onclick = function () {
	zmm = 2;
	lmainsys.style.display = "none";
	lpanel.style.display = "block";
	lopwheel.style.display = "none";
	lgov.style.display = "none";
	ltele.style.display = "none";
	l2d.style.display = "none";

}
lm_gov.onclick = function () {
	zmm = 3;
	lmainsys.style.display = "none";
	lpanel.style.display = "none";
	lopwheel.style.display = "none";
	lgov.style.display = "block";
	ltele.style.display = "none";
	l2d.style.display = "none";
}
lm_opwheel.onclick = function () {
	zmm = 4;
	lmainsys.style.display = "none";
	lpanel.style.display = "none";
	lopwheel.style.display = "block";
	lgov.style.display = "none";
	ltele.style.display = "none";
	l2d.style.display = "none";
}
lm_tele.onclick = function () {
	zmm = 5;
	lmainsys.style.display = "none";
	lpanel.style.display = "none";
	lopwheel.style.display = "none";
	lgov.style.display = "none";
	ltele.style.display = "block";
	l2d.style.display = "none";
}
lm_2d.onclick = function () {
	zmm = 6;
	lmainsys.style.display = "none";
	lpanel.style.display = "none";
	lopwheel.style.display = "none";
	lgov.style.display = "none";
	ltele.style.display = "none";
	l2d.style.display = "block";
}


// if (zmm == 1) {
// 	$('#alocal').on('click', function () {
// 		lmainsys.style.display = "block";
// 		lpanel.style.display = "none";
// 		lopwheel.style.display = "none";
// 		lgov.style.display = "none";
// 		ltele.style.display = "none";
// 		l2d.style.display = "none";
// 		$('#lm_mainsys').css({
// 			'border': ' 2px solid white',
// 			'background-color': '#9EACAE',
// 			'color': 'yellow'
// 		});
// 		$('#lm_mainsys').siblings().css({
// 			'border': ' 1px solid white',
// 			'background-color': '',
// 			'color': 'white'
// 		});
// 	})

// }
// if (zmm == 2) {
// 	$('#alocal').on('click', function () {
// 		lmainsys.style.display = "none";
// 		lpanel.style.display = "block";
// 		lopwheel.style.display = "none";
// 		lgov.style.display = "none";
// 		ltele.style.display = "none";
// 		l2d.style.display = "none";
// 		$('#lm_panel').css({
// 			'border': ' 2px solid white',
// 			'background-color': '#9EACAE',
// 			'color': 'yellow'
// 		});
// 		$('#lm_panel').siblings().css({
// 			'border': ' 1px solid white',
// 			'background-color': '',
// 			'color': 'white'
// 		});
// 	})

// }
// if (zmm == 3) {
// 	$('#alocal').on('click', function () {
// 		lmainsys.style.display = "none";
// 		lpanel.style.display = "none";
// 		lopwheel.style.display = "block";
// 		lgov.style.display = "none";
// 		ltele.style.display = "none";
// 		l2d.style.display = "none";
// 		$('#lm_opwheel').css({
// 			'border': ' 2px solid white',
// 			'background-color': '#9EACAE',
// 			'color': 'yellow'
// 		});
// 		$('#lm_opwheel').siblings().css({
// 			'border': ' 1px solid white',
// 			'background-color': '',
// 			'color': 'white'
// 		});
// 	})

// }
// if (zmm == 4) {
// 	$('#alocal').on('click', function () {
// 		lmainsys.style.display = "none";
// 		lpanel.style.display = "none";
// 		lopwheel.style.display = "none";
// 		lgov.style.display = "block";
// 		ltele.style.display = "none";
// 		l2d.style.display = "none";
// 		$('#lm_gov').css({
// 			'border': ' 2px solid white',
// 			'background-color': '#9EACAE',
// 			'color': 'yellow'
// 		});
// 		$('#lm_gov').siblings().css({
// 			'border': ' 1px solid white',
// 			'background-color': '',
// 			'color': 'white'
// 		});
// 	})

// }
// if (zmm == 5) {
// 	$('#alocal').on('click', function () {
// 		lmainsys.style.display = "none";
// 		lpanel.style.display = "none";
// 		lopwheel.style.display = "none";
// 		lgov.style.display = "none";
// 		ltele.style.display = "block";
// 		l2d.style.display = "none";
// 		$('#lm_tele').css({
// 			'border': ' 2px solid white',
// 			'background-color': '#9EACAE',
// 			'color': 'yellow'
// 		});
// 		$('#lm_tele').siblings().css({
// 			'border': ' 1px solid white',
// 			'background-color': '',
// 			'color': 'white'
// 		});
// 	})

// }
// if (zmm == 6) {
// 	$('#alocal').on('click', function () {
// 		lmainsys.style.display = "none";
// 		lpanel.style.display = "none";
// 		lopwheel.style.display = "none";
// 		lgov.style.display = "none";
// 		ltele.style.display = "none";
// 		l2d.style.display = "block";
// 		$('#lm_2d').css({
// 			'border': ' 2px solid white',
// 			'background-color': '#9EACAE',
// 			'color': 'yellow'
// 		});
// 		$('#lm_2d').siblings().css({
// 			'border': ' 1px solid white',
// 			'background-color': '',
// 			'color': 'white'
// 		});
// 	})

// }


aschematicDiagram.onclick = function () {
	document.getElementById('yunxing').src = document.getElementById('yunxing').getAttribute("data-src")

	aconditionx = 0
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	// controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "block";
	threeD.style.display = "none";
	telegraph.style.display = "none";
	diagram.style.display = "none";
	governor.style.display = "none";
	condition.style.display = "none";

	for (var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.backgroundColor = '';
		menuli[menulixx].style.color = 'white';
	}
	this.style.color = 'yellow';
	this.style.backgroundColor = " #9badaf"
}
athreeD.onclick = function () {
	aconditionx = 0
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	// controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	threeD.style.display = "block";
	telegraph.style.display = "none";
	diagram.style.display = "none";
	governor.style.display = "none";
	condition.style.display = "none";
	if (rmpx == 0) {
		document.getElementById('threeDgif').src = "img/gif-0.gif"
	} else if (rmpx <= 30 && rmpx > 0) {
		document.getElementById('threeDgif').src = "img/gif-1.gif"
	} else if (rmpx <= 60 && rmpx > 30) {
		document.getElementById('threeDgif').src = "img/gif-2.gif"
	} else if (rmpx > 60) {
		document.getElementById('threeDgif').src = "img/gif-3.gif"
	}
	for (var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.backgroundColor = '';
		menuli[menulixx].style.color = 'white';
	}
	this.style.color = 'yellow';
	this.style.backgroundColor = " #9badaf"

}
atelegraph.onclick = function () {
	aconditionx = 0
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	// controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	threeD.style.display = "none";
	telegraph.style.display = "block";
	diagram.style.display = "none";
	governor.style.display = "none";
	condition.style.display = "none";

	for (var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.backgroundColor = '';
		menuli[menulixx].style.color = 'white';
	}
	this.style.color = 'yellow';
	this.style.backgroundColor = " #9badaf"
}

adiagram.onclick = function () {
	aconditionx = 0
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	// controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	threeD.style.display = "none";
	telegraph.style.display = "none";
	diagram.style.display = "block";
	governor.style.display = "none";
	condition.style.display = "none";

	for (var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.backgroundColor = '';
		menuli[menulixx].style.color = 'white';
	}
	this.style.color = 'yellow';
	this.style.backgroundColor = " #9badaf"
}

agovernor.onclick = function () {
	aconditionx = 0
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	// controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	threeD.style.display = "none";
	telegraph.style.display = "none";
	diagram.style.display = "none";
	governor.style.display = "block";
	condition.style.display = "none";

	for (var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.backgroundColor = '';
		menuli[menulixx].style.color = 'white';
	}
	this.style.color = 'yellow';
	this.style.backgroundColor = " #9badaf"
}

// var conditionX=0;//0代表未显示，1代表显示
// acondition.onclick = function () {
// 	// if(conditionX%2==0){
// 	// 	condition.style.display="block";
// 	// 	conditionX+=1;
// 	// }else{
// 	// 	condition.style.display="none";
// 	// 	conditionX+=1;
// 	// }
// 	condition.style.display = "block";
// }
var aconditionx = 0
// var conditionX=0;//0代表未显示，1代表显示
acondition.onclick = function () {
	if (aconditionx % 2 == 0) {
		condition.style.display = "block";
		aconditionx += 1
	} else {
		condition.style.display = "none";
		aconditionx += 1
	}

}
//初始化，显示校船图片
var astart = function () {
	homepage.style.display = "block";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	// controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	threeD.style.display = "none";
	telegraph.style.display = "none";
	diagram.style.display = "none";
	governor.style.display = "none";
	ahomepage.style.color = "yellow"
	ahomepage.style.backgroundColor = " #9badaf"
}

astart();

//获取主界面图片内部导航
var hbridge = document.getElementById('hbridge');
var hcontrolRoom = document.getElementById('hcontrolRoom');
// var hcontrolPanel = document.getElementById('hcontrolPanel');
var hlocal = document.getElementById('hlocal');
var htelegraph = document.getElementById('htelegraph');

//主界面图片内部导航切换函数
hbridge.onclick = function () {
	homepage.style.display = "none";
	bridge.style.display = "block";
	controlRoom.style.display = "none";
	// controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	telegraph.style.display = "none";
	threeD.style.display = "none";
	diagram.style.display = "none";

	for (var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.color = 'white';
	}
	abridge.style.color = 'yellow';
	abridge.style.backgroundColor = " #9badaf"
	ahomepage.style.backgroundColor = ''

}
hcontrolRoom.onclick = function () {
	if (clicksafesys == 0) {
		// $('#safety').css('display', 'none')
		$('#cSafetyHome').css('display', 'none')
		$('#safety').css('opacity', 0)
		$('#safesysbtn').css('display', 'none')
	}
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "block";
	// controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	telegraph.style.display = "none";
	threeD.style.display = "none";
	diagram.style.display = "none";

	for (var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.color = 'white';
	}
	acontrolRoom.style.color = 'yellow';
	acontrolRoom.style.backgroundColor = " #9badaf"
	ahomepage.style.backgroundColor = ''

}
// hcontrolPanel.onclick = function() {
// 	homepage.style.display = "none";
// 	bridge.style.display = "none";
// 	controlRoom.style.display = "none";
// 	controlPanel.style.display = "block";
// 	local.style.display = "none";
// 	schmaticDiagram.style.display = "none";
// 	telegraph.style.display = "none";
// 	threeD.style.display = "none";
// 	diagram.style.display = "none";

// 	for(var menulixx = 0; menulixx < menuli.length; menulixx++) {
// 		menuli[menulixx].style.color = 'white';
// 	}
// 	acontrolPanel.style.color = 'yellow';
// }
hlocal.onclick = function () {
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	// controlPanel.style.display = "none";
	local.style.display = "block";
	schmaticDiagram.style.display = "none";
	telegraph.style.display = "none";
	threeD.style.display = "none";
	diagram.style.display = "none";

	for (var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.color = 'white';
	}
	alocal.style.color = 'yellow';
	alocal.style.backgroundColor = " #9badaf"
	ahomepage.style.backgroundColor = ''

}
htelegraph.onclick = function () {
	homepage.style.display = "none";
	bridge.style.display = "none";
	controlRoom.style.display = "none";
	// controlPanel.style.display = "none";
	local.style.display = "none";
	schmaticDiagram.style.display = "none";
	telegraph.style.display = "block";
	threeD.style.display = "none";
	diagram.style.display = "none";

	for (var menulixx = 0; menulixx < menuli.length; menulixx++) {
		menuli[menulixx].style.color = 'white';
	}
	atelegraph.style.color = 'yellow';
	atelegraph.style.backgroundColor = " #9badaf"
	ahomepage.style.backgroundColor = ''

}

/*主界面淡入淡出*/
var hPic = document.getElementById('hpicture');
var hPiced = hPic.getElementsByTagName('img');

for (var i = 0; i < hPiced.length; i++) {

	hPiced[i].onmouseover = function () {
		startMove(this, 'opacity', 100);
	};
	hPiced[i].onmouseout = function () {
		startMove(this, 'opacity', 0);
	};
}
var panduanq1 = 0

//工况切换
document.getElementById('conReadyC').onclick = function () { //备车完毕
	panduanq1 = 1
	aconditionx += 1
	sio = 2;
	value16x = 1;
	value122x = 1;
	value3x = 1;
	value116x = 1;
	value118x = 1;
	valueMainx = 1;
	condition.style.display = 'none';
	btelegraph1lever.style.top = '-335px';
	ttelegraph1lever.style.top = '0px';
	ttelegraph2lever.style.top = '0px';
	ttelegraph2watch.innerHTML = 'STOP';

	lshutdownLed.style.backgroundColor = ' #800000';

	document.getElementById('cseqBridge').style.backgroundColor = 'green'
	document.getElementById('cseqManualbcr').style.backgroundColor = '#c3c3c3'

	//气动里的车钟图
	schematicX = 0
	document.getElementById('yunxing').style.display = 'none'
	document.getElementById('ahead').style.display = 'none'

	document.getElementById('bridgecontrol').style.display = 'block'


	//取消故障
	document.getElementById('SHDC').style.color = 'white'
	document.getElementById('SHDA').style.color = 'white'
	document.getElementById('SLDC').style.color = 'white'
	document.getElementById('SLDA').style.color = 'white'
	// document.getElementsById('box').checked = false

	for (let i = 0; i < boxes.length; i++) {
		boxes[i].checked = false;
	}
	for (let i = 0; i < lights.length; i++) {
		lights[i].style.display = 'none'
	}
	document.getElementById('l2').style.opacity = '0'
	document.getElementById('l3').style.opacity = '0'
	document.getElementById('l4').style.opacity = '0'
	document.getElementById('l8').style.opacity = '0'
	document.getElementById('l9').style.opacity = '0'
	document.getElementById('l10').style.opacity = '0'
	document.getElementById('l11').style.opacity = '0'
	document.getElementById('l12').style.opacity = '0'
	document.getElementById('l13').style.opacity = '0'
	document.getElementById('l14').style.opacity = '0'
	document.getElementById('l15').style.opacity = '0'
	document.getElementById('l16').style.opacity = '0'
	document.getElementById('l17').style.opacity = '0'
	document.getElementById('l18').style.opacity = '0'
	document.getElementById('l19').style.opacity = '0'
	document.getElementById('l20').style.opacity = '0'
	document.getElementById('l21').style.opacity = '0'

	document.getElementById('lright3').style.display = 'none'
	document.getElementById('lright4').style.display = 'none'

	//调速器
	$('#light1_1').css('opacity', 1);
	$('#light1_2').css('opacity', 0);
	$('#light2_2').css('opacity', 0);
	$('#light2_3').css('opacity', 0);


	z = 0;
	$('#wheelstart').css('display', 'none');
	$('#wheeloil1').css('display', 'none');
	$('#wheeloil1_5').css('display', 'none');
	$('#wheeloil2').css('display', 'none');
	$('#wheeloil3').css('display', 'none');
	$('#wheeloil4').css('display', 'none');

	lhandle3x = 0;
	wx = 0;
	yy = 0;
	startMove(document.getElementById('wheelswitch'), 'opacity', 0);

	impactwheelx = 0;
	startMove(document.getElementById('impactwheel'), 'opacity', 0);


	lhandle1x = 0; //机旁页面扳手 指向LOCAL
	lhandle1.style.transformOrigin = '31% 31%';
	lhandle1.style.transform = 'rotate(' + 0 + 'deg)';
	lhandle2x = 1; //标识位 1为AHEAD 0为ASTERN
	lhandle2.style.transformOrigin = '31% 31%';
	lhandle2.style.transform = 'rotate(' + 90 + 'deg)';
	lhandle3x = 0; //标识位 0为LOCK 1为UNLOCK
	lhandle3.style.transformOrigin = '31% 31%';
	lhandle3.style.transform = 'rotate(' + 0 + 'deg)';
	thandlex = 0; //集控车钟页面扳手 指向BRIDGE
	thandle.style.transformOrigin = '31% 31%';
	thandle.style.transform = 'rotate(' + 90 + 'deg)';
	controlLocation();
	//机旁的手轮
	lwheelx1x = 5; //
	lprintPancel1(lwheelx1x);
	lwheelx2x = 0; //
	lprintPancel2(lwheelx2x);

	bStandBy.style.backgroundColor = 'yellow';
	bStandBy.innerHTML = 'Stand By';
	cStandBy.style.backgroundColor = 'yellow';
	cStandBy.innerHTML = 'Stand By';

	//	LED()
	controlLocation();
	// schematicX = 1;
	lwheelx1x = 5;
	lprintPancel1(lwheelx1x);

	yd = 0;
	ydx = 0;
	rmp = 0;
	rmpx = 0;
	brmp = 0;
	trmp = 0;
	lrmp = 0;
	//	LED()
	// schematicX = 1;

	briled = 5;
	telled = 5;
	locled = 5;
	briLEDclear(briled);
	telLEDclear(briled, telled);
	lclearSpeedLed(briled, locled);
}

function onReady() {
	// aconditionx += 1
	sio = 2;
	value16x = 1;
	value122x = 1;
	value3x = 1;
	value116x = 1;
	value118x = 1;
	valueMainx = 1;
	condition.style.display = 'none';
	btelegraph1lever.style.top = '-335px';
	ttelegraph1lever.style.top = '0px';
	ttelegraph2lever.style.top = '0px';
	ttelegraph2watch.innerHTML = 'STOP';

	lshutdownLed.style.backgroundColor = ' #800000';

	document.getElementById('cseqBridge').style.backgroundColor = 'green'
	document.getElementById('cseqManualbcr').style.backgroundColor = '#c3c3c3'

	//气动里的车钟图
	schematicX = 0
	document.getElementById('yunxing').style.display = 'none'
	document.getElementById('ahead').style.display = 'none'

	document.getElementById('bridgecontrol').style.display = 'block'


	//取消故障
	document.getElementById('SHDC').style.color = 'white'
	document.getElementById('SHDA').style.color = 'white'
	document.getElementById('SLDC').style.color = 'white'
	document.getElementById('SLDA').style.color = 'white'
	// document.getElementsById('box').checked = false

	for (let i = 0; i < boxes.length; i++) {
		boxes[i].checked = false;
	}
	for (let i = 0; i < lights.length; i++) {
		lights[i].style.display = 'none'
	}
	document.getElementById('l2').style.opacity = '0'
	document.getElementById('l3').style.opacity = '0'
	document.getElementById('l4').style.opacity = '0'
	document.getElementById('l8').style.opacity = '0'
	document.getElementById('l9').style.opacity = '0'
	document.getElementById('l10').style.opacity = '0'
	document.getElementById('l11').style.opacity = '0'
	document.getElementById('l12').style.opacity = '0'
	document.getElementById('l13').style.opacity = '0'
	document.getElementById('l14').style.opacity = '0'
	document.getElementById('l15').style.opacity = '0'
	document.getElementById('l16').style.opacity = '0'
	document.getElementById('l17').style.opacity = '0'
	document.getElementById('l18').style.opacity = '0'
	document.getElementById('l19').style.opacity = '0'
	document.getElementById('l20').style.opacity = '0'
	document.getElementById('l21').style.opacity = '0'

	document.getElementById('lright3').style.display = 'none'
	document.getElementById('lright4').style.display = 'none'

	//调速器
	$('#light1_1').css('opacity', 1);
	$('#light1_2').css('opacity', 0);
	$('#light2_2').css('opacity', 0);
	$('#light2_3').css('opacity', 0);


	z = 0;
	$('#wheelstart').css('display', 'none');
	$('#wheeloil1').css('display', 'none');
	$('#wheeloil1_5').css('display', 'none');
	$('#wheeloil2').css('display', 'none');
	$('#wheeloil3').css('display', 'none');
	$('#wheeloil4').css('display', 'none');

	lhandle3x = 0;
	wx = 0;
	yy = 0;
	startMove(document.getElementById('wheelswitch'), 'opacity', 0);

	impactwheelx = 0;
	startMove(document.getElementById('impactwheel'), 'opacity', 0);


	lhandle1x = 0; //机旁页面扳手 指向LOCAL
	lhandle1.style.transformOrigin = '31% 31%';
	lhandle1.style.transform = 'rotate(' + 0 + 'deg)';
	lhandle2x = 1; //标识位 1为AHEAD 0为ASTERN
	lhandle2.style.transformOrigin = '31% 31%';
	lhandle2.style.transform = 'rotate(' + 90 + 'deg)';
	lhandle3x = 0; //标识位 0为LOCK 1为UNLOCK
	lhandle3.style.transformOrigin = '31% 31%';
	lhandle3.style.transform = 'rotate(' + 0 + 'deg)';
	thandlex = 0; //集控车钟页面扳手 指向BRIDGE
	thandle.style.transformOrigin = '31% 31%';
	thandle.style.transform = 'rotate(' + 90 + 'deg)';
	controlLocation();
	//机旁的手轮
	lwheelx1x = 5; //
	lprintPancel1(lwheelx1x);
	lwheelx2x = 0; //
	lprintPancel2(lwheelx2x);

	bStandBy.style.backgroundColor = 'yellow';
	bStandBy.innerHTML = 'Stand By';
	cStandBy.style.backgroundColor = 'yellow';
	cStandBy.innerHTML = 'Stand By';

	//	LED()
	controlLocation();
	// schematicX = 1;
	lwheelx1x = 5;
	lprintPancel1(lwheelx1x);

	yd = 0;
	ydx = 0;
	rmp = 0;
	rmpx = 0;
	brmp = 0;
	trmp = 0;
	lrmp = 0;
	//	LED()
	// schematicX = 1;

	briled = 5;
	telled = 5;
	locled = 5;
	briLEDclear(briled);
	telLEDclear(briled, telled);
	lclearSpeedLed(briled, locled);
}

function onSea() { //航行状态
	value16x = 1;
	value122x = 1;
	value3x = 1;
	value116x = 1;
	value118x = 1;
	valueMainx = 1;
	condition.style.display = 'none';
	//车钟杠杆位置
	btelegraph1lever.style.top = '-450px';
	ttelegraph1lever.style.top = '-154px';

	document.getElementById('cseqBridge').style.backgroundColor = 'green'
	document.getElementById('cseqManualbcr').style.backgroundColor = '#c3c3c3'

	document.getElementById('bridgecontrol').style.display = 'block'//气动操作驾驶台控制


	//调速器
	$('#light1_1').css('opacity', 1);
	$('#light1_2').css('opacity', 0);
	$('#light2_2').css('opacity', 1);
	$('#light2_3').css('opacity', 0);


	subTelegraph(-20);
	btled1[5].style.background = ' #99AF1C';
	btled2[5].style.background = ' #99AF1C';
	ttled1[5].style.background = ' #99AF1C';
	ttled2[5].style.background = ' #99AF1C';
	ttled1[1].style.background = '#00FF00';
	ttled2[1].style.background = '#00FF00';
	btled1[1].style.background = '#00FF00';
	btled2[1].style.background = '#00FF00';

	bStandBy.style.backgroundColor = '#01D867';
	bStandBy.innerHTML = 'At Sea';
	cStandBy.style.backgroundColor = '#01D867';
	cStandBy.innerHTML = 'At Sea';

	lshutdownLed.style.backgroundColor = ' #800000';
	lhandle1x = 0; //机旁页面扳手 指向remote
	lhandle1.style.transformOrigin = '31% 31%';
	lhandle1.style.transform = 'rotate(' + 0 + 'deg)';
	lhandle2x = 1; //标识位 1为AHEAD 0为ASTERN
	lhandle2.style.transformOrigin = '31% 31%';
	lhandle2.style.transform = 'rotate(' + 90 + 'deg)';
	lhandle3x = 0; //标识位 0为LOCK 1为UNLOCK
	lhandle3.style.transformOrigin = '31% 31%';
	lhandle3.style.transform = 'rotate(' + 0 + 'deg)';
	thandlex = 0; //集控车钟页面扳手 指向BRIDGE
	thandle.style.transformOrigin = '31% 31%';
	thandle.style.transform = 'rotate(' + 90 + 'deg)';
	controlLocation();
	//机旁的手轮
	lwheelx1x = 0; //
	lprintPancel1(lwheelx1x);
	lwheelx2x = 0; //
	lprintPancel2(lwheelx2x);
	brmp = 90;

	ydx = 90;
	schematicX = 1;
	lwheelx1x = 5;
	lprintPancel1(lwheelx1x);
}
//初始状态即为主机运行

document.getElementById('conOnSea').onclick = function () {
	aconditionx += 1
	sio = 3;
	value16x = 1;
	value122x = 1;
	value3x = 1;
	value116x = 1;
	value118x = 1;
	valueMainx = 1;
	condition.style.display = 'none';
	//车钟杠杆位置
	btelegraph1lever.style.top = '-450px';
	ttelegraph1lever.style.top = '-154px';

	//车令位置
	//LED()
	//briLEDclear()

	document.getElementById('bridgecontrol').style.display = 'block'//气动操作驾驶台控制


	document.getElementById('cseqBridge').style.backgroundColor = 'green'
	document.getElementById('cseqManualbcr').style.backgroundColor = '#c3c3c3'

	//取消故障
	document.getElementById('SHDC').style.color = 'white'
	document.getElementById('SHDA').style.color = 'white'
	document.getElementById('SLDC').style.color = 'white'
	document.getElementById('SLDA').style.color = 'white'
	// document.getElementsById('box').checked = false

	for (let i = 0; i < boxes.length; i++) {
		boxes[i].checked = false;
	}
	for (let i = 0; i < lights.length; i++) {
		lights[i].style.display = 'none'
	}
	document.getElementById('l2').style.opacity = '0'
	document.getElementById('l3').style.opacity = '0'
	document.getElementById('l4').style.opacity = '0'
	document.getElementById('l8').style.opacity = '0'
	document.getElementById('l9').style.opacity = '0'
	document.getElementById('l10').style.opacity = '0'
	document.getElementById('l11').style.opacity = '0'
	document.getElementById('l12').style.opacity = '0'
	document.getElementById('l13').style.opacity = '0'
	document.getElementById('l14').style.opacity = '0'
	document.getElementById('l15').style.opacity = '0'
	document.getElementById('l16').style.opacity = '0'
	document.getElementById('l17').style.opacity = '0'
	document.getElementById('l18').style.opacity = '0'
	document.getElementById('l19').style.opacity = '0'
	document.getElementById('l20').style.opacity = '0'
	document.getElementById('l21').style.opacity = '0'

	document.getElementById('lright3').style.display = 'none'
	document.getElementById('lright4').style.display = 'none'

	//调速器
	$('#light1_1').css('opacity', 1);
	$('#light1_2').css('opacity', 0);
	$('#light2_2').css('opacity', 1);
	$('#light2_3').css('opacity', 0);




	bStandBy.style.backgroundColor = '#01D867';
	bStandBy.innerHTML = 'At Sea';
	cStandBy.style.backgroundColor = '#01D867';
	cStandBy.innerHTML = 'At Sea';

	lshutdownLed.style.backgroundColor = ' #800000';

	lhandle1x = 0; //机旁页面扳手 指向remote
	lhandle1.style.transformOrigin = '31% 31%';
	lhandle1.style.transform = 'rotate(' + 0 + 'deg)';
	lhandle2x = 1; //标识位 1为AHEAD 0为ASTERN
	lhandle2.style.transformOrigin = '31% 31%';
	lhandle2.style.transform = 'rotate(' + 90 + 'deg)';
	lhandle3x = 0; //标识位 0为LOCK 1为UNLOCK
	lhandle3.style.transformOrigin = '31% 31%';
	lhandle3.style.transform = 'rotate(' + 0 + 'deg)';
	thandlex = 0; //集控车钟页面扳手 指向BRIDGE
	thandle.style.transformOrigin = '31% 31%';
	thandle.style.transform = 'rotate(' + 90 + 'deg)';
	controlLocation();
	//机旁的手轮
	lwheelx1x = 0; //
	lprintPancel1(lwheelx1x);
	lwheelx2x = 0; //
	lprintPancel2(lwheelx2x);


	//rmpx=61;
	brmp = 90;
	ydx = 90;
	schematicX = 1;
	lwheelx1x = 5;
	lprintPancel1(lwheelx1x);
	impactwheelx = 0;
	startMove(document.getElementById('impactwheel'), 'opacity', 0);

	subTelegraph(-20);
	for (var i = 0; i < 5; i++) {
		btled1[i].style.background = '#006400';
		btled2[i].style.background = '#006400';
	}
	ttled1[1].style.background = '#00FF00';
	ttled2[1].style.background = '#00FF00';
	btled1[1].style.background = '#00FF00';
	btled2[1].style.background = '#00FF00';
	btled1[5].style.background = ' #99AF1C';
	btled2[5].style.background = ' #99AF1C';
	ttled1[5].style.background = ' #99AF1C';
	ttled2[5].style.background = ' #99AF1C';
	telled = 1;
};