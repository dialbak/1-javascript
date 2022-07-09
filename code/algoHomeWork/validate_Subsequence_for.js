
function isValidSubsequence(array, sequence) {
    let seqIdx = 0
    for (let i = 0; i < array.length; i++) {
        (array[i] === sequence[seqIdx]) && (seqIdx += 1)
    }
    return seqIdx === sequence.length
}

const array = [5, 1, 22, 25, 6, -1, 8, 10]
const sequence = [5, 1, 22, 6, -1, 8, 10]

console.log(isValidSubsequence(array, sequence))





