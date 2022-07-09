const numAdder = (n1, n2) => {
    return new Promise(resolve => {
        const addedNums = n1 + n2
        setTimeout(() => {
            resolve(addedNums)
        }, 500)
    })
}

const numSquarer = num => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(num * num)
        }, 800)
    })
}

numAdder(10, 10)
    .then(data => numSquarer(data))
    .then(moreData => console.log("more data ", moreData))
    .catch(err => console.log("error", err))