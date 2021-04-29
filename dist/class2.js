"use strict";
class Department4 {
    // ctor
    constructor(n) {
        // use PRIVATE keyword, so that this property can only be accessed within the class
        // department4.employees[2] = 'ooooo' will NOT work anymore. it does not have access to the property from outside world anymore
        this.employees = [];
        this.name = n;
    }
    //methods
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployees() {
        console.log(this.employees);
    }
}
const department4 = new Department4('IT');
department4.addEmployee('Jeffrey');
department4.addEmployee('Kevin');
// department4.employees[2] = 'ooooo' // this will not work with PRIVATE property
department4.printEmployees();
// If there is NO `this: Department4` in the method `addEmployee`, the following could work
// again, `this: Department4` means the method can only be invoked in the instance of Department4
// const department4Copy = { employees: [], addEmployee: department4.addEmployee }
// department4Copy.addEmployee('aaaa')
// console.log(department4Copy.employees)
