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

    let x = 100
    let y = 100

    //this variable will determine the directional velocity
    let dx = 1
    let dy = 1

    //lets create a variable for radius to allow for edge detection
    let radius = 30
    
    function animate() {
        //this function calls itself creating an infinite loop
        requestAnimationFrame(animate)
        //this method allows us to clear our frame after every loop
        c.clearRect(0, 0, innerWidth, innerHeight)

        c.beginPath();
        c.arc(x,y, radius, 0, Math.PI * 2, false)
        c.strokeStyle = `red`
        c.stroke();
        //using increments to redraw the new circle in a new frame thus giving the illusion of animation
        //logic in regards to edge detection====================================================
        //this conditional statement essentially states if our x directional velocity + our conditional statement is greater than our innerWidth change the directional value from positive to negative
        if (x + radius > innerWidth || x - radius < 0) {
           dx = -dx
        }
          //this conditional statement essentially states if our y directional velocity + our conditional statement is greater than our innerWidth change the directional value from positive to negative
        if (y + radius > innerHeight || y - radius < 0) {
            dy = -dy
        }

        x+= dx;
        y+= dy;
        //the size of the increment determines the velocity 
        
    }

    animate()