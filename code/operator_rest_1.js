
function multiply(multiplier, ...nums) {
    return nums.map(num => num * multiplier)
}

console.log(multiply(2, 2, 3, 6))