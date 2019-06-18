let item = null
let x = 0
let y = 0
let resizeX = 200
let resizeY = 130

let square = SVG('square').size(resizeX, resizeY)
let rectSquare = square.rect(100, 100).fill('#f06').move(0, 0)
let svgSquare = document.getElementById("square").getElementsByTagName("svg")[0]
// var polyline = square.polyline('50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40')
// polyline.fill('none').move(20, 20)
// polyline.stroke({ color: '#f06', width: 4, linecap: 'round', linejoin: 'round' })


let circle = SVG('circle').size(resizeX, resizeY)
let rectCircle = circle.circle(100).fill('#f06').move(0, 0)
let svgCircle = document.getElementById("circle").getElementsByTagName("svg")[0]


let lineUp = SVG('line-up').size(resizeX, resizeY)
let rectLineUp = lineUp.line(0, 100, 100, 0).move(0, 0).stroke({ color: '#f06', width: 10, linecap: 'round' })
let svgLineUp = document.getElementById("line-up").getElementsByTagName("svg")[0]

let canvas = document.getElementById("myCanvas")
let c = canvas.getContext("2d")

canvas.onmousemove = function(e) {
    let pos = getMousePos(this, e)
    x = pos.x
    y = pos.y
}

function getMousePos(canvas, e) {
    let rect = canvas.getBoundingClientRect();
    return {x: e.clientX - rect.left, y: e.clientY - rect.top}
}

function displayDate(event) {
    console.log(event)
    if(event === 1) item = svgSquare
    if(event === 2) item = svgCircle
    if(event === 3) item = svgLineUp
}

document.getElementById("myCanvas").addEventListener("click", addSVG)

function addSVG() {
    if(!item) return

    var xml = new XMLSerializer().serializeToString(item)
    var svg64 = btoa(xml);
    var b64Start = 'data:image/svg+xml;base64,';
    var image64 = b64Start + svg64;
    img = new Image()
    img.src = image64;
    c.drawImage(img, x, y);
}