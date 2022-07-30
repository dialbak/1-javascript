const person = {
    name: "myNAme",
    sayHello: () => {
        console.log(this)
        console.log(`Hello ${this.name}`) // undefined
    }
}
person.sayHello()

const spouse = {
    name: 'Amanda',
    pets: ['Tiger', 'Midnight'],
    printPets: function printPets() { // fonction anonyme nommé a son propre contexte
        return this.pets.reduce(dog => { // function flêché n'a pas de contexte prend celui autour de lui
            return ` ${this.name} has ${this.pets.length} ${
                this.pets.length === 1 ? 'pet' : 'pets'
            }: ${this.pets.join(', ')}.`
        }, '')
    }
}

const spouseMsg = spouse.printPets();
console.log(spouseMsg)

const person_2 = {
    name: 'Amanda',
    pets: ['Tiger', 'Midnight'],
    printPets: function () {
        return this.pets.reduce(function (dog) {// fonction anonyme nommé a son propre contexte
            // et pets n'est pas dedans
            return `${
                this.name
            } has ${this.pets.length}  ${this.pets.length === 1 ? 'pet' : 'pets'}`
        }, '')
    }
}

const personMsg = person_2.printPets();
console.log(personMsg)