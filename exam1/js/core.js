'use strict';
const core = {
    getInputNumber : (el) => {
        return el.value||'0';
    },
    setInputNumber : (num) => {
        return num;
    }
};

export default core;