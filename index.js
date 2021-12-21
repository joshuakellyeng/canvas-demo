const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//this variable exist as a magic paintbrush altho called context we call it c because we will be using it very often
let c = canvas.getContext('2d')
//c.fillRect(x coordinate, y coordinate, width of rect, height oif rect)
c.fillRect(100, 100, 100, 100)
c.fillRect(200, 200, 100, 100)
c.fillRect(300, 100, 100, 100)
c.fillRect(400, 200, 100, 100)
c.fillRect(500, 100, 100, 100)


console.log(canvas)