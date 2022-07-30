/**
 * - Sans définir un objet ou une class avec new, this seul correspond à {} ou au contexte global du navigateur
 * si lié à un fichier html
 */

class Person {
    name = "Diallo"

    logThis() {
        console.log("1 - log object context", this) // undefined
    }
}

const person = new Person
person.logThis()

function logName() {
    const name = "bak"
    console.log("2 - function context", this, name, this.name)
}

logName()

console.log("3  - empty this", this)
