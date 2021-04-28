"use strict";
const add = (x, y) => x + y;
// function type
// any function that matches the signature
let combineValues;
combineValues = add;
console.log(combineValues(1, 2));
// callback
function sendRequest(data, cb) {
    // ... sending a request with "data"
    return cb({ data: 'Hi there!' });
}
sendRequest('Send this!', (response) => {
    console.log(response);
    // here... it is not going to throw error
    // the return value will just get ignored for callback function
    return true;
});
