let canvas = document.getElementById('tutorial');
// let canvas = document.getElementsByClassName('tutorial')[0];
if (canvas.getContext){
	let ctx = canvas.getContext('2d');
	// drawing code here
	ctx.fillStyle = "rgb(255,0,0)";
	ctx.fillRect (10, 10, 55, 50);
	ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
	ctx.fillRect (30, 30, 55, 50);

	ctx.fillStyle = "rgba(200,0,0,0.3)";
	ctx.fillRect(105, 15, 50, 50);
	ctx.fillStyle = "rgb(200,0,0)";
	ctx.fillRect(100, 10, 50, 50);
	ctx.fillStyle = "rgba(255,255,255,0.7)";
	ctx.fillRect(110, 20, 30, 30);
	ctx.fillStyle = "rgb(255,255,255)";
	ctx.fillRect(115, 25, 25, 25);

	ctx.strokeStyle = "rgb(255,0,0)";
	ctx.strokeRect(200, 10, 30, 30);
	
	ctx.fillStyle = "rgba(200,0,0,0.3)";
	ctx.fillRect(255, 15, 50, 50);
	ctx.fillStyle = "rgb(200,0,0)";
	ctx.fillRect(250, 10, 50, 50);
	ctx.fillStyle = "rgba(255,255,255,0.7)";
	ctx.fillRect(260, 20, 30, 30);
	ctx.clearRect(265, 25, 25, 25);
	
	// Первый путь
	ctx.beginPath();
	ctx.strokeStyle = 'blue';
	ctx.moveTo(20, 100);
	ctx.lineTo(200, 100);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.strokeStyle = 'green';
	ctx.moveTo(20, 100);
	ctx.lineTo(200, 200);
	ctx.stroke();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.strokeStyle = 'blue';
	ctx.fillStyle = 'green';
	ctx.moveTo(250, 100);
	ctx.lineTo(300, 100);
	ctx.lineTo(300, 200);
	ctx.lineTo(250, 200);
	ctx.lineTo(250, 100);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
	
	function draw() {
		ctx.beginPath();
		ctx.arc(275,275,50,0,Math.PI*2,true); // Внешняя окружность
		ctx.moveTo(310,275);
		ctx.arc(275,275,35,0,Math.PI,false);  // рот (по часовой стрелке)
		ctx.moveTo(265,265);
		ctx.arc(260,265,5,0,Math.PI*2,true);  // Левый глаз
		ctx.moveTo(295,265);
		ctx.arc(290,265,5,0,Math.PI*2,true);  // Правый глаз
		ctx.stroke();
	}
	draw();
} else {
	// canvas-unsupported code here
}