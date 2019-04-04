'use strict';
const event = {
    bindEvents : (el, type, listener, options) => {
        options = options || false;
        el.addEventListener(type, listener, options);
    }
};

export default event;