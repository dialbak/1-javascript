function twoNumberSum(array, targetSum) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
            if (array[i] + array[j] === targetSum && array[i] !== array[j]) {
                return [array[i], array[j]]
            }
        }
    }
    return []
}

let array = [3, 5, -4, 8, 11, 1, -1, 6]
let targetSum = 10
console.log(twoNumberSum(array, targetSum))
