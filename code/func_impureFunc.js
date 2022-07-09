/**
 * Impur Side effect
 * @type {function(*=): void}
 */

const logger = msg => console.log(msg)
logger("console.log is not a pur function, by cause of side effect ")

const COST_OF_GLOBAL_ITEM = 17
const cartTotal = quantity => COST_OF_GLOBAL_ITEM * quantity

console.log(cartTotal(3))

const generateID = () => Math.floor(Math.random() * 1000)

const createUser = (name, age) => ({
    id: generateID(),
    name,
    age
})

console.log(createUser("Kyle", 30))
console.log(createUser("Kyle", 30))

let id = 0
const createFood = name => ({
    id: ++id,
    name
})

console.log(createFood("Fies"))
console.log(createFood("Potatoes"))
console.log(createFood("Fish"))
