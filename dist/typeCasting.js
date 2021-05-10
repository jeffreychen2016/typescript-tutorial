"use strict";
// 2 syntax can be used. they are functionally equavelent
// 1.
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')
// or
// 2
// const userInputElement = document.getElementById('user-input') as HTMLInputElement
// however, we have to make sure `document.getElementById('user-input')` is NOT null
// before we cast it, so the correct way of doing it:
// const userInputElement = document.getElementById('user-input')
// if (userInputElement) {
//     (userInputElement as HTMLInputElement).value = 'Hey there'
// }
