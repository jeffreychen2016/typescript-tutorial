"use strict";
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
var Role2;
(function (Role2) {
    Role2["ADMIN"] = "ADMIN";
    Role2["READ_ONLY"] = "READ_ONLY";
    Role2["AUTHOR"] = "AUTHOR";
})(Role2 || (Role2 = {}));
const person = {
    name: 'Jeffrey Chen',
    age: 30,
    hobbies: ['Sports'],
    role: [2, 'author'],
    role2: Role2.AUTHOR
};
console.log(person.name);
person.hobbies.map(console.log);
console.log(person.role[1]);
console.log(person.role2);
