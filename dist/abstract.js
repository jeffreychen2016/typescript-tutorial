"use strict";
class Department10 {
}
class ITDepartment3 extends Department10 {
    descritbe() {
        console.log('this is IT department 3...');
    }
}
// can not instantiate abstract class
// const d = new Department10() // this will throw type error
const it3 = new ITDepartment3();
it3.descritbe();
