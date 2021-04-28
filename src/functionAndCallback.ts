const add = (x: number, y: number) => x + y

// function type
// any function that matches the signature
let combineValues: (v1: number, v2: number) => number;

combineValues = add;

console.log(combineValues(1, 2));

// callback
function sendRequest(data: string, cb: (response: any) => void) {
    // ... sending a request with "data"
    return cb({ data: 'Hi there!' });
}

sendRequest('Send this!', (response) => {
    console.log(response);
    // here... it is not going to throw error
    // the return value will just get ignored for callback function
    return true;
});