function WithTemplate(template: string, hookId: string) {
    // not sure why the type of constructor is ANY
    // why it is not FUNCTION ??? since it is attached to the class???
    return function (constructor: any) {
        const hookEle = document.getElementById(hookId)
        // we can instantiate the class here (whatever class the decorator is attached on)
        // and then access the values from the instance
        const p = new constructor()
        if (hookEle) {
            hookEle.innerHTML = template
            hookEle.querySelector('h1')!.textContent = p.name
        }
    }
}

// before this class is instantiated
// the WithTemplate will run and look for html element with id `app`
// and inject the `h1` into it
@WithTemplate('<h1>aaaa</h1>', 'app')
class Person8 {
    name: string;

    constructor() {
        this.name = 'jeffrey chen'
    }
}

// const person8 = new Person8()