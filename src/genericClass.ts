class DataStorage<T> {
    // we do not care what type we store into array
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems() {
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>()
textStorage.addItem('jeffrey')

console.log(textStorage)// DataStorage {data: ["jeffrey"]}

const numberStorage = new DataStorage<number>()
numberStorage.addItem(1)

console.log(numberStorage)// DataStorage {data: [1]}