class Department9 {
    // static properties can only be accessed by the static members
    // for none static members to access it
    // will need to use `Department.fiscalYear`
    static fiscalYear = 2000;

    // static method can only be called in the class
    // can not be called in the class instance

    // normally we use static methods for utility functions
    // and use the class like a grouping container 
    static createEmployee() {
        console.log('creating a new employee...')
    }
}

Department9.createEmployee()

