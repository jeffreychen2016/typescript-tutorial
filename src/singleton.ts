// singleton pattern ensures that there is always going to be ONLY 1 instance of the class
// use private constructor to make singleton class
class Department11 {
    private static instance: Department11

    // the class with private constructor can only have 1 instance
    // and can only be instantiate within the class itself
    private constructor() { }

    // to instantiate the singleton class
    // we will need to use static property `instance`
    // again, because the static member can only be accessed by other static members
    // so, we mark the method static as well
    static getInstance() {
        if (Department11.instance) {
            return this.instance
        } else {
            this.instance = new Department11()
            return this.instance
        }
    }

    describe() {
        console.log('this is singleton class instance')
    }
}


// const d2 = new Department11() // this will fail because private constructor can only be called within the class itself

// this is the right way of instantiating singleton class
const s = Department11.getInstance()
s.describe()