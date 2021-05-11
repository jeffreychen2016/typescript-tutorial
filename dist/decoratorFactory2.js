"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function WithTemplate(template, hookId) {
    // not sure why the type of constructor is ANY
    // why it is not FUNCTION ??? since it is attached to the class???
    return function (constructor) {
        const hookEle = document.getElementById(hookId);
        // we can instantiate the class here (whatever class the decorator is attached on)
        // and then access the values from the instance
        const p = new constructor();
        if (hookEle) {
            hookEle.innerHTML = template;
            hookEle.querySelector('h1').textContent = p.name;
        }
    };
}
// before this class is instantiated
// the WithTemplate will run and look for html element with id `app`
// and inject the `h1` into it
let Person8 = class Person8 {
    constructor() {
        this.name = 'jeffrey chen';
    }
};
Person8 = __decorate([
    WithTemplate('<h1>aaaa</h1>', 'app')
], Person8);
// const person8 = new Person8()
