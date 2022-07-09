/**
 * Static method allow to get access to the method
 * without create an instance of the class
 */
class Rectangle {
    static callRectangle() {
        return "hello world"
    }
}

class Square extends Rectangle {
    static whoAmI() {
        return "hello, all" + super.callRectangle()
    }
}

console.log(
    Rectangle.callRectangle(), "\n",
    Square.whoAmI()
)
