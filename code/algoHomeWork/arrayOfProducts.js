function arrayOfProducts(array) {

    let finalArr = []
    for (let i = 0; i < array.length; i++) {
       finalArr.push(functionSum(array, i))
    }
    return finalArr
}

function functionSum(array, index) {
    let copyArray = [...array]
    copyArray.splice(index, 1)
    return copyArray.reduce((acc, curr) => acc * curr)
}

const array = [5, 1, 4, 2]

console.log(arrayOfProducts(array))
