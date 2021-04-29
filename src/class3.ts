class Department5 {
    // use access modifier in ctor will help you create props with the same name
    // and initialize them when object is created
    // readonly: after initialization, the value can NOT be changed
    constructor(private readonly id: number, public name: string) { }
}

const hr = new Department5(2, 'HR')

console.log(hr.name) // 'HR'