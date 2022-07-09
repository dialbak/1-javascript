


function getNthFibonacci(n) {
    if (n === 2) {
        return 1
    } else if (n === 1) {
        return 0
    } else {
        return getNthFibonacci(n - 1) + getNthFibonacci(n - 2)
    }
}

console.log(
    getNthFibonacci(6)
)
