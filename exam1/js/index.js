import utils from './utils';
import core from './core';
import ui from './ui';
import event from './event';
!(function() {
    const inpNumberEl = document.getElementById('inpNumber');
    const btnDecreaseEl = document.querySelector('.btn_decrease');
    const btnIncreaseEl = document.querySelector('.btn_increase');
    const COUNT_UNIT = 1;
    const NUMBER_MAX = 5;
    const NUMBER_MIN = 0;

    let inpNumberValue = core.getInputNumber(inpNumberEl);
    
    const calculatedInputNumber = (type, el) => (e) =>  {
        e.preventDefault();
        inpNumberValue = parseInt(core.getInputNumber(el));
        let calculateNumber = utils[type](inpNumberValue, COUNT_UNIT);
        if(NUMBER_MAX < calculateNumber || NUMBER_MIN > calculateNumber) return false;
        ui.changeInputValue(el, calculateNumber);
    }

    const changeInputNumber = (el) => (e) =>  {
        e.preventDefault();
        inpNumberValue = parseInt(core.getInputNumber(e.target));
        if(typeof inpNumberValue !== 'number') return false;
        ui.changeInputValue(el, inpNumberValue);
    }

    event.bindEvents(btnIncreaseEl,'click',calculatedInputNumber('increase',inpNumberEl));
    event.bindEvents(btnDecreaseEl,'click',calculatedInputNumber('decrease',inpNumberEl));
    event.bindEvents(inpNumberEl,'keyup',changeInputNumber(inpNumberEl));

})();