// again, we can use RETURN value in both class decorator and method decorator
// to change behaviors. (accessor and property decorator can also have return value, but they are ignored by TS)
// here is an example of method decorator behavior change

// method decorator
function Autobind(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        // getter
        get() {
            // `this` here is inside of getter and responsible for whatever trigger the getter
            // the getter will be triggered only from the concrete instance of class
            // in another words, `this` here will always refers to the context of the class instance
            const boundFn = originalMethod.bind(this)
            return boundFn
        }
    }

    return adjDescriptor
}

class Printer {
    message = 'this works!'

    @Autobind
    print() {
        console.log(this.message)
    }
}

const printer = new Printer()

const button = document.querySelector('button')!

// this will return `undefined` if the there is no Autobind
// or had to `printer.print.bind(printer)` because `this` keyword refers to the context of calling object
// but, we can use Autobind here
button.addEventListener('click', printer.print)