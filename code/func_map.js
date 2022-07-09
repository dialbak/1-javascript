/**
 * Legibility
 *
 * Reduce surface for bug
 */
const array = [1, 2, 3, 4, 5]
const double = x => x * 2

console.log(array.map(double))
console.log(array.map(a => double(a)))

