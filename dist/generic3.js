"use strict";
// use generic type constraint here to make sure that the `element` parameter
// that pass into the function will always have `length` property
// in another words, we do not create about what the type `element` is as long as it has `length` property
function countAndDescribe(element) {
    let text = 'Got no value.';
    if (element.length === 1) {
        text = 'Got 1 elment.';
    }
    else if (element.length > 1) {
        text = 'Got ' + element.length + ' elements.';
    }
    // return a tuple here
    return [element, text];
}
// here, both string and array type have property of `length`
const result4 = countAndDescribe('test');
console.log(result4); // ["test", "Got 4 elements."]
const result5 = countAndDescribe([1, 2, 3, 4, 5]);
console.log(result5); // [Array(5), "Got 5 elements."]
