const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//this variable exist as a magic paintbrush altho called context we call it c because we will be using it very often
let c = canvas.getContext('2d')
//c.fillRect(x coordinate, y coordinate, width of rect, height oif rect)
c.fill
c.fillRect(100, 100, 100, 100)
c.fillRect(200, 200, 100, 100)
c.fillRect(300, 100, 100, 100)
c.fillRect(400, 200, 100, 100)
c.fillRect(500, 100, 100, 100)


console.log(canvas)

//Drawing lines
//initiates line drawing
c.beginPath();
//Move to takes x and y coordinates to move brush to a specific location
c.moveTo(100, 300)
//LineTo draws a line to the indicated x and Y arguments
c.lineTo(100, 400)
c.lineTo(200, 400)
c.lineTo(200, 300)
c.lineTo(100, 300)
//stroke Style method lets you input a color value 
c.strokeStyle = 'red'
c.stroke();
c.closePath();