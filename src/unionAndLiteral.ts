const combine = (
    // union type
    x: string | number,
    y: string | number,
    // literal type -- type with exact value
    resultConversion: 'as-number' | 'as-text'
) => {
    let result: string | number;
    if (typeof x === 'number' && typeof y === 'number' || resultConversion === 'as-number') {
        result = +x + +y;
    } else {
        result = x.toLocaleString() + y.toLocaleString()
    }

    return result;
}

const result = combine('1', '2', 'as-text')

console.log(result)