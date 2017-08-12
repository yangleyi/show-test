var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var store = {};

var Ball = function(){
	this.x = Math.ceil(Math.random() * canvas.width);
	this.y = Math.ceil(Math.random() * canvas.height);
	this.moveX = Math.random() > 0.5 ? Math.random()*0.5 : -Math.random()*0.5;
	this.moveY = Math.random() > 0.5 ? Math.random()*0.5 : -Math.random()*0.5;
	this.r = 5 + Math.ceil(Math.random() * 10);
	this.bgc = `rgba(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.random()})`;
	this.draw = function(){
		ctx.beginPath();
		ctx.fillStyle = this.bgc;
		ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); 
		ctx.closePath();
		ctx.fill();
	};
};

for(var i = 0; i < 100; i++){
	store[i] = new Ball();
}

var draw = function(){
	for(var ind in store){
		store[ind].x += store[ind].moveX;
		store[ind].y += store[ind].moveY;
		if((store[ind].x - store[ind].r) > canvas.width){// 移动到右边界面
			store[ind].x = -store[ind].r;
		}
		if((store[ind].x + store[ind].r) < 0){// 移动到左边界
			store[ind].x = -store[ind].r;
		}
		if((store[ind].y - store[ind].r) > canvas.height){// 移动到下边界
			store[ind].y = -store[ind].r;
		}
		if((store[ind].y + store[ind].r) < 0){// 移动到上边界
			store[ind].y = -store[ind].r;
		}
		store[ind].draw();
	}
}
var render = function(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	draw();
	requestAnimationFrame(render);
};
render();
// function getMouse(e){
// 	console.log(e.clientX)
// }
canvas.onmousemove = function(e){
	console.log(e.clientX)
}