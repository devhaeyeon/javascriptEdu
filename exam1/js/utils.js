'use strict';
const utils = {
    increase : (origin, n) => {
        if (typeof n !== "number" && typeof origin !=="number") return false;         
        return origin += n;
    },
    decrease : (origin, n) => {
        if (typeof n !== "number" && typeof origin !=="number") return false;
        return origin -= n;
    }
};

export default utils;