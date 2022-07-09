//[0,3,4,31],[4,6,30] => [0,3,4,4,6,30,31]

const arr_1 = [1, 3, 4, 31]
const arr_2 = [4, 6, 30]
const mergeSortArrays = (arr_1, arr_2) => {
    return [...arr_1, ...arr_2].sort((a, b) => a - b)
}

console.log(mergeSortArrays(arr_1, arr_2))

const mergeSortArrays_2 = (array1, array2) => {
    const mergeArray = []
    let array1Item = array1[0]
    let array2Item = array2[0]
    let i = 1
    let j = 1

    if (array1.length === 0) return array2
    if (array2.length === 0) return array1

    while (array1Item || array2Item) {
        if (array2Item === undefined || array1Item < array2Item) {
            mergeArray.push(array1Item)
            array1Item = array1[i]
            i++
        } else {
            mergeArray.push(array2Item)
            array2Item = array2[j]
            j++
        }
    }
    return mergeArray
}
console.log(mergeSortArrays_2(arr_1, arr_2))
