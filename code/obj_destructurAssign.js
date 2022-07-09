
const myObj = {
    x : 2,
    y: 4,
    z: undefined
}

function makeCalculation(obj) {
    const {x, y: d, z = 4} = obj
    //console.log(x, d, z)
    return Math.floor((x + d + z) / 3)
}


console.log(makeCalculation(myObj))

