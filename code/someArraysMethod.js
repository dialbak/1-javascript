const strings = ['a', 'b', 'c', 'd']
const numbers = [1, 2, 3, 4, 5]

strings.push('e')
console.log("push ", strings)// [ 'a', 'b', 'c', 'd', 'e' ]

strings.pop()
console.log("pop ", strings)// [ 'a', 'b', 'c', 'd' ]

strings.pop()
console.log("pop ", strings)// [ 'a', 'b', 'c' ]

strings.unshift('x') // [ 'x', 'a', 'b', 'c' ]
console.log("unshift", strings)

strings.splice(2, 0, 'alien')
console.log("splice", strings) // [ 'x', 'a', 'alien', 'b', 'c' ]
