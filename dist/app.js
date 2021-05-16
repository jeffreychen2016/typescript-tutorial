"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// this is the container that holds all of the properties that needs to be validated
const registeredValidator = {};
// again, for instance class, the target points to the prototype which has constructor object in it
// target.constructor.name = class name (Course in this case)
// this function does NOT contain the actual validation logic
// it simply only registers the property to be validated later
// the actual validation logic will be in the validate() function
function Required(target, propName) {
    console.log(target.constructor.name);
    const className = target.constructor.name;
    // here, we add the property that is marked `required`
    // into the container to be validated later
    // Course: {titile: ['required']}
    registeredValidator[className] = Object.assign(Object.assign({}, registeredValidator[className]), { [propName]: ['required'] });
}
function PostiveNumber(target, propName) {
    const className = target.constructor.name;
    // Course: {price: ['postiveNumber']}
    registeredValidator[className] = Object.assign(Object.assign({}, registeredValidator[className]), { [propName]: ['postiveNumber'] });
}
function validate(obj) {
    console.log('this is the object that needs to be validated: ');
    // Course {title: "ddd", price: 0}
    console.log(obj);
    console.log('this is the properties that needs to be validated for the given instance: ');
    // {title: Array(1), price: Array(1)}
    const objValidatorConfig = registeredValidator[obj.constructor.name];
    console.log(objValidatorConfig);
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    // here is the actual validation logic
                    isValid = isValid && !!obj[prop];
                    break;
                case 'postiveNumber':
                    // here is the actual validation logic
                    isValid = isValid && obj[prop] > 0;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PostiveNumber
], Course.prototype, "price", void 0);
const course1 = new Course('', 1);
const result1 = validate(course1);
console.log("this result is : " + result1); // return false
const course2 = new Course('course2', 2);
const result2 = validate(course2);
console.log("this is result 2: " + result2); // return true
