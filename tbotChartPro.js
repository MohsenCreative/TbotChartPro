
let container = document.querySelector('.main-canvas-div');

let priceCanvas = document.querySelector('.price-canvas');
let timeCanvas = document.querySelector('.time-canvas');
let canvas = document.querySelector('.main-canvas');

context = canvas.getContext('2d');
priceContext = priceCanvas.getContext('2d');
timeContext = timeCanvas.getContext('2d');
canvas.style.cursor = 'crosshair';
priceCanvas.style.cursor = 'ns-resize';
timeCanvas.style.cursor = 'ew-resize';

///////////////////////////////////////////
// Set canvas width and height

canvas.width = container.clientWidth;
canvas.height = container.clientHeight;

timeCanvas.width = timeCanvas.parentElement.offsetWidth;
timeCanvas.height = timeCanvas.parentElement.offsetHeight;

priceCanvas.width = priceCanvas.parentElement.offsetWidth;
priceCanvas.height = priceCanvas.parentElement.offsetHeight;

let cWidth =canvas.width;
let cHeight = canvas.height;


/////////////////////
// Data

let thicks = []; // candlestick data

thicks.push({open:27971.00, close:27938.00, high:27971.00, low:27936.00});
thicks.push({open:27959.00, close:27969.00, high:27969.00, low:27904.00});
thicks.push({open:27974.00, close:27961.00, high:28012.00, low:27961.00});
thicks.push({open:28005.00, close:27973.00, high:28005.00, low:27947.00});
thicks.push({open:28011.00, close:27977.00, high:28019.00, low:27977.00});
thicks.push({open:28017.00, close:28023.00, high:28031.00, low:28007.00});
thicks.push({open:27993.00, close:27999.00, high:28022.00, low:27982.00});
thicks.push({open:27983.00, close:27975.00, high:28022.00, low:27971.00});
thicks.push({open:27968.00, close:27984.00, high:27996.00, low:27948.00});
thicks.push({open:28051.00, close:27970.00, high:28072.00, low:27970.00});
thicks.push({open:27970.00, close:28050.00, high:28051.00, low:27963.00});
thicks.push({open:27952.00, close:27970.00, high:27970.00, low:27945.00});
thicks.push({open:27952.00, close:27936.00, high:27955.00, low:27930.00});
thicks.push({open:27944.00, close:27954.00, high:27960.00, low:27907.00});
thicks.push({open:27936.00, close:27932.00, high:27957.00, low:27913.00});


thicks.reverse();
//////////////////////
// Constants

const thicksWidth = 11; // width of candles
const thicksGap = 6; // distance between candles
const pinWidth = 1; // width of candle shadow
const pricePrecision = 2; // price precision for chart and showing price
const minStep = 0.5; // price steps for entry
const decimalSize = 0.001; // volume steps for entry
const yGap = 0.3; // of canvas height
const rightGap = 0.3; // of canvas width
const gridHeight = 0.1;

////////////////////
// Variables
let scale = -0.001;
let maxPrice = 28150.00;
let minPrice = 27800.00;
maxPrice = maxPrice+(maxPrice*scale);
minPrice = minPrice-(minPrice*scale);
let priceRange = Math.abs(maxPrice - minPrice);



let drawThicks = function(){
    context.clearRect(0, 0, cWidth, cHeight);
    priceContext.clearRect(0, 0, priceCanvas.width, priceCanvas.height);
    ww = thicksWidth;
    for (let thick of thicks){
        let highPosition = priceToAxis(maxPrice,minPrice, cHeight,thick.high);
        let lowPosition = priceToAxis(maxPrice,minPrice, cHeight,thick.low);
        let openPosition = priceToAxis(maxPrice,minPrice, cHeight,thick.open);
        let closePosition = priceToAxis(maxPrice,minPrice, cHeight,thick.close);

        let bodyY = Math.abs(closePosition - openPosition);
        let shadowY = Math.abs(highPosition - lowPosition);

        context.fillStyle = (thick.close>thick.open ? '#16b7a8' : '#ff504d');
        context.fillRect( ww, (thick.close>thick.open ?closePosition : openPosition),thicksWidth, bodyY);
        context.fillRect( (ww+((thicksWidth/2)-(pinWidth/2))),highPosition ,pinWidth, shadowY);
        ww+=(thicksWidth+thicksGap);
    }
    context.fillStyle = 'rgba(220,220,220,0.1)';
    context.fillRect(cWidth-1,0,1,cHeight);
    context.fillRect(0,cHeight-1,cWidth,1);

    let priceLine = minPrice;
    let linePos = priceToAxis(maxPrice,minPrice,cHeight,priceLine);
    context.fillStyle = 'rgba(220,220,220,0.05)';
    context.fillRect(0,linePos,cWidth,1);
    priceContext.fillStyle = 'rgba(220,220,220,0.9)';
    priceContext.fillText(priceLine.toFixed(pricePrecision), 7, linePos+4);
    do {
        priceLine += (priceRange*gridHeight);
        let linePos = priceToAxis(maxPrice,minPrice,cHeight,priceLine);
        context.fillStyle = 'rgba(220,220,220,0.05)';
        context.fillRect(0,linePos,cWidth,1);
        priceContext.fillStyle = 'rgba(220,220,220,0.9)';
        priceContext.fillText(priceLine.toFixed(pricePrecision), 7, linePos+4);

    }while(priceLine<(maxPrice));


    //position data entry, stop, tp's

    //for Entry
    context.fillStyle = 'gray';
    let entryPrice = '27959.4';
    let entry = priceToAxis(maxPrice,minPrice,cHeight,entryPrice);
    context.fillRect(0,entry,canvas.width,1);
    context.fillRect(cWidth-80,entry-10,80,20);
    context.fillStyle = 'rgb(255,255,255)';

    context.fillText('E: 100$',cWidth-60,entry+4);
    priceContext.fillStyle = 'rgba(100,100,100,1)';

    priceContext.fillRect(0,entry-10,priceCanvas.width,20);
    priceContext.fillStyle = 'rgba(100,100,100,1)';
    priceContext.fillStyle = 'rgb(255,255,255)';
    priceContext.fillText(entryPrice,7,entry+4);

//for Tp1
    context.fillStyle = '#1D3D14';
    let t1Price = '28000';
    let t1 = priceToAxis(maxPrice,minPrice,cHeight,t1Price);
    context.fillRect(0,t1,canvas.width,1);
    context.fillRect(cWidth-80,t1-10,80,20);
    context.fillStyle = 'rgb(255,255,255)';

    context.fillText('TP1: 0.9%',cWidth-60,t1+4);
    priceContext.fillStyle = '#1D3D14';

    priceContext.fillRect(0,t1-10,priceCanvas.width,20);
    priceContext.fillStyle = 'rgba(100,100,100,1)';
    priceContext.fillStyle = 'rgb(255,255,255)';
    priceContext.fillText(t1Price,7,t1+4);


//for Stop
    context.fillStyle = '#431111';
    let stopPrice = '27899';
    let stop = priceToAxis(maxPrice,minPrice,cHeight,stopPrice);
    context.fillRect(0,stop,canvas.width,1);
    context.fillRect(cWidth-80,stop-10,80,20);
    context.fillStyle = 'rgb(255,255,255)';

    context.fillText('SL: 0.8%',cWidth-60,stop+4);
    priceContext.fillStyle = '#431111';

    priceContext.fillRect(0,stop-10,priceCanvas.width,20);
    priceContext.fillStyle = 'rgba(100,100,100,1)';
    priceContext.fillStyle = 'rgb(255,255,255)';
    priceContext.fillText(stopPrice,7,stop+4);
}



drawThicks();

/* ############################################################ */

let position = document.querySelector('.position');

canvas.onmousemove = function(e){

    let rect = this.getBoundingClientRect();
    let y = Math.abs(e.clientY-rect.top);
    let x = Math.abs(e.clientX-rect.left);
    context.clearRect(0,0, cWidth, cHeight);
    timeContext.clearRect(0,0,timeCanvas.width,timeCanvas.height);
    drawThicks();
    context.fillStyle = 'gray';
    context.fillRect(0,y,canvas.width,0.5);
    context.fillRect(x,0,0.5,canvas.height);
    position.firstElementChild.nextElementSibling.innerHTML = 'Positions: X= '+ x + '  Y= ' + y;
    let pricePieces = (priceRange)/canvas.height;
    let finalPrice = (minPrice+((canvas.height-y)*pricePieces));
    priceContext.fillStyle = 'rgba(100,100,100,1)';
    priceContext.fillRect(0,y-10,priceCanvas.width,20);
    priceContext.fillStyle = 'rgb(255,255,255)';
    finalPrice = finalPrice.toFixed(pricePrecision);
    priceContext.fillText(finalPrice,7,y+4);
    position.firstElementChild.innerHTML = '  Price: ' + finalPrice;

    timeContext.fillStyle = 'rgba(100,100,100,1)';
    timeContext.fillRect(x-70,0,140,20);

}

canvas.onmouseleave = function(){
    context.clearRect(0,0, cWidth, cHeight);
    timeContext.clearRect(0,0,timeCanvas.width,timeCanvas.height);
    drawThicks();
}

function priceToAxis(maxPrice,minPrice, canvasHeight,price){
    let position = canvasHeight- ((canvasHeight * (price - minPrice))/(maxPrice - minPrice));
    return Math.round(position);
}