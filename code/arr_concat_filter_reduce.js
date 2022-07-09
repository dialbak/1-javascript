const tableau1 = [1, 2, 3];
const tableau2 = [4, 5];
const tableau3 = tableau1.concat(tableau2);
const tableau4 = [...tableau1, ...tableau2];
console.log(
    "tableau 3", tableau3,
    "tableau 4", tableau4
);

const tableau5 = tableau4.map(el => el ** el);
console.log("tabelau 5", tableau5);


const price = [
    {prix: 42},
    {prix: 2},
    {prix: 30},
    {prix: 12},
    {prix: 50},
    {},
    {prix: undefined},
    {prix: NaN},
    {prix: null}
];

const isSuperior = price.filter(el => el.prix > 10);
console.log("isSuperior", isSuperior);

const total = tableau5.reduce((acc, curr) => acc + curr);
console.log("total", total);

const tableauPrix = [{prix: 20, quantite: 2}, {prix: 42, quantite: 1}, {prix: 15, quantite: 3}];
const totalPrix = tableauPrix.reduce((acc, curr) => {
   return  acc + curr.quantite * curr.prix, 0
});
console.log(totalPrix);

const str1 = '5';
const test = str1.padStart(2, '0')
