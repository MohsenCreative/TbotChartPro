
let container = document.querySelector('.container');
let canvas = document.querySelector('.main-canvas');
context = canvas.getContext('2d');
canvas.style.cursor = 'crosshair';

///////////////////////////////////////////
// Set canvas width and height

canvas.width = container.offsetWidth;
canvas.height = container.offsetHeight;
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

const thicksWidth = 15; // width of candles
const thicksGap = 6; // distance between candles
const pinWidth = 1; // width of candle shadow
const pricePrecision = 2; // price precision for chart and showing price
const minStep = 0.5; // price steps for entry
const decimalSize = 0.001; // volume steps for entry
const yGap = 0.3; // of canvas height
const rightGap = 0.3; // of canvas width

////////////////////
// Variables

let maxPrice = 28150.00;
let minPrice = 27800.00;

let priceRange = maxPrice - minPrice;



let drawThicks = function(){
    context.clearRect(0, 0, cWidth, cHeight);
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
}

drawThicks();

/* ############################################################ */

let position = document.querySelector('.position');
let price = document.querySelector('.price');

canvas.onmousemove = function(e){

    let rect = this.getBoundingClientRect();
    let y = Math.abs(e.clientY-rect.top);
    let x = Math.abs(e.clientX-rect.left);
    context.clearRect(0,0, cWidth, cHeight);
    drawThicks();
    context.fillStyle = 'gray';
    context.fillRect(0,y,canvas.width,0.5);
    context.fillRect(x,0,0.5,canvas.height);
    position.firstElementChild.innerHTML = 'Positions: X= '+ x + '  Y= ' + y;
    let pricePieces = (Math.abs(maxPrice-minPrice))/canvas.height;
    let finalPrice = (minPrice+((canvas.height-y)*pricePieces));
    price.firstElementChild.innerHTML = 'Positions: X= '+ x + '  Y= ' + finalPrice.toFixed(2);

}



function priceToAxis(maxPrice,minPrice, canvasHeight,price){
    let position = canvasHeight- ((canvasHeight * (price - minPrice))/(maxPrice - minPrice));
    return Math.round(position);
}