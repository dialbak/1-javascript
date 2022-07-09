class MyArray {

    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data
    }

    pop() {
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--;
        return lastItem;
    }

    deleteAtIndex(index) {
        delete this.data[index]
        this.length--;
    }
}

const myArray = new MyArray()
myArray.push('hi');
console.log(myArray)
myArray.push('you');
myArray.push('!');
myArray.pop();
myArray.push('!Add and delete');
myArray.deleteAtIndex(2)
console.log(myArray.data, myArray.length)




