type Employee = {
    name: string
    startDate: Date
}

type Admin = {
    name: string
    privileges: string[]
}

// this is intersection type:
// NOTE: if the types are object like what we have, the intersection is combination of 2 types
// if the types are UNION type: type1: string | number, type2: number | boolean; type3 = type 1 & type2
// then type3 will be type of `number` because that is intersaction of type 1 and 2
type ElevatedEmployee = Employee & Admin

const e1: ElevatedEmployee = {
    name: 'Jeffrey',
    startDate: new Date(),
    privileges: ['create-user']
}

console.log(e1)

// OR
// we can aslo achive the same thing using interfaces
interface IEmployee {
    name: string
    startDate: Date
}

interface IAdmin {
    name: string
    privileges: string[]
}

interface IElevatedEmployee extends IEmployee, IAdmin { }

const e2: ElevatedEmployee = {
    name: 'Jeffrey',
    startDate: new Date(),
    privileges: ['delete-user']
}

console.log(e2)
