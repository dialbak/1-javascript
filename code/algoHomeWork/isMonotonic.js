function isMonotonic(array) {

    let isNonDecreasing = true
    let isNotIncreasing = true

    for (let i = 0; i < array.length; i++) {
        if(array[i] < array[i - 1]) isNonDecreasing = false
        if(array[i] > array[i - 1]) isNotIncreasing = false
    }

    return isNonDecreasing || isNotIncreasing
}

const array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]

console.log(isMonotonic(array))
