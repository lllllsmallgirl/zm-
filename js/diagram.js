var data1 = [];
var data2 = [];
var dataset1;
var dataset2;
var totalPoints = 60; //横坐标点数多少60
var updateInterval = 5000; //更新间隔
var now1 = new Date().getTime();
var now2 = new Date().getTime();

// var give=90


// y = 0.5*Math.exp(x*(-2))+x-0.5

function GetData1() {
	data1.shift();
	while (data1.length < totalPoints) {
		var temp
		if (lhandle1x % 2 == 1 && z == 0) {
			temp = [now1 += updateInterval, 0];
		} else {

			temp = [now1 += updateInterval, ydx];
		}
		data1.push(temp);
	}
}

var rmpx = 0; //用于初始情况让主机转速和刻盘示数为0，该参数为显示出来的转速，在燃油齿条刻度大于0时等于实际转速 
function GetData2() {
	data2.shift();
	while (data2.length < totalPoints) {
		var temp = [now2 += updateInterval, rmpx];
		data2.push(temp);
	}
}

var options1 = {
	series: {
		lines: {
			show: true,
			lineWidth: 1.2,
			fill: false
		}
	},
	xaxis: {
		mode: "time",
		tickSize: [2, "second"],
		tickFormatter: function (v, axis) {
			var date = new Date(v);

			if (date.getSeconds() % 30 == 0) {
				var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
				var minutes = date.getMinutes() - 5 < 10 ? "0" + date.getMinutes() - 5 : date.getMinutes() - 5;
				var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

				return hours + ":" + minutes + ":" + seconds;
			} else {
				return "";
			}
		},
		axisLabel: "Time",
		axisLabelUseCanvas: true,
		axisLabelFontSizePixels: 12,
		axisLabelFontFamily: 'Verdana, Arial',
		axisLabelPadding: 10
	},
	yaxis: {
		min: 0,
		max: 100,
		tickSize: 5,
		tickFormatter: function (v, axis) {
			if (v % 25 == 0) {
				return v;
			} else {
				return "";
			}
		},
		axisLabel: "Time",
		axisLabelUseCanvas: true,
		axisLabelFontSizePixels: 12,
		axisLabelFontFamily: 'Verdana, Arial',
		axisLabelPadding: 10
		//tickColor:"red"
	},
	legend: {
		labelBoxBorderColor: "black"
	},
	grid: {
		backgroundColor: "white",
	},
};

var options2 = {
	series: {
		lines: {
			show: true,
			lineWidth: 1.2,
			fill: false
		}
	},
	xaxis: {
		mode: "time",
		tickSize: [2, "second"],
		tickFormatter: function (v, axis) {
			var date = new Date(v);

			if (date.getSeconds() % 30 == 0) {
				var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
				var minutes = date.getMinutes() - 5 < 10 ? "0" + date.getMinutes() - 5 : date.getMinutes() - 5;
				var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

				return hours + ":" + minutes + ":" + seconds;
			} else {
				return "";
			}
		},
		axisLabel: "Time",
		axisLabelUseCanvas: true,
		axisLabelFontSizePixels: 12,
		axisLabelFontFamily: 'Verdana, Arial',
		axisLabelPadding: 10
	},
	yaxis: {
		min: 0,
		max: 100,
		tickSize: 5,
		tickFormatter: function (v, axis) {
			if (v % 25 == 0) {
				return v;
			} else {
				return "";
			}
		},
		axisLabel: "Time",
		axisLabelUseCanvas: true,
		axisLabelFontSizePixels: 12,
		axisLabelFontFamily: 'Verdana, Arial',
		axisLabelPadding: 10
		//tickColor:"red"
	},
	legend: {
		labelBoxBorderColor: "black"
	},
	grid: {
		backgroundColor: "white",
	},
};