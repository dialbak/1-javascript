const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
const target = 33


const binarySearchHelper = (array, target, left, right) => {
    if (left > right) return -1
    const middle = Math.floor((left + right) / 2)
    const potentialMatch = array[middle]
    if (target === potentialMatch) {
        return middle
    } else if (target < potentialMatch) {
        return binarySearchHelper(array, target, left, middle - 1)
    } else {
        return binarySearchHelper(array, target, middle + 1, right)
    }
}

function binarySearch(array, target) {
    //console.log(binarySearchHelper(array, target, 0, array.length - 1))

    for (let i = 0; i < array.length; i++) {
        if (target === array[i]) return i
    }

    return -1
}

console.log(binarySearch(array, target))
