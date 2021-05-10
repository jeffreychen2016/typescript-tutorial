// add constraints to type parameters using `extends object`
// here we said, i do not care what the types are, but they have to be object
function merge2<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

const newObject2 = merge2({ name: 'Jeffrey' }, { age: 28 })
console.log(newObject2.name)