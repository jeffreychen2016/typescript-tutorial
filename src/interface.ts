// interface serve as contract
// we can use it for type check
// NOTE: if use it for type check,
// then the object must match the interface extactly
// if use it for class
// then the class can have more properties than speicified in the interface, see below example
interface Person {
    name: string;
    age: number;

    greet(phrase: string): void
}

let user2: Person;

// the users 2 must have all the properties defined in the interface
user2 = {
    name: "jeffrey",
    age: 30,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name)
    }
}

// interface can also be used for class
// the class implements the interface must have all the properties
interface Greetable {
    name: string;
    greet(phrase: string): void
}

class Person3 implements Greetable {
    name: string;

    // here, it is ok to have more members than the interface speicified
    age: number;

    constructor(n: string) {
        this.name = n
        this.age = 28
    }

    greet(phrase: string) {
        console.log(this.name + ' ' + phrase)
    }
}

// ***Important*** p3 can be both Greetable and Person3
// let p3: Greetable;
let p3: Person3;
p3 = new Person3('jeffrey')
p3.greet('aaa')

// interface vs abstract class
// interface: no implementaion at all
// abstract class: can have its own impementation. only abstract memebers do have implementation

