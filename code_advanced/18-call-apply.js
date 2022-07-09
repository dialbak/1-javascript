/**
 * - call() est une méthode d'un objet qui peut substituer un objet différent de celui sur lequel il est mis.
 * - J'exécute wizard.heal(), le call() permet de passer l'objet archer{}, vu qu'on a les mêmes noms de variables
 * les variables de archer{} vont remplacer celle de l'objet wizard{}
 */
const wizard = {
    name: "Merlin",
    health: 100,
    heal(num1, num2) {
        return (this.health += num1 + num2);
    }
}

const archer = {
    name: "Robin Hood",
    health: 30
}

console.log(archer);
console.log(wizard.heal.call(archer, 50, 20))
console.log(archer);

/**
 * instead of this
 * wizard.heal.call(archer, 50, 20)
 * apply looks like this
 * this has the same result, just the syntaxe change
 */
console.log(wizard.heal.apply(archer, [50, 20]))

/**
 * Contrairement à call and apply, bind n'exécute pas la méthode sur laquelle il est utilisé,
 * mais renvoie plutôt une nouvelle function qui peut ensuite être appelé plus tard.
 */
const healArcher = wizard.heal.bind(archer, 50, 20);
healArcher();
console.log(archer); 
