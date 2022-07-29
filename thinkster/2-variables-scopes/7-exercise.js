/**
 * Global Scope
 * - Create a variable with global scope, and then print it to the console by using it inside a Function
 */

const globalScope = "globalScope"
console.log(globalScope)

/**
 * Function Scope
 * - Create a function, and then create a variable inside that function. Print the variable to the console:
 * - 1. inside the function (both before and after the declaration)
 * - 2. outside the function to see the difference
 */

function functionScope() {
    // console.log(varInside) // no hoisting inside function
    const varInside = "varInside function"
    console.log(varInside)
}

functionScope()

// console.log(varInside) // function variable are block scoped

/**
 * Block Scope
 * - Create a function, and then create a variable inside an if statement in that function.
 * - Print the variable to the console inside the block and outside the block to see the difference
 */

function blockScoped() {
    if (true) {
        const blockVar = "blockVar"
        console.log(blockVar)
    }
    // console.log(blockVar) // block scoped
}

blockScoped()

/**
 * var, let, const
 * - Declare a variable with each of the above keywords, two for const (one that has a number, string, or boolean and one object or array)
 * - Try to alter the value of each variable and see what happens in each scenario
 * - On the object or array, try adding to the array or altering an attribute on the object as well as reassigning the value
 */

const number = 5
const strings = "string"
//  strings = number  // let can not be re assign

const obj = {a: 'a'}
const arr = [1, 2]
console.log("1", obj, arr)

const objCopy = obj
objCopy.a = arr
console.log("2", objCopy, obj, arr)

arr[0] = 44
console.log("3", objCopy, obj, arr)

objCopy.a[0] = "fuck all"
console.log("4", objCopy, obj, arr)


