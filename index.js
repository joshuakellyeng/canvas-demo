const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//this variable exist as a magic paintbrush altho called context we call it c because we will be using it very often
let c = canvas.getContext('2d');
//c.fillRect(x coordinate, y coordinate, width of rect, height oif rect)
// c.fillStyle = '#EEF4D4'
// c.fillRect(100, 100, 100, 100)

// c.fillStyle = '#DAEFB3'
// c.fillRect(200, 200, 100, 100)

// c.fillStyle = '#EA9E8D'
// c.fillRect(300, 100, 100, 100)

// c.fillStyle = '#D64550'
// c.fillRect(400, 200, 100, 100)

// c.fillStyle = '#1C2826'
// c.fillRect(500, 100, 100, 100)

console.log(canvas);

// Drawing lines
// initiates line drawing
// c.beginPath();
// Move to takes x and y coordinates to move brush to a specific location
// c.moveTo(100, 300)
// LineTo draws a line to the indicated x and Y arguments
// c.lineTo(600, 300)
// stroke Style method lets you input a color value
// c.strokeStyle = '#000'
// c.stroke();
// c.closePath();

//Arcs or circles
//CanvasPath.arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void
// c.fillStyle = 'yellow'
// c.beginPath();
// c.arc(100,400, 30, 0, Math.PI * 2, false)
// c.strokeStyle = 'red'
// c.stroke();
// c.fill();

//drawing multiple circles at once with loops
// for(let i = 0; i < 800; i++) {
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//here we used template literals to randomize the color values for out circle strokes
//     let r = Math.random()*255;
//     let g = Math.random()*255;
//     let b = Math.random()*255;

//     c.beginPath();
//     c.arc(x,y, 30, 0, Math.PI * 2, false)
//     c.strokeStyle = `rgb(${r}, ${g}, ${b})`
//     c.stroke();
// }

// //using the math.random function allows up to randomly place or circle anywhere within the window up loading
// var x = Math.random() * innerWidth;
// var y = Math.random() * innerHeight;

// //this variable will determine the directional velocity
// var dx = (Math.random() - 0.5) * 8;
// var dy = (Math.random() - 0.5) * 8;

// //lets create a variable for radius to allow for edge detection
// var radius = 30

const mouse = {
	x: undefined,
	y: undefined,
};

const maxRadius = 40;
// const minRadius = 2;

const colorArray = ['#963484', '#3066BE', '#60AFFF', '#28C2FF', '#2AF5FF'];

//interactivity part I -this creates listening event to which we can refer to in our functions to animate this
window.addEventListener('mousemove', function (event) {
	mouse.x = event.x;
	mouse.y = event.y;
});

window.addEventListener('resize', function () {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	init();
});

// circle object
class Circle {
	constructor(x, y, dx, dy, radius) {
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.radius = radius;
		//we will
		this.minRadius = radius;
		//this color will allow us to randomly assign a color to every circle object
		this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
		//this will be our circle method
		this.draw = function () {
			c.beginPath();
			c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
			c.fillStyle = this.color;
			c.fill();
		};
		this.update = function () {
			//using increments to redraw the new circle in a new frame thus giving the illusion of animation
			//logic in regards to edge detection====================================================
			//this conditional statement essentially states if our x directional velocity + our conditional statement is greater than our innerWidth change the directional value from positive to negative
			if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
				this.dx = -this.dx;
			}
			//this conditional statement essentially states if our y directional velocity + our conditional statement is greater than our innerWidth change the directional value from positive to negative
			if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
				this.dy = -this.dy;
			}
			//dx stands for directional x value
			this.x += this.dx;
			//dy stands for directional y value
			this.y += this.dy;

			//interactivity part II---this conditional statement indictates that if our mouse.x subtracted by our object x is between 50 and negative 50 and our mouse.y subtracted by our object y is between 50 and -50, increase the radius of a given object
			if (
				mouse.x - this.x < 50 &&
				mouse.x - this.x > -50 &&
				mouse.y - this.y < 50 &&
				mouse.y - this.y > -50
			) {
				if (this.radius < maxRadius) {
					this.radius += 1;
				}
			} else if (this.radius > this.minRadius) {
				this.radius -= 1;
			}

			//the size of the increment determines the velocity
			this.draw();
		};
	}
}

let circleArray = [];

function init() {
	circleArray = [];
	//this for loop creates circle objects and stores them in an array each with their own unique postion and speed
	for (let i = 0; i < 800; i++) {
		//lets create a variable for radius to allow for edge detection
		let radius = Math.random() * 3 + 2;
		//using the math.random function allows us to randomly spawn circle anywhere within the window up loading
		let x = Math.random() * (innerWidth - radius * 2) + radius;
		let y = Math.random() * (innerHeight - radius * 2) + radius;

		//this variable will determine the directional velocity
		let dx = Math.random() - 0.5;
		let dy = Math.random() - 0.5;
		circleArray.push(new Circle(x, y, dx, dy, radius));
	}
}

function animate() {
	//this function calls itself creating an infinite loop this is called recursion
	requestAnimationFrame(animate);
	//this method allows us to clear our frame after every loop
	c.clearRect(0, 0, innerWidth, innerHeight);
	for (let i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
}
init()

animate();
