interface ValidatorConfig {
    // this will be class name
    [property: string]: {
        // key: will be the property name which will need to be validated
        // value: will the validator like  required; postive
        [validatableProp: string]: string[] // required; postive
    }
}

// this is the container that holds all of the properties that needs to be validated
const registeredValidator: ValidatorConfig = {}

// again, for instance class, the target points to the prototype which has constructor object in it
// target.constructor.name = class name (Course in this case)
// this function does NOT contain the actual validation logic
// it simply only registers the property to be validated later
// the actual validation logic will be in the validate() function
function Required(target: any, propName: string) {
    console.log(target.constructor.name)
    const className = target.constructor.name
    const validators = registeredValidator[target.constructor.name]?.[propName] ?? []
    // here, we add the property that is marked `required`
    // into the container to be validated later
    // Course: {titile: ['required']}
    registeredValidator[className] = {
        ...registeredValidator[className],
        // one property could have multiple validators.
        // spread the existing validators and add this `required` validator
        [propName]: [...validators, 'required']
    }
}

function PostiveNumber(target: any, propName: string) {
    const className = target.constructor.name;
    const validators = registeredValidator[target.constructor.name]?.[propName] ?? []
    // Course: {price: ['postiveNumber']}
    registeredValidator[className] = {
        ...registeredValidator[className],
        [propName]: [...validators, 'postiveNumber']
    }
}


function validate(obj: any) {
    console.log('this is the object that needs to be validated: ')
    // Course {title: "ddd", price: 0}
    console.log(obj)
    console.log('this is the properties that needs to be validated for the given instance: ')
    // {title: Array(1), price: Array(1)}
    const objValidatorConfig = registeredValidator[obj.constructor.name];
    console.log(objValidatorConfig)
    if (!objValidatorConfig) {
        return true
    }

    let isValid = true
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    // here is the actual validation logic
                    isValid = isValid && !!obj[prop]
                    break
                case 'postiveNumber':
                    // here is the actual validation logic
                    isValid = isValid && obj[prop] > 0
            }
        }
    }

    return isValid
}

class Course {
    @Required
    title: string
    @PostiveNumber
    price: number

    constructor(t: string, p: number) {
        this.title = t
        this.price = p
    }
}


const course1 = new Course('', 1)

const result1 = validate(course1)
console.log("this result is : " + result1) // return false


const course2 = new Course('course2', 2)
const result2 = validate(course2)
console.log("this is result 2: " + result2) // return true
