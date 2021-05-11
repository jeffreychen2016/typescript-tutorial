// this is just a decorator function
// not a decorator factory
function Log(target: any, propertyName: string | symbol) {
    console.log('This is property decorator...')
    console.log(target, propertyName)
}


class Product {
    // if decorator is attached to instance property then `target` will be the prototype
    // if decorator is attached to static property then `target` will be the constructor

    // in this case, this is a instance property, so the target refers to prototype:
    // {constructor: ƒ, printTitle: ƒ}
    // constructor: class Product
    // printTitle: ƒ printTitle()
    // __proto__: Object

    // it is same as the decorator for class
    // it is executed when the class code is rea
    // (NOT the class is instantiated)
    @Log
    title: string

    constructor(title: string) {
        this.title = title
    }

    printTitle() {
        console.log('this is product: ' + this.title)
    }
}

const p1 = new Product('cabinet')


// p1.printTitle()