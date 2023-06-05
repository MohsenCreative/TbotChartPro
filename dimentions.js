
///////////////////////////////////////////////////////////////////////////////////////////
///// First chart ui dimentions set
///////////////////////////////////////////////////////////////////////////////////////////


let setDimentions = function () {
    let chartContainer = document.getElementById('chart-container');
    let mainCanvasParent = document.querySelector('.main-canvas-div');
    let mainCanvas = document.querySelector('.main-canvas');
    let operatorsCanvas = document.querySelector('.operators-canvas');

    let priceCanvasParent = document.querySelector('.price-canvas-div');
    let priceCanvas = document.querySelector('.price-canvas');
    let priceOperatorsCanvas = document.querySelector('.price-operators-canvas');

    let timeCanvasParent = document.querySelector('.time-canvas-div');
    let timeCanvas = document.querySelector('.time-canvas');
    let timeOperatorsCanvas = document.querySelector('.time-operators-canvas');

    chartContainer.setAttribute("style",'height:'+(window.innerHeight-10)+'px;width:'+(window.innerWidth-(window.innerWidth*0.4))+'px;');

    mainCanvas.width = mainCanvasParent.offsetWidth;
    mainCanvas.height = mainCanvasParent.offsetHeight;
    operatorsCanvas.width = mainCanvasParent.offsetWidth;
    operatorsCanvas.height = mainCanvasParent.offsetHeight;

//// price height and width
    priceCanvas.width = priceCanvasParent.offsetWidth;
    priceCanvas.height = priceCanvasParent.offsetHeight;
    priceOperatorsCanvas.width = priceCanvasParent.offsetWidth;
    priceOperatorsCanvas.height = priceCanvasParent.offsetHeight;


//// time height and width
    timeCanvas.width = timeCanvasParent.offsetWidth;
    timeCanvas.height = timeCanvasParent.offsetHeight;
    timeOperatorsCanvas.width = timeCanvasParent.offsetWidth;
    timeOperatorsCanvas.height = timeCanvasParent.offsetHeight;
}


export { setDimentions };