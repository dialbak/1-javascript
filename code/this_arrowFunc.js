/**
 * Arrow function does not work n this case
 * @type {{firstName: string, getName(): void}}
 *
 * return undefined
 */
const person = {
    firstName: 'tyler',
    getName() {
        console.log(`${this.firstName} is my first name`)
    }
}
person.getName() ? person.getName : console.log("undefined, need's function returning a arrow function")

const person2 = {
    firstName: 'tyler',
    getName() {
        return () => {
            console.log(`${this.firstName} is my first name`)
        }
    }
}
person2.getName()