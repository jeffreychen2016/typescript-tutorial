interface Named {
    readonly name: string
}

interface Greetable2 {
    greet(): void
}

// a class can implement more than 1 interfaces
// the class must implements all of the interfaces
// in this case, name and greet must be implmented in this class
class Person4 implements Greetable2, Named {
    name: string

    constructor(n: string) {
        this.name = n
    }

    greet() {
        console.log('aaa')
    }
}

// OR
// we can extends interface from another interface to form combined interface
// now, this Greetable3 is combined interface where if a class implements Greetable3
// the class must implements both `name` and `greet`
interface Greetable3 extends Named {
    greet(): void
}

class Person5 implements Greetable3 {
    name: string

    constructor(n: string) {
        this.name = n
    }

    greet() {
        console.log('aaa')
    }
}
