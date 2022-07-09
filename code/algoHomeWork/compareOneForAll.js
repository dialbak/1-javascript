
function compareOneForAl(array, vowel) {
    let idx = 0
    let getIndex = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] === vowel[idx]) {
            getIndex.push(i)
            idx++
        }
    }
    for (let i = 0; i < getIndex.length; i++) {
        console.log(`${vowel[i]} is a ${getIndex[i]} of the alphabet `)
    }
}

const array = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
]

let vowel = ['a', 'e', 'i', 'o', 'u', 'y']
console.log(
    compareOneForAl(array, vowel)
)
