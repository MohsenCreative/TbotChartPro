let draggable = document.getElementById("draggable");
let chart = document.getElementById("chart-container");
let cordinates = document.getElementById("cordinates");
console.log(chart.offsetHeight);

let rect = chart.getBoundingClientRect().y;
console.log(rect);

//draggable.onmousedown = mouseDown;


function mouseDown(elementId){
    document.onmousemove = function(e){
        e.preventDefault();
        console.log('moving');
        let thisElement = document.getElementById(elementId);
        if(e.clientY > rect && e.clientY < ((chart.offsetHeight+rect)-thisElement.offsetHeight)){
            thisElement.style.top = (e.clientY - rect)+'px';
        }
    };
    document.onmouseup = function(e){
        let thisElement = document.getElementById(elementId);
        console.log(e.clientY);
        document.onmouseup = null;
        document.onmousemove = null;
    };

}


