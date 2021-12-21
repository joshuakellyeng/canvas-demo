const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//this variable exist as a magic paintbrush altho called context we call it c because we will be using it very often
let c = canvas.getContext('2d')
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


console.log(canvas)

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
    
// circle object
class Circle {
    constructor(x, y, dx, dy, radius){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius
        //this will be our circle method
        this.draw = function() {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
            c.strokeStyle = `red`
            c.stroke();
            c.fill()
            
        }
        this.update = function() {
             //using increments to redraw the new circle in a new frame thus giving the illusion of animation
        //logic in regards to edge detection====================================================
        //this conditional statement essentially states if our x directional velocity + our conditional statement is greater than our innerWidth change the directional value from positive to negative
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx
         }
           //this conditional statement essentially states if our y directional velocity + our conditional statement is greater than our innerWidth change the directional value from positive to negative
         if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
             this.dy = -this.dy
         }
         //dx stands for directional x value
         this.x += this.dx;
         //dy stands for directional y value
         this.y += this.dy;
         //the size of the increment determines the velocity 
         this.draw()
        }
    }
}



var circleArray =[];
//this for loop creates circle objects and stores them in an array each with their own unique postion and speed
for(var i = 0; i < 100; i++) {

    //lets create a variable for radius to allow for edge detection
    var radius = 30
    //using the math.random function allows up to randomly place or circle anywhere within the window up loading
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;

    //this variable will determine the directional velocity
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);


    circleArray.push(new Circle(x,y,dx,dy,radius))

}




function animate() {
        //this function calls itself creating an infinite loop this is called recursion 
        requestAnimationFrame(animate);
        //this method allows us to clear our frame after every loop
        c.clearRect(0, 0, innerWidth, innerHeight);
        for(var i = 0; i < circleArray.length; i++){
            circleArray[i].update();
        }
    }
    animate();