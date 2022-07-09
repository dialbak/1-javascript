/**
 * This is difficult to read
 * the best way to do it
 * is high order function
 * @param x
 * @returns {*}
 */

const f = x => x + 2
const g = x => x * 3
console.log(f(g(5)))

const scream = str => str.toUpperCase()
const exclaim = str => `${str}!`
const repeat = str => `${str} ${str}`

console.log(repeat(exclaim(scream("1 - i love javascript"))))
/**
 * high order function
 * reduce right take
 * execute the function from the right to the left
 * @param fns
 * @returns {function(*=): *}
 */
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x)
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)

const withExuberance = compose(repeat, exclaim, scream)
const withExuberance2 = pipe(scream, exclaim, repeat)

console.log(withExuberance("2 - I love javascript"))
console.log(withExuberance2("3 - I love javascript"))