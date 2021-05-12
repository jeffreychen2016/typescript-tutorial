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
function AccessorDecorator(target: any, accessorName: string, descriptor: PropertyDescriptor) {
    console.log('Accessor Decorator!')
    console.log(target)
    console.log(accessorName)
    console.log(descriptor)
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
function MethodDecorator(target: any, methodName: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method Decorator!')
    console.log(target)
    console.log(methodName)
    console.log(descriptor)
}

// target: if instance class, then prototype. if static class, then constructor
// methodName: the name of the method (NOT the parameter name), in this case (printPrice). Note that, this is same as MethodDecorator
// parameterPosition: the position of the parameter starting from 0
function ParameterDecorator(target: any, methodName: string | Symbol, parameterPosition: number) {
    console.log('Parameter Decorator!')
    console.log(target)
    console.log(methodName)
    console.log(parameterPosition)
}


class Product2 {
    private _price: number = 0;

    constructor() { }

    @AccessorDecorator
    set price(val: number) {
        this._price = val
    }

    @MethodDecorator
    printPrice(@ParameterDecorator val: number) {
        console.log('this price is: ' + this._price)
    }
}