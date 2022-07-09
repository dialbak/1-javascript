
function sortedSquaredArray(array) {

    const sortedSquare = []

    for (let i = 0; i < array.length; i++) {
        sortedSquare[i] = array[i] * array[i]
    }

    return sortedSquare.sort((a, b) => a - b)
}

const array = [-10, 2, 30, 5, 63, 9, 8]
console.log(sortedSquaredArray(array))
