"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger3(message) {
    console.log('logger 3 factory function...');
    return function (constructor) {
        console.log('logger 3 decorator function...');
    };
}
function Logger4(message) {
    console.log('logger 4 factory function...');
    return function (constructor) {
        console.log('logger 4 decorator function...');
    };
}
let Person9 = class Person9 {
    constructor() { }
};
Person9 = __decorate([
    Logger3('3'),
    Logger4('4')
], Person9);
// note here
// the factory function runs on ASC order
// the actual decorator function runs on DESC order
// and the factory function runs before any decorator function runs
// app.js:9 logger 3 factory function...
// app.js:15 logger 4 factory function...
// app.js:17 logger 4 decorator function...
// app.js:11 logger 3 decorator function...
