// Determine the context in each of the following scenarios

/**
 * 1 - les fonctions fl
 */

const order = () => {
    console.log(`${this.personName} ordered a pizza.`);
}
order()

// 2
const person = {
    personName: 'Preston',
    order: () => {
        return `${this.personName} ordered a pizza.`;
    }
}
const personMsg = person.order();
console.log(personMsg)

// 3
const spouse = {
    personName: 'Amanda',
    desiredToppings: ['pepperoni', 'green pepper', 'olive', 'bacon'],
    order: function () {
        return this.desiredToppings.reduce(() => {
            return `${this.personName} wants a 
            ${this.desiredToppings.length} topping pizza: 
            ${this.desiredToppings.join(',')}`;
        }, '')
    }
}
const spouseMsg = spouse.order();
console.log(spouseMsg)