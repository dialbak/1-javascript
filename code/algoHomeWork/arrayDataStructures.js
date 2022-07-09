const strings = ['a','b','c','d']
const numbers = [1,2,3,4,5]

strings.push('e')
console.log(strings)

strings.pop()
strings.pop()
console.log(strings)

strings.unshift('x')
console.log(strings)

strings.splice(2,0, 'alien')
console.log(strings)
