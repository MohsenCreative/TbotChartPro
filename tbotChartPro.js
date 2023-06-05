import { klines } from './variables.js';
import { setDimentions } from './dimentions.js';
import { drawThicks } from './drawThicks.js';

///////////////////////////////////////////////////////////////////////////////////////////
///// draw thicks
///////////////////////////////////////////////////////////////////////////////////////////










    window.addEventListener('load',function(){
        setDimentions();
        drawThicks(klines);

        window.addEventListener('resize',function(){
            setDimentions();

        });

    });