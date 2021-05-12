"use strict";
// again, we can use RETURN value in both class decorator and method decorator
// to change behaviors. (accessor and property decorator can also have return value, but they are ignored by TS)
// here is an example of method decorator behavior change
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// method decorator
function Autobind(target, methodName, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        // getter
        get() {
            // `this` here is inside of getter and responsible for whatever trigger the getter
            // the getter will be triggered only from the concrete instance of class
            // in another words, `this` here will always refers to the context of the class instance
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
class Printer {
    constructor() {
        this.message = 'this works!';
    }
    print() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "print", null);
const printer = new Printer();
const button = document.querySelector('button');
// this will return `undefined` if the there is no Autobind
// or had to `printer.print.bind(printer)` because `this` keyword refers to the context of calling object
// but, we can use Autobind here
button.addEventListener('click', printer.print);
