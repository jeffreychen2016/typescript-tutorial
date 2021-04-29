class Department6 {
    // IMPORTANT:
    // private: only this class has access
    // public: can access anywhere
    // protected: only this class and the class inherit it can access it
    constructor(public readonly id: number, public name: string) { }
}


class ITDepartment extends Department6 {

    // here, the `id` does not access modifier because we do not need to create property of id in this class
    // once it inherit from the Department6, this class will have access to all of the public members (props and methods) created in base class
    // we simply just pass the id to super(), which calls the base class's constructor

    // and, we add new property for this class (ITDepartment) only

    constructor(id: number, public manager: string) {
        // when inherit from another class
        // use `super` to call the base calss's constructor
        // here: pass the id to the base constructor, since the IT deparment is always IT, so hard-code the IT for name
        super(id, 'IT');
    }
}

const it = new ITDepartment(1, 'boss')

console.log(it.id)
console.log(it.name)
console.log(it.manager)
