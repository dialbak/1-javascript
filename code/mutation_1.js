let a = 1
let b = a
b = 4
console.log(a, b) // change just value

const obj1 = {
    a: 1
}

const obj2 = obj1
obj2.a = 14
console.log("mutate object " , obj1, obj2) // change by reference

const arr1 = [1, 2, 3, 4]
const arr2 = arr1

// Push mutate the array
arr2.push(55)
console.log("mutate array " ,arr1, arr2)

// avoid push mutation
const push = value => array => {
    const clone = [...array]
    clone.push(value)
    return clone
}
const pushWithoutMutateArray = push(1234)(arr1)
console.log(
   "original array ", arr1, "\n",
    "immutable array " , pushWithoutMutateArray
)








