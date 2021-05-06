"use strict";
let user2;
// the users 2 must have all the properties defined in the interface
user2 = {
    name: "jeffrey",
    age: 30,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
class Person3 {
    constructor(n) {
        this.name = n;
        this.age = 28;
    }
    greet(phrase) {
        console.log(this.name + ' ' + phrase);
    }
}
// ***Important*** p3 can be both Greetable and Person3
// let p3: Greetable;
let p3;
p3 = new Person3('jeffrey');
p3.greet('aaa');
// interface vs abstract class
// interface: no implementaion at all
// abstract class: can have its own impementation. only abstract memebers do have implementation
