const data = [1, 2, 3]

const doubled = data.reduce(function (acc, value) {
    acc.push(value * 2)
    return acc
}, [])

const doubledMapped = data.map(function (item) {
    return item * 2
})

const data2 = [1, 2, 3, 4, 5, 6]
const evens = data2.reduce(function (acc, value) {
    if (value % 2 === 0) {
        acc.push(value)
    }
    return acc
}, [])

const evenFiltered = data2.filter(function (item) {
    return (item % 2 === 0)
})

const filterMap = data2.filter(function (value) {
    return value % 2 === 0
}).map(function (value) {
    return value * 2
})

console.log("My doubled data:", doubled)
console.log("My doubleMapped data:", doubledMapped)
console.log(evens)
console.log(evenFiltered)
console.log(filterMap)
