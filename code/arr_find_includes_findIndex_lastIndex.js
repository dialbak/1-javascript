const tableau = [10, 2, 30, 4, 5, 42, 42, 3];

console.log(
    tableau.includes(42),
    tableau.includes(5),
    tableau.lastIndexOf(42),
    tableau.indexOf(5)
);

// find renvoie le premier element du tableau qui verifie la condition
const sup = tableau.find(el => (
    el < 5
));

console.log(sup);
console.log("findIndex", tableau.findIndex(el => el === 3));
