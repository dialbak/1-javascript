function moveElementToEnd(array, toMove) {

    array.sort((a, b) => a - b)
    let numberOfElem = 0
    let startIdx = array.indexOf(toMove)

    for (let i = 0; i < array.length; i++) {
        if (array[i] === toMove) {
            numberOfElem++
        }
    }

    array.splice(startIdx, numberOfElem)

    for (let i = 0; i < numberOfElem; i++) {
        array.push(toMove)
    }

    return array
}


const array = [2, 1, 2, 2, 2, 3, 4, 2]
const toMove = 2

console.log(moveElementToEnd(array, toMove))
