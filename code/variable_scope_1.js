let num = 1
const addTwoNum = n => n + 2

console.log("global scope", num)
console.log("function scope", addTwoNum(num))
