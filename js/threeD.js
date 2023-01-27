//**************************3D
var threeDc = document.getElementById('threeDC1');
var threeDctx = threeDc.getContext('2d');
var threeDc1 = document.getElementById('threeDC2');
var threeDctx1 = threeDc1.getContext('2d');
var speed = 80;

var image1 = document.createElement('img');
image1.src = 'img/wheel101.bmp';
image1.onload = function() {
	var imageWidth1 = image1.width;
	var imageHeight1 = image1.height;
	var partWidth1 = imageWidth1 / 30;
	var partHeight1 = imageHeight1;
	var index = 15;
	threeDctx1.drawImage(image1, 0, 0, partWidth1 - 3, partHeight1, 0, 0, 117, 120);

	index++;
		threeDctx1.clearRect(0, 0, threeDctx1.canvas.width, threeDctx1.canvas.height);
		threeDctx1.drawImage(image1, index * partWidth1 + 2, 0, partWidth1 - 3, partHeight1, 0, 0, 117, 120);
	// setInterval(function() {
	// 	index++;
	// 	threeDctx1.clearRect(0, 0, threeDctx1.canvas.width, threeDctx1.canvas.height);
	// 	threeDctx1.drawImage(image1, index * partWidth1 + 2, 0, partWidth1 - 3, partHeight1, 0, 0, 117, 120);
	// 	if(index >= 29) {
	// 		index = 0;
	// 	}
	// }, speed);
};
var image = document.createElement('img');
image.src = 'img/pole102.bmp';
image.onload = function() {
	var imageWidth = image.width;
	var imageHeight = image.height;
	var partWidth = imageWidth / 10;
	var partHeight = imageHeight / 3;
	var index = 8;
	var indey = 0;
	threeDctx.drawImage(image, 0, 0, partWidth - 3, partHeight - 3, 0, 0, 292, 130);


		threeDctx.clearRect(0, 0, threeDctx.canvas.width, threeDctx.canvas.height);
		threeDctx.drawImage(image, index * imageWidth / 10 + 2, indey * partHeight + 2, partWidth - 3, partHeight - 3, 0, 0, 292, 130);
	// setInterval(function() {
	// 	index++;
	// 	threeDctx.clearRect(0, 0, threeDctx.canvas.width, threeDctx.canvas.height);
	// 	threeDctx.drawImage(image, index * imageWidth / 10 + 2, indey * partHeight + 2, partWidth - 3, partHeight - 3, 0, 0, 292, 130);
	// 	if(index >= 9) {
	// 		index = 0;
	// 		indey++;
	// 		if(indey > 2) {
	// 			indey = 0;
	// 		}
	// 	}
	// }, speed);
};

