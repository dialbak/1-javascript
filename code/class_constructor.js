class Person {
    constructor(name) {
        this.firstName = name
    }
}

const me = new Person("dial's")

//console.log(me)

class Rectangle {
    constructor(height, width) {
        this.name = "rectangle"
        this.height = height
        this.width = width
    }

    handle() {
        console.log(this)
    }
}

const newRectangle = new Rectangle(10, 5)
let {name, height, width} = newRectangle
//console.log("newRectangle value : " + name + " " + height + " " + width)
newRectangle.handle()

/**
 * Extends allow to inherit of parent class methods
 * super() to inherit of constructor
 *
 * length => property of Square class constructor
 * width => property of Square class constructor not extends !!!!
 * height => property inherit from the parent class
 */
class Square extends Rectangle {
    constructor(length, width) {
        super(height);
        this.length = length
        this.width = width
        this.name = "square"
    }

    // surcharge method
    handle() {
        const data = {
            name: this.name
        }
        return data
    }
}

const newSquare = new Square(12, 4555)
console.log(newSquare.handle())




