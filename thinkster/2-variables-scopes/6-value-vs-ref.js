/**
 * - Value:
 * <p>
 *     The data of a variable is copied to other variables, or passed in to functions
 *     Changing the data of copied variables does not change the data of the original variable
 *     strings, numbers, booleans, undefined, and null are examples that use this type of assignment
 *</p>
 *
 * - Reference:
 * <p>
 *     The variable points to a place in memory
 *     Copying variables copies the location in memory to the second variable
 *     Changing the data of one variable affects all variables that have the reference
 *     This applies to objects and arrays
 *</p>
 */

// Copy by value
let number = 5
let number_2 = number
console.log(number, number_2)
number = 10
console.log(number, number_2)

// Copy by reference
let person = {
    name: "bak"
}

let person_2 = person
console.log(person, person_2)

person_2.name = "Joe"
console.log(person, person_2)

function changeName(obj) {
    obj.name = "Brooke"
}

changeName(person)
console.log(person, person_2)

let arr = [1, 2, 3, 4, 5]
let arr_2 = arr
console.log(arr, arr_2)
arr_2.push(6)
console.log(arr, arr_2)
