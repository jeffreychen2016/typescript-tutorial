"use strict";
// create our own generic
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
// const newObject = merge<{ name: string }, { age: number }>({ name: 'Jeffrey' }, { age: 28 })
// we can omit the `<{ name: string }, { age: number }>` here
// the TS will auto fill in the concrete values to these type parameters
const newObject = merge({ name: 'Jeffrey' }, { age: 28 });
console.log(newObject.name);
