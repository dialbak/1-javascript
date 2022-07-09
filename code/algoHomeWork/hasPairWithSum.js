const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 45, 38]

const hasPairWithSum = (arr, sum) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                console.log(arr[i], arr[j])
                return true
            }
        }
    }
    return false;
}

const hasPairWithSum_2 = (arr, sum) => {
    // initialise un tableau
    const mySet = new Set();

    // je boucle sur tout le tableau
    for (let i = 0; i < arr.length; i++) {

        if (mySet.has(arr[i])) {
            console.log(sum, ' - ', arr[i], sum - arr[i])
            return true;
        }

        // je soustrais chaque index du tableau de {sum}
        mySet.add(sum - arr[i]);
    }
    return false;
}

const twoNumberSum = (arr, sum) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum && arr[i] !== arr[j]) {
                return [arr[i], arr[j]]
            }
        }
    }
    return []
}

//console.log(hasPairWithSum_2([5, 4, 3, 2, 6, 1, 7], 9))
//console.log('1', hasPairWithSum(array, 11))
console.log(twoNumberSum(array, 11))
