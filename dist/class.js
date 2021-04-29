"use strict";
console.log('hello.....');
class Department {
    /**
     * ctor
     */
    constructor(n) {
        this.name = n;
    }
    // method
    describe() {
        console.log('This is department: ' + this.name);
    }
}
const accounting = new Department('Accounting');
console.log(accounting);
accounting.describe();
// about THIS keyword. it is scoped to whatever that calls the method
// in this case, the new object which does not have `name` property
const accountingCopy = { describe: accounting.describe };
accountingCopy.describe(); // this is going to return undefined
accountingCopy.describe.bind(accounting)(); // this will work, need to bind to original object, so `this` in the context of the orignal object
// OR, we can add parameter to CLASS describe method
class Department2 {
    /**
     * ctor
     */
    constructor(n) {
        this.name = n;
    }
    // method
    // this: Department2 -- means the method can only be invoked by the instance of Department2 or the object that has the same shape as department2 object
    // it is additional type safety
    describe() {
        console.log('This is department: ' + this.name);
    }
}
// this does not work
const accounting2 = new Department2('accounting2');
const accounting2Copy = { describe: accounting2.describe };
// accounting2Copy.describe()  // this will give type error
// this works
const accounting3 = new Department2('accounting3');
const accounting3Copy = { name: 'accounting3', describe: accounting3.describe };
accounting3Copy.describe();
