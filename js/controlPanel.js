var auxHandle = document.getElementById("auxHandle");
var cpHandleRight = document.getElementById("cpHandleRight");
var cpHandleLeft = document.getElementById("cpHandleLeft");
var cpHandleX = 0
cpHandleLeft.onmousemove = function() {
	this.style.cursor = "url('img/cursorLeft.ico'), auto";
}
cpHandleRight.onmousemove = function() {
	this.style.cursor = "url('img/cursorRight.ico'), auto";
}
cpHandleLeft.onclick = function() {
	cpHandleX = cpHandleX - 45;
	if(cpHandleX <= -45) {
		cpHandleX = -45;
	}
	auxHandle.style.transformOrigin = 'center 38%';
	auxHandle.style.transform = 'rotate(' + cpHandleX + 'deg)';
}
cpHandleRight.onclick = function() {
	cpHandleX += 45;
	if(cpHandleX >= 45) {
		cpHandleX = 45;
	}
	auxHandle.style.transformOrigin = 'center 38%';
	auxHandle.style.transform = 'rotate(' + cpHandleX + 'deg)';
}

//*********************控制面板手柄标识
var cpc = document.getElementById('cpCanvas');
var cpctx = cpc.getContext("2d");
cpctx.strokeStyle = "white";
cpctx.strokeText("STOP", 90, 45);
cpctx.strokeText("MAN", 25, 70);
cpctx.strokeText("AUTO", 145, 70);