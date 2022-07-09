const person = {
    firstName: "dial",
    getName() {
        return `${this.firstName} is my first name`
    },
    value:{
        getName() {
            return `${this.firstName}`
        }
    }
}

const anotherPerson = {}
anotherPerson.getName = person.getName()
console.log("1. " + anotherPerson.getName)

// firstName no longer lives on the value object
console.log("2. " + person.value.getName())
