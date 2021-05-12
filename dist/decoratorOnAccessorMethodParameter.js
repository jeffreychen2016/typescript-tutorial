"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 1. for access decorator (set | get)
// target: if instance class, then prototype. if static class, then constructor
// accessorName: the name of the accessor, in this case (price)
// descriptor:
// {get: undefined, enumerable: false, configurable: true, set: ƒ}
// configurable: true
// enumerable: false
// get: undefined
// set: ƒ price(val)
// __proto__: Object
function AccessorDecorator(target, accessorName, descriptor) {
    console.log('Accessor Decorator!');
    console.log(target);
    console.log(accessorName);
    console.log(descriptor);
}
// target: if instance class, then prototype. if static class, then constructor
// methodName: the name of the method, in this case (printPrice)
// descriptor: 
// {writable: true, enumerable: false, configurable: true, value: ƒ}
// configurable: true
// enumerable: false
// value: ƒ printPrice()
// writable: true
// __proto__: Object
function MethodDecorator(target, methodName, descriptor) {
    console.log('Method Decorator!');
    console.log(target);
    console.log(methodName);
    console.log(descriptor);
}
// target: if instance class, then prototype. if static class, then constructor
// methodName: the name of the method (NOT the parameter name), in this case (printPrice). Note that, this is same as MethodDecorator
// parameterPosition: the position of the parameter starting from 0
function ParameterDecorator(target, methodName, parameterPosition) {
    console.log('Parameter Decorator!');
    console.log(target);
    console.log(methodName);
    console.log(parameterPosition);
}
class Product2 {
    constructor() {
        this._price = 0;
    }
    set price(val) {
        this._price = val;
    }
    printPrice(val) {
        console.log('this price is: ' + this._price);
    }
}
__decorate([
    AccessorDecorator
], Product2.prototype, "price", null);
__decorate([
    MethodDecorator,
    __param(0, ParameterDecorator)
], Product2.prototype, "printPrice", null);
