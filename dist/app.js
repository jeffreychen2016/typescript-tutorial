"use strict";
// class Book {
//     title: string;
//     price: number;
Object.defineProperty(exports, "__esModule", { value: true });
//     constructor(t: string, p: number) {
//         this.title = t;
//         this.price = p
//     }
//     print() {
//         console.log([this.title, `$${this.price}`])
//     }
// }
// traditionally we will have to manually tranform json response from API call to the type, like:
// const books = [{ title: 'title A', price: 11 }, { title: 'title B', price: 12 }]
// const transformed = books.map(b => new Book(b.title, b.price))
// for (const book of transformed) {
//     book.print()
// }
// now, with the class transformer we install, we can do:
// ???????? does it only work with webpack ????????????
// error Uncaught ReferenceError: exports is not defined
require("reflect-metadata");
require("es6-shim");
const class_transformer_1 = require("class-transformer");
class Book {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
    print() {
        console.log([this.title, `$${this.price}`]);
    }
}
const books = [{ title: 'title A', price: 11 }, { title: 'title B', price: 12 }];
const transformed = class_transformer_1.plainToClass(Book, books);
for (const book of transformed) {
    book.print();
}
