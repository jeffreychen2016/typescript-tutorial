// 1. decorator is just a function. normally cap the first letter to distinguish from normal function
// 2. decorator can be placed in different places. depending on where it is placed，it will take in different arguments
// 3. when placing the decorator on a class, the first argument will be `target` (aka: contructor)
// 4. the decorator is executed when the class being decorated is defined. (not the instantiation of class being decorated) 

function Logger(constructor: Function) {
    console.log('logging...')
    console.log(constructor)
}

@Logger
class Person6 {
    name = 'Max'

    constructor() {
        console.log('creating new person object...')
    }
}

const pers = new Person6()

// logging...
// app.js:14 class Person6 {
//     constructor() {
//         this.name = 'Max';
//         console.log('creating new person object...');
//     }
// }
// app.js:19 creating new person object...


