function findThreeLargestNumber(array) {

    array.sort((a, b) => a - b)

    return [
        array[array.length - 1],
        array[array.length - 2],
        array[array.length - 3]
    ].reverse()
}

const array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
console.log(findThreeLargestNumber(array))
