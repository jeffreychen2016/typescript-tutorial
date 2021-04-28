
// 1. do not need to specify object type like this
// const person: { name: string; age: number } = {
//     name: 'jeffrey',
//     age: 28
// }

// 2. use the ts inferred type
// const person = {
//     name: 'Jeffrey Chen',
//     age: 28,
//     hobbies: ['Supports', 'Cooking'],
// }

// 3. overrides the inferred type if needed
enum Role2 { ADMIN = "ADMIN", READ_ONLY = "READ_ONLY", AUTHOR = "AUTHOR" }

const person: {
    name: string;
    age: number;
    hobbies: string[];
    // this is called Tuple type -- a fixed array with fixed types in it. 
    // the types in the array can NOT be changed
    // however, it is still ALLOWED to change the value (as long as it is the same type) and push new elements into the array.
    role: [number, string],
    role2: Role2
} = {
    name: 'Jeffrey Chen',
    age: 30,
    hobbies: ['Sports'],
    role: [2, 'author'],
    role2: Role2.AUTHOR
}


console.log(person.name)
person.hobbies.map(console.log)
console.log(person.role[1])
console.log(person.role2)
