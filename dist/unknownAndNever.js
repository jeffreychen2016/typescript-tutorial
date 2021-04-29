"use strict";
// unknown type
let userInput;
let userName;
// unknown type can not be assigned to string here
// userName = userInput
// unknown is similar to ANY type, but more restrict
// use it when you do not know what the initial type is 
// but, you know you will eventually know the type
// at that moment, just add type check for runtime
if (typeof userInput === 'string') {
    userName = userInput;
}
// never type
// unlike void type, when console.log the result of generateError funciton, you get nothing
// when console.log the result of void returning function, you get undefined
const generateError = (message, code) => {
    throw { message: message, errorCode: code };
};
