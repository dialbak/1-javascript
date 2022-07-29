/**
 * - Usable in the function where its declared
 * - Accessible in nested functions
 * - Not accessible outside the function
 */

function sayHello() {
    let name = "Preston Lamb"
    let course = "Js Fundamentals"
    let website = "Thinkster.io"
}
// console.log(name) // error, don't exist outside the bloc function

sayHello()

