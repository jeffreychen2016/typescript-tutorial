"use strict";
// `keyof` tyoe constraint
// it means the U must be the property key of the T (the object)
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
// when we call the method, the second parameter must be the key of the first parameter
const result6 = extractAndConvert({ name: 'Jeffrey' }, 'name');
console.log(result6); // Value: Jeffrey
