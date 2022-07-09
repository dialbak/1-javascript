/**
 * Problème : étant donné le tableau arr, recherchez et renvoyez deux indices du tableau qui
 * s' additionnent pour pondérer ou renvoient -1
 * s' il n'y a pas de combinaison qui correspond au poids.
 * Par exemple, dans un tableau comme [1,2,3,4,5], quels nombres totalisent 9 ?
 * les réponses sont 4 et 5, bien sûr.
 * la solution simple consiste à essayer chaque combinaison en ayant deux boucles for, comme indiqué ici :
 */

const findSum = (arr, sumVal) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) === sumVal) return [arr[i], arr[j]]
        }
    }
    return -1;
}

let arr = [1, 2, 3, 4, 5]
let sum = 9
console.log(findSum(arr, sum))
