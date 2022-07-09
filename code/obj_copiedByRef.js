/**
 * Object are copied by reference
 * means that, even if you copied the object
 * if you make a change you update the two values
 * because they share a same memory location
 * @type {{a: number}}
 */

const objOne = {
    a: 1
}
const objTwo = objOne
objTwo.a = 2
console.log(objTwo === objOne)

const num = 1
let num2 = num
num2 = 5
console.log(num2 === num)