
let priceCanvas = document.querySelector('.price-canvas');

priceCanvas.width = priceCanvas.parentElement.offsetWidth;
priceCanvas.height = priceCanvas.parentElement.offsetHeight;







// let draggable = document.getElementById("draggable");
// let chart = document.getElementById("chart-container");
// let cordinates = document.getElementById("cordinates");
// console.log(chart.offsetHeight);
//
// let rect = chart.getBoundingClientRect().y;
// console.log(rect);
//
// //draggable.onmousedown = mouseDown;
//
//
// function mouseDown(elementId){
//     document.onmousemove = function(e){
//         e.preventDefault();
//         console.log('moving');
//         let thisElement = document.getElementById(elementId);
//         if(e.clientY > rect && e.clientY < ((chart.offsetHeight+rect)-thisElement.offsetHeight)){
//             thisElement.style.top = (e.clientY - rect)+'px';
//         }
//     };
//     document.onmouseup = function(e){
//         let thisElement = document.getElementById(elementId);
//         console.log(e.clientY);
//         document.onmouseup = null;
//         document.onmousemove = null;
//     };
//
// }
//
// let canvas = document.getElementById('canvas1');
// let div = document.getElementById('div');
// let position = document.getElementById('position');
//
// canvas.width = div.offsetWidth;
// canvas.height = div.offsetHeight*2;
// let canvasHeight = canvas.offsetHeight/4;
// canvas.style.top= -canvasHeight+'px';
//
// let c = canvas.getContext('2d');
//
// c.fillStyle = "green";
// c.fillRect(0,0,7,40);
// c.fillRect(790,22,7,100);
// c.fillRect(25,10,1,300);
//
// canvas.addEventListener("mousemove", function (evt) {
//     var mousePos = getMousePos(canvas, evt);
//     position.innerHTML = mousePos.x + ',' + mousePos.y +','+(28000+(mousePos.y*1.25));
// }, false);
//
// //Get Mouse Position
// function getMousePos(canvas, evt) {
//     var rect = canvas.getBoundingClientRect();
//     return {
//         x: evt.clientX - rect.left,
//         y: evt.clientY - rect.top
//     };
// }