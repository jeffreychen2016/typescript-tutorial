"use strict";
// 1. decorator is just a function. normally cap the first letter to distinguish from normal function
// 2. decorator can be placed in different places. depending on where it is placed，it will take in different arguments
// 3. when placing the decorator on a class, the first argument will be `target` (aka: contructor)
// 4. the decorator is executed when the class being decorated is defined. (not the instantiation of class being decorated) 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(constructor) {
    console.log('logging...');
    console.log(constructor);
}
let Person6 = class Person6 {
    constructor() {
        this.name = 'Max';
        console.log('creating new person object...');
    }
};
Person6 = __decorate([
    Logger
], Person6);
const pers = new Person6();
// logging...
// app.js:14 class Person6 {
//     constructor() {
//         this.name = 'Max';
//         console.log('creating new person object...');
//     }
// }
// app.js:19 creating new person object...
