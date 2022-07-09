/**
 * Reverse a string
 * 'Hi my name is Andrey'
 * 'yerdnA si eman ym iH
 */

let str = 'Hi my name is Andrey'
let finalArr = []

// 'Hi my name is Andrey' => [ 'Andrey', 'is', 'name', 'my', 'Hi' ]
const reverseWordPositionInsideTheArray = (string) => {
    let stringToArr = string.split(" ")
    let finalArr = []
    for (let i = 0; i < stringToArr.length; i++) {
        finalArr[i] = stringToArr[(stringToArr.length - 1) - i]
    }
    //console.log(finalArr)
    return finalArr
}

// Andrey => yerdnA
const reverseEachWordLetters = string => {
    let stringToArr = string.split(" ").join("").split('')
    let finalArr = []

    for (let i = 0; i < stringToArr.length + 1; i++) {
        finalArr[i] = stringToArr[stringToArr.length - i]

    }
    //console.log(finalArr.join(''))
    return finalArr.join('')
}

const recreateArrWithAllReversed = string => {
    let stringToArr = string.split(" ")
    for (let i = 0; i < stringToArr.length; i++) {
        finalArr.push(reverseEachWordLetters(stringToArr[i]))
    }
    //console.log(finalArr)
    return finalArr
}

const reverseEachWord = (string) => {
    let arr = reverseWordPositionInsideTheArray(string);
    for (let i = 0; i < arr.length; i++) {
        recreateArrWithAllReversed(arr[i])
    }
    return arr.join('')
}

reverseEachWord(str)
//console.log(finalArr.join(' '))


//======== Correction ========//

//str = 3
const reverse = str => {
    if (!str || typeof str != 'string' || str.length < 2) return str

    const backwards = []
    const totalItems = str.length - 1
    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i])
    }
    return backwards.join('')
}
//console.log(reverse(str))

const reverse_2 = str => str.split('')
    .reverse()
    .join('')
//console.log(reverse_2(str))

const reverse_3 = str => [...str].reverse().join('')
console.log(reverse_3(str))
