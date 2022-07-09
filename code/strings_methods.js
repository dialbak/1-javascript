let city = 'Philadelphia'
let country = 'United States'
let location = city + ', ' + country

console.log(location)

/**
 * most used methods
 */

const isIncludes = "koala".includes("a");
console.log(isIncludes);

const isStartWith = "koala".startsWith("k");
console.log(isStartWith);

// retourne la lettre a l'index 2
console.log('Bonjour'.charAt(2));

// retourne l'index du mot Paul
console.log('Bonjour Paul ! Bonjour Stéphane'.indexOf('Paul'));

// transforme la string en tableau ("") (" ")
console.log('Bonjour ! Comment ça va ?'.indexOf(' '));

// permet d'extraire des elements
console.log('Bonjour ! Comment ça va ?'.slice(2, 5));

// pour retirer les espaces blanc
console.log('     Salut!'.trim());
console.log('Salut!        '.trimEnd());
console.log('     Salut!'.trimStart());

/**
 * slice permet de modifier le contenu d'un tableau, il a 3 paramètre
 * A quel index il doit commencer
 * conmbien d'element il doit supprimer
 * ce qui'l doit rajouter
 */
const months = ['Jan', 'March', 'April', 'June', 'May', 'July', 'December'];

console.log(months.splice(4, 1, 'May'))
