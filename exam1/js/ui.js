'use strict';
const ui = {
    changeInputValue : (el, val) => {
        el.setAttribute('value',val);
        el.value=val;
    }
};

export default ui;