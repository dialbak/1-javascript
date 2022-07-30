// Determine the context in each of the following scenarios

function Dog(dogName, breed) {
    this.dogName = dogName;
    this.breed = breed;
}

// dogName n'existe pas dans le context de cette methode
function bark() {
    return `${this.dogName} is barking!`;
}


const myDog = new Dog('Duke', 'Labradoodle');
console.log("1", myDog)

console.log("2", bark())


const yourDog = Dog('Max', 'Golden Doodle');

const newDog = {
    dogName: 'Fluffy',
    breed: '3 Headed Monster',
    sleep: function () {
        return `${this.dogName} is sleeping!`;
    }
}
console.log("3 ", newDog.sleep())

function dogIsPlaying() {
    return `${this.dogName} is playing!`;
}

const parentDog = {
    dogName: 'Pongo',
    breed: 'Dalmatian',
    play: dogIsPlaying,
    puppy: {
        dogName: 'Patch',
        breed: 'Dalmatian',
        play: dogIsPlaying
    }
}
console.log("4", parentDog.play(), parentDog.puppy.play())

function eatsBaseballs() {
    return `${this.dogName} ate another baseball!`;
}

const sandlotDog = {
    dogName: 'Hercules',
    breed: 'Huge ol dog'
}
const result = eatsBaseballs.call(sandlotDog)
console.log("5", result)