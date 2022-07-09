function firstDuplicateValue(array) {
    const seen = new Set()
    for (const value of array) {
        if (seen.has(value)) return value
        seen.add(value)
    }
    return -1
}

const array = [2, 1, 5, 2, 3, 3, 4]
console.log(firstDuplicateValue(array))
