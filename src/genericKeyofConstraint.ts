// `keyof` tyoe constraint
// it means the U must be the property key of the T (the object)
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key]
}

// when we call the method, the second parameter must be the key of the first parameter
const result6 = extractAndConvert({ name: 'Jeffrey' }, 'name')
console.log(result6) // Value: Jeffrey