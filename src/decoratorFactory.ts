// this is called decorator factory
// which is a function that returns a decorator
// why we do it?
// this allows us to pass/use parameter to the decorator
function Logger2(logString: string) {
    return function (constructor: Function) {
        console.log(logString)
        console.log(constructor)
    }
}

@Logger2('LOGGING - PERSON7')
class Person7 {
    name = 'jeffrey'

    constructor() {
        console.log('creating person7 object...')
    }
}

const person7 = new Person7()

// LOGGING - PERSON7
// app.js:11 class Person7 {
//     constructor() {
//         this.name = 'jeffrey';
//         console.log('creating person7 object...');
//     }
// }
// app.js:17 creating person7 object...