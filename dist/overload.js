"use strict";
function add3(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const n1 = add3(1, 2); // it returns type of number instead of Combinable2 here
const s1 = add3('a', 'b'); // it returns type of string instead of Combinable2 here
// why it is useful??
// because without the method overload, the returning type will be Combinable2
// which, you can not call the string or number methods in the return valule (eg. n1.toString())
