"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// this is called decorator factory
// which is a function that returns a decorator
// why we do it?
// this allows us to pass/use parameter to the decorator
function Logger2(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
let Person7 = class Person7 {
    constructor() {
        this.name = 'jeffrey';
        console.log('creating person7 object...');
    }
};
Person7 = __decorate([
    Logger2('LOGGING - PERSON7')
], Person7);
const person7 = new Person7();
// LOGGING - PERSON7
// app.js:11 class Person7 {
//     constructor() {
//         this.name = 'jeffrey';
//         console.log('creating person7 object...');
//     }
// }
// app.js:17 creating person7 object...
