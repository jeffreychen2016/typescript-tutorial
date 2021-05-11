function Logger3(message: string) {
    console.log('logger 3 factory function...')
    return function (constructor: any) {
        console.log('logger 3 decorator function...')
    }
}

function Logger4(message: string) {
    console.log('logger 4 factory function...')
    return function (constructor: any) {
        console.log('logger 4 decorator function...')
    }
}



@Logger3('3')
@Logger4('4')
class Person9 {
    constructor() { }
}

// note here
// the factory function runs on ASC order
// the actual decorator function runs on DESC order
// and the factory function runs before any decorator function runs

// app.js:9 logger 3 factory function...
// app.js:15 logger 4 factory function...
// app.js:17 logger 4 decorator function...
// app.js:11 logger 3 decorator function...


