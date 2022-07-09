
console.log("==========add()==========")
/**
 * currying = function return function
 */
function add(x) {
    return function (y) {
        return x + y
    }
}

console.log(add(3)) // [Function (anonymous)]
const addInc = add(3)
console.log(addInc(7)) // 10

console.log("==========add2()==========")
/**
 * add2 and add3 do the exam same thing
 * but using different syntaxes
 * @param x
 * @returns {function(*)}
 */
const add2 = x => y => x + y
const add3 = x => {
    return function (y) {
        return x + y
    }
}

console.log(add2(3))  // [Function (anonymous)]
const add2Inc = add2(2)
console.log(add2Inc(5)) // 7

const add3Inc = add3(2)
console.log(add3Inc(5))