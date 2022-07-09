const person = {
    name: "dials"
}

/**
 * if instead we use a arrow function instead of anonyme,it's will not work
 * @returns {string}
 */
function getName () {
    return `${this.name} is my first name`
}

console.log(getName()) // undefined
console.log(getName.call(person))
console.log(getName.apply(person))
