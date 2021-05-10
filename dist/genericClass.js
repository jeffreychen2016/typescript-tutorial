"use strict";
class DataStorage {
    constructor() {
        // we do not care what type we store into array
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('jeffrey');
console.log(textStorage); // DataStorage {data: ["jeffrey"]}
const numberStorage = new DataStorage();
numberStorage.addItem(1);
console.log(numberStorage); // DataStorage {data: [1]}
