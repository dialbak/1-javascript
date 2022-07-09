function nonConstructibleChange(coins) {

    let currentChangeCreated = 0

    coins.sort((a, b) => (a - b)).map(c => {
        if (c > currentChangeCreated + 1) return currentChangeCreated + 1
        currentChangeCreated += c
    })
    return currentChangeCreated + 1

}
const coins = [5, 7, 1, 1, 2, 3, 22] // 20

console.log(nonConstructibleChange(coins))

