// Declaration
let name;

console.log("1 - ", name) // undefined, exist but not initialize yet

// Initialization
name = "Preston Lamb"
console.log("2 - ", name) // undefined
/**
 * <h1>Global scope</h1>
 * - Scope define where variable can be used
 * - global and function scope
 * - Block scope will introduce with let and cont
 * - Global scope in JavaScript are:
 * - Usable anywhere in the file where they're declared
 * - Declared outside any function or block of code
 * - Can cause problems if you're not careful with them
 */

function sayHi() {
    console.log("3 - ", `Hello ${name}`)
}

sayHi()

function sayGoodbye(name) {
    console.log("4 - ", `Goodbye ${name}`)
}

sayGoodbye("Joe Eames")

/**
 * Function scope
 */

function courseInfo() {
    let courseName = "Js fundamentals";

    // nested function, can not be used outside the function
    function output() {
        console.log("5 - ", courseName)
    }
    output()
}

courseInfo()
// console.log(courseName) // error limited to the function scope

