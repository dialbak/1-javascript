/**
 * - A chaque fois que le mot new est utilisé ça permet de
 * - creer un nouvel objet avec un nouveau contexte
 */

function Person() {
    // Y a pas de hoisting dans les fonctions
    console.log(this)
    this.name = "toto"
    console.log(this)
}

const me = new Person();
console.log(me)