
function groupBy(tableau, propriete) {
    return tableau.reduce((acc, curr) => {
        const cle = curr[propriete];
        if (!acc[cle]) {
            acc[cle] = [];
        }
        acc[cle].push(curr);
        return acc;
    }, {});
}

const tableau = [
    {prix: 25, name: "chaussons"},
    {prix: 42, name: "pantalon"},
    {prix: 25, name: "polo"},
    {prix: 42, name: "polo"}
];

const objetsParPrix = groupBy(tableau, "prix");
console.log(objetsParPrix);

// retourne true seulement si tout est vrai
const tableauEvery = [2, 5, 8, 4, 12];
const resultat = tableauEvery.every(el => el > 1);
console.log("resultat", resultat); // true
