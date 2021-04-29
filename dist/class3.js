"use strict";
class Department5 {
    // use access modifier in ctor will help you create props with the same name
    // and initialize them when object is created
    // readonly: after initialization, the value can NOT be changed
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const hr = new Department5(2, 'HR');
console.log(hr.name); // 'HR'
