/**
 * First function make loop on an array of name
 * callback function to uppercase first letter of each name
 * @param arr
 * @param cb
 *
 * prend n tableau boucle dessu et retourne la premiere lettre en majuscule
 */

// exemple 1
const word = ["ara", "bra", "cra", "dra", "era", "fra"]
const upperFirstLetter = (letter) => letter.toUpperCase()

const looper = (arr, upLetter) => {
    for (let i = 0; i < arr.length; i++) {
        let firstLetter = arr[i].slice(0, 1)
        let letterUpper = upLetter(firstLetter)
        console.log(`The letter to Upper is ${letterUpper}`)
    }
}

looper(word, upperFirstLetter)

// exemple 2
const looper2 = (arr, cb) => {
    let i = 0
    for (let i = 0; i < arr.length; i++) {
        const name = arr[i]
        arr[i] = name.charAt(0).toUpperCase() + name.slice(1)
        cb(arr[i])
    }
}

const sayWhenDone = loopCount => console.log(`Done! :D. Capitalized ${loopCount} names`);
const myNames = ["chris", "russell", "toby", "angela"];
looper2(myNames, sayWhenDone)