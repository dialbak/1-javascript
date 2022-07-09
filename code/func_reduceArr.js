const data = [15, 3, 20]

const reducer = function (accumulator, item) {
    return accumulator + item
}

const initialValue = 0
const total = data.reduce(reducer, initialValue)
console.log("The result is ", total)