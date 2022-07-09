/**
 * Currying consiste à décomposer une function avec plusieurs arguments, en une ou plusieurs functions qui acceptent
 * chacune un seul argument.
 */

function multiply(a, b) {
    return a * b;
}

// argument b
let multiplyByTwo = multiply.bind(this, 2);
// argument a
console.log(multiplyByTwo(4))

let multiplyByTen = multiply.bind(this, 10);
console.log(multiplyByTen(6))
