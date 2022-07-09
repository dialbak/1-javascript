const tableau = [1, 'chat', true, {a: 1}];
console.log(tableau);

const word = Array.from('chat'); // ["c", "h", "a", "t"]
word.push("s");
word[4] = "zz";

console.log("word", word);
console.log(Array.isArray(word)); // true
console.log(word.length);

const tableauAdd = [[1, 2], [3, 4]];
console.log(
    tableauAdd[0], // [1,2]
    tableauAdd[0][1], // 2
    tableauAdd[1][1] // 4
);

const destructurArray = [1, 2, 3, 4];
const [, , a, b] = destructurArray;
console.log(a); // 3
console.log(b); // 4


const restArray = [1, 2, 3, 4];
const [as, ...leReste] = restArray;
console.log(as); // 1
console.log("le reste", leReste); // [2, 3, 4]

// contrairement à push unshift rajoute au début et retourne la length du tableau
const addOnStart = [1, 2, 3];
addOnStart.unshift(4);
const retourLength = addOnStart.unshift(5, 6);
console.log(addOnStart); // [5, 6, 4, 1, 2, 3]
console.log(retourLength); // 6

/**
 * splice permet de modifier le contenu d'un tableau
 * commence a l'index 1, enleve 0 et rajoute "Feb
 */
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);

const deleteElem = [1, 2, 3, 4, 5];
deleteElem.shift();
console.log(deleteElem); // [2,3,4,5]

deleteElem.pop();
console.log(deleteElem); // [2,3,4]

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));// ["camel", "duck", "elephant"]


const tableau1 = [1, 2, 3];
const tableau2 = [4, 5];
const tableau3 = tableau1.concat(tableau2);
console.log(tableau3); // [1, 2, 3, 4, 5]
