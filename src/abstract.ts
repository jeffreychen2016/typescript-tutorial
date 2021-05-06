abstract class Department10 {
    // abstract method must be implmented by the class that inherit this class
    // void in here is the return type of the method
    abstract descritbe(this: Department10): void;
}

class ITDepartment3 extends Department10 {
    descritbe() {
        console.log('this is IT department 3...')
    }
}

// can not instantiate abstract class
// const d = new Department10() // this will throw type error

const it3 = new ITDepartment3()
it3.descritbe()