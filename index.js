const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//this variable exist as a magic paintbrush altho called context we call it c because we will be using it very often
let c = canvas.getContext('2d')
//c.fillRect(x coordinate, y coordinate, width of rect, height oif rect)
c.fillStyle = '#EEF4D4'
c.fillRect(100, 100, 100, 100)

c.fillStyle = '#DAEFB3'
c.fillRect(200, 200, 100, 100)

c.fillStyle = '#EA9E8D'
c.fillRect(300, 100, 100, 100)

c.fillStyle = '#D64550'
c.fillRect(400, 200, 100, 100)

c.fillStyle = '#1C2826'
c.fillRect(500, 100, 100, 100)


console.log(canvas)

//Drawing lines
//initiates line drawing
c.beginPath();
//Move to takes x and y coordinates to move brush to a specific location
c.moveTo(100, 300)
//LineTo draws a line to the indicated x and Y arguments
c.lineTo(600, 300)
//stroke Style method lets you input a color value 
c.strokeStyle = '#000'
c.stroke();
c.closePath();


//Arcs or circles
//CanvasPath.arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void
// c.fillStyle = 'yellow'
// c.beginPath();
// c.arc(100,400, 30, 0, Math.PI * 2, false)
// c.strokeStyle = 'red'
// c.stroke();
// c.fill();


//drawing multiple circles at once with loops
for(let i = 0; i < 800; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    //here we used template literals to randomize the color values for out circle strokes
    let r = Math.random()*255;
    let g = Math.random()*255;
    let b = Math.random()*255;
    
    c.beginPath();
    c.arc(x,y, 30, 0, Math.PI * 2, false)
    c.strokeStyle = `rgb(${r}, ${g}, ${b})`
    c.stroke();
}