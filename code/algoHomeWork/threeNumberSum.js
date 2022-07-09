function threeNumberSum(array, targetSum) {

    array.sort((a, b) => a - b)
    const triplets = []

    for (let i = 0; i < array.length; i++) {
        let left = i + 1
        let right = array.length - 1

        while (left <= right) {
            const currentSum = array[i] + array[left] + array[right]
            if (currentSum === targetSum) {
                triplets.push([array[i], array[left], array[right]])
                left++
                right--
            } else if (currentSum < targetSum) {
                left++
            } else if (currentSum > targetSum) {
                right--
            }
        }
    }
    return triplets
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15]
const targetSum = 33

console.log(
    threeNumberSum(array, targetSum)
)
