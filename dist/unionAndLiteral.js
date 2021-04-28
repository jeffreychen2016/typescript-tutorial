"use strict";
const combine = (
// union type
x, y, 
// literal type -- type with exact value
resultConversion) => {
    let result;
    if (typeof x === 'number' && typeof y === 'number' || resultConversion === 'as-number') {
        result = +x + +y;
    }
    else {
        result = x.toLocaleString() + y.toLocaleString();
    }
    return result;
};
const result = combine('1', '2', 'as-text');
console.log(result);
