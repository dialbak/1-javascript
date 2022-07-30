/**
 * - Le contexte de fonction est le principal type de contexte que vous trouverez dans votre application.
 *
 * - Si le contexte n'est pas global, il s'agit probablement d'un contexte de fonction.
 *
 * - Il y a plusieurs façons de déterminer le contexte d'une fonction
 *
 * - Trouver l'appel de fonction et regarder à gauche de celui-ci. S'il y a un point, regardez à gauche du point.
 * Si cette variable est un objet, cet objet est le contexte de votre fonction.
 *
 * - Si votre objet a des objets imbriqués, chaque objet imbriqué peut avoir son propre contexte à condition
 * que l'un de ses attributs soit une fonction et que la fonction, soit appelée.
 *
 * - La deuxième méthode est en recherchant la fonction et en voyant si elle est appelée en utilisant
 * {.call, .apply ou .bind}
 *
 * Ce sont trois méthodes spéciales disponibles sur le prototype de chaque fonction en JavaScript.
 *
 * - C'est un moyen de définir explicitement le contexte d'une fonction qui n'est pas un attribut sur un objet.
 * Dans le cas où vous voyez une de ces méthodes appelée, l'objet qui est passé comme premier argument à la fonction
 * est le contexte.
 */

const person_1 = {
    name: 'John',
    sayHello: function () {
        console.log("1 - object context", this)
        console.log(`2 - Object property ${this.name}`)
    }
}
person_1.sayHello()

function sayHello() {
    console.log("3 - object context", this)
    console.log(`4 - Object property ${this.name}`)
}

sayHello()

/**
 * - Le premier sayHello ligne 45 à un contexte différent de celui de ligne 48
 * - Chaque objet imbriqué a son propre contexte si sayHello est appelé entre les accolades
 */
const person_2 = {
    name: 'Preston',
    sayHello,// it's sayHello()
    spouse: {
        name: 'Amanda',
        sayHello
    }
}
person_2.sayHello()
person_2.spouse.sayHello()

/**
 * Aucun context spécifique ne sera trouver et ça va logger le contexte global
 */
const numbers = [1, 2, this]
numbers.forEach(function () {
    console.log("array", this)
})

const person_3 = {
    name: 'Person 3azz'
}

/**
 * - Ici j'appel ma methode mais en lui donnant un contexte précis
 * - C'est 3 façons de faire le meme chose
 * {call, apply, bind}
 */

sayHello.call(person_3)
sayHello.apply(person_3)
const newFn = sayHello.bind(person_3)
newFn()