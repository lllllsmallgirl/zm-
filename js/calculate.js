var n = 27;     //修改了初始输入值
var vp = 1.2;
var zhuansu = 31;
var zhuansulast = 31;
var nlast = 32;
var owf = 0; //柴油机的输出指示总功率
var owflast = 0; //上个采样周期的柴油机的输出指示总功率
var dowf = 0; //延时后的计算指示功率
var dowflast = 0; //上次采样周期延时后的计算指示功率
var pep = 100000; //排气管压力
var niujuk = 0;
var Mengine = 0;
var d1 = -0.005629;
var d2 = 1.015;
var d3 = -36.51;
var d4 = 533.5;
var ResShip = 0;
var shaftFriction = 0
var taod = 0;
var taoe = 0;
var dt = 0.2;
var index = 0;
var yd = 0;
var ydx = 0; //pid中代替yd
var ydp=0;//表盘指针所需展现出来的燃油齿条刻度值

var rmpMaxli=120;//最大转速手动限制
var rmpMinli=20;//最低转速限制

var loadProgramMax=80;//负荷限制上限
var loadProgramMin=60;//负荷限制下限

function renew(){
n = 27;     //修改了初始输入值
vp = 1.2;
zhuansu = 31;
zhuansulast = 31;
nlast = 32;
owf = 0; //柴油机的输出指示总功率
owflast = 0; //上个采样周期的柴油机的输出指示总功率
dowf = 0; //延时后的计算指示功率
dowflast = 0; //上次采样周期延时后的计算指示功率
pep = 100000; //排气管压力
niujuk = 0;
Mengine = 0;
d1 = -0.005629;
d2 = 1.015;
d3 = -36.51;
d4 = 533.5;
ResShip = 0;
shaftFriction = 0
taod = 0;
taoe = 0;
dt = 0.2;
index = 0;
yd = 0;
ydx = 0; //pid中代替yd
ydp=0;//表盘指针所需展现出来的燃油齿条刻度值

rmpMaxli=120;//最大转速手动限制
rmpMinli=20;//最低转速限制

loadProgramMax=80;//负荷限制上限
loadProgramMin=60;//负荷限制下限
}

function calculate() {
	//循环体内
	if(yd==0){
		renew()
	}
	var Tprop = 0.00013 * (vp * vp * 84.64 + 6884536 * n * n); //有效推力
	var Mprop = 0.0001 * (vp * vp * 778.688 + 63337731 * n * n); //负载转矩

	if(vp >= 1) {
		ResShip = 163664 + vp * vp * 12878;
	} else if(vp < -1) {
		ResShip = -163664 - vp * vp * 12878;
	} else if((vp >= -1) && (vp < 0)) {
		ResShip = -1022905;
	} else {
		ResShip = 0;
	}

	if(n >= 7) {
		shaftFriction = n / 82 * 100000;
	} else if((n < 7) && (n > 0)) {
		shaftFriction = 1000000;
	} else if((n < 0) && (n > -7)) {
		shaftFriction = -1000000;
	} else if(n <= -7) {
		shaftFriction = -100000 * n / 82;
	} else {
		shaftFriction = 0;
	}

	if(n <= 8) {
		taod = 0.1;
		taoe = 0.1;
	} else {
		taod = 3 / n;
		taoe = 22.5 / n;
	}

	niujuk = 0.0000305 * owf + 0.14;
	if(niujuk >= 1) {
		niujuk = 1;
	}
	if(niujuk <= 0.2) {
		niujuk = 0.2;
	}

	if(n > 8) {
		if(owf >= 2500) {
			Mengine = niujuk * 91242 * owf / n;
		} else {
			Mengine = 0;
		}
	} else {
		Mengine = 0;
	}

	zhuansu = dt / (2 * taod + dt) * (n + nlast - (1 - 2 * taod / dt) * zhuansulast);
	nlast = n;
	zhuansulast = zhuansu;

	//判断油门速度（rmp）是由驾驶台还是集控室还是机旁控制
	if(lhandle1x % 2 == 0) {
		if(thandlex % 2 == 0) {
			//驾驶台控制
			
			// if(eeydx==0){
			// 	ydx = brmp;
			// }else{
			// 	ydx = eeeydx
			// }
			ydx = brmp;
			if(CriticalRPMX==1){/**临界转速避让 */
				if(ydx<CriticalRPMmax.value&&ydx>CriticalRPMmin.value){
					  ydx=CriticalRPMmax.value
				}
			}
			pid();
		} else {
			//集控室控制
			ydx = trmp;
			if(CriticalRPMX==1){/** 临界转速避让*/
				if(ydx<CriticalRPMmax.value&&ydx>CriticalRPMmin.value){
					  ydx=CriticalRPMmax.value
				}
			}
			pid();
		}
	} else {
		//机旁控制，没有调速器

		if(airstart==1){
			console.log('当前为空气启动')
			ydx=0;

		} 
		else if(airstart==2 && lwheelx1x < 3 && lwheelx2x > 3){
			ydx=lrmp;console.log('wo yunxing le')
			yd=lrmp;			

		}else{
			ydx = 0;
		}		
		// if(airstart==2 && ydx==0){
		// 	airstart=3
		// }
		console.log('当前为机旁控制，airstart为：',airstart);
	}

	//模拟空气启动
	// if(yd >= 10) {
	// 	index = yd / 150;
	// } else {
	// 	index = 0;
	// }
	index = yd / 150;

	aita = 0.526 * (1 - Math.exp(-14 * n / zhuansu)); //空气燃油质量比
	owf = 1190 * aita * index * zhuansu;
	dowf = dt / (2 * taod + 2 * taoe + dt) * (owf + owflast - (1 - (2 * taod + 2 * taoe) / dt) * dowflast);
	dowflast = dowf;
	owflast = owf;

	var delta_shipv = (Tprop - ResShip) / 85190300;
	vp = vp + delta_shipv * dt;
	deltarmp = (Mengine + 7500000 - shaftFriction - Mprop) / 1041403;
	n = n + deltarmp * dt;
	shipV = vp * 1.94;
	pep = pep + (0.005629 * yd * yd * yd - 1.015 * yd * yd + 36.51 * yd - 533.5);

	rmp = parseInt(n);
		rmp=rmp-25;
		if(rmp<=0){
			rmp=0;
		}
	//转速限制
	// if(rmpx>srmpxlim){
	// 	// rmpx=(parseInt(n)-25)*1.4-rmpx+rmpxlim;
	// 	// rmp = parseInt(n) - 25 -rmpx+rmpxlim;
	// 	// ydlim=92;
	// 	yd = 0.81 * srmpxlim + 25.2;console.log(yd,2222222)
	// }

	//yd为实际燃油齿条刻度 ydx为车钟位置 ydp为指针所展现的燃油齿条刻度值
	//燃油齿条刻度范围0-100
	ydp=yd;
	if(ydx==0 ){
		ydp=0;
	}
	if(rmpx<28){
		ydp=0;
	}
	if(yd>=100){
		ydp=100;
	}
	
}

/*
  经过计算之后输出的转速为rpm
  ydx为车中设定的值，也就是设定转速
*/