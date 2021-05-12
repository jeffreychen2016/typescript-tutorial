// for both class decorator and method decorator
// we can use RETURN to modify/extend the original behavior of the class constructor/methods
// again, this is the decorator factory (the function that returns the actual decorator)
// this allows the docorator to takes in additional inputs
function CreateTemplate(template: string, hookId: string) {
    console.log('CreateTemplate factory')
    // this is the actual decorator function
    // T: the type of original constructor

    // { new(...args: any[]): { name: string } }: the function that can be `new`, and take in unlimited parameters
    // however, the function will return object with `name` property in it
    // in another words, the type of originalConstructor should be 
    // 1: a function that can be `new`
    // 2. the function takes in unlimited arguments
    // 3. and in the end, the function will return object with `name` property in it
    return function <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) {
        console.log('CreateTemplate decorator')
        // we extend the behavior of the original construtor（returning new constructor function that extends the orignal constructor function）
        // or we can also say, we replace the original class with new class
        // the original construtor does nothing (accoring to the Product3 class)
        // now, when we instantiate the Product3, the following code will run
        return class extends originalConstructor {
            constructor(...args: any[]) {
                // we need to call the original constructor with whatever parameters received when instantiating the class
                // NOTE: the tutorial did not do this.
                // ***IMPORTANT*** the code in the original constructor will still run
                super(...args)
                console.log('rendering template...')
                const hookEle = document.getElementById(hookId)
                if (hookEle) {
                    hookEle.innerHTML = template
                    hookEle.querySelector('h1')!.textContent = this.name
                }
            }
        }
    }
}

@CreateTemplate('<h1></h1>', 'app')
class Product3 {
    name = 'Jeffrey';

    constructor() {
        console.log('this is the original constructor call...')
    }
}

// now, when the class is instantiated, the rendering code will run.
// CreateTemplate factory
// app.js:23 CreateTemplate decorator
// app.js:46 this is the original constructor call...
// app.js:33 rendering template...
const p33 = new Product3()

// another class example with parameter for constructor
@CreateTemplate('<h1></h1>', 'app')
class Product4 {
    name: string

    constructor(n: string) {
        this.name = n
    }
}

const p44 = new Product4('kevin')