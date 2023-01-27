/*定义pid*/
var error, l_error, l_l_error; //定义误差，上次误差，上上次误差
var Kp, Ki, Kd; //定义pid参数
var setPoint; //设定值
var realPoint; //实际值
var yd1 = 0
//自己设的
l_l_error = 0;
l_error = 0;
//910
Kp = 4;
Ki = 0;
Kd = 2;
var T = 0.5, result = 0, resultback = 0  //yd就是result，yd1到yd的惯性环节
function pid() {
	realPoint = rmp;
	if (ydx > rmpMaxli) {
		setPoint = rmpMaxli;
	} else {
		setPoint = ydx;
	}
	error = setPoint - realPoint;
	var increment = Kp * (error - l_error) + Ki * error + Kd * (error - 2 * l_error + l_l_error);
	// increment=increment/2
	//console.log(setPoint + '  increment 1为：  '+ increment)
	//加减速限制环节
	if (loadProgramX == 1) {
		increment = increment / 2
	} else {
		increment = increment
	}
	if (increment >= 20) {
		increment = 20
	}
	if (increment <= -20) {
		increment = -20
	}
	l_l_error = l_error;
	l_error = error;

	yd1 = ydx + increment;
	// yd = 0.5 * Math.exp(-2 * yd1) + yd1 -0.5; 

	yd = (T * resultback + yd1) / (1 + T) //惯性环节
	resultback = yd

	if (yd > 92) {
		yd = 92
	}
	//油门限制
	if (yd > sydlim) {
		// Kp = 4
		// Ki = 0.02
		// Kd = 3
		yd = sydlim + increment; console.log(111111111111)

	}
	//转速限制
	if (rmpx > srmpxlim) {
		// rmpx=(parseInt(n)-25)*1.4-rmpx+rmpxlim;
		// rmp = parseInt(n) - 25 -rmpx+rmpxlim;
		// ydlim=92;
		// Kp = 2
		// Ki = 0
		// Kd = 30
		yd = 0.81 * srmpxlim + 25.2; console.log(yd, 2222222)

	}

}	
