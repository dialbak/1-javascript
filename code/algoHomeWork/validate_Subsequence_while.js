
function isValidSubsequence(array, sequence) {

    let arrIdx = 0
    let seqIdx = 0

    while (arrIdx < array.length && seqIdx < sequence.length) {
        if (array[arrIdx] === sequence[seqIdx]) {

            seqIdx += 1
        }
        arrIdx += 1
    }
    return seqIdx === sequence.length
}

const paramArray = [5, 1, 22, 25, 6, -1, 8, 10]
const paramSequence = [5, 1, 22, 6, -1, 8, 10]

console.log(
    isValidSubsequence(paramArray, paramSequence)
)





