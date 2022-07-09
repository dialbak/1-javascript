const obj1 = {
    a: 'a from obj1',
    b: 'b from obj1',
    c: 'c from obj1',
    d: {
        e: 'e from obj1',
        f: 'f from obj1',
    },
}
const obj2 = {
    b: 'b from obj2',
    c: 'c from obj2',
    d: {
        g: 'g from obj2',
        h: 'g from obj2',
    },
}
console.log("1", {...obj1, ...obj2})
console.log("2", obj1, obj2)
console.log(Object.assign({}, obj1, obj2))

function add(...args) {
    let result = 0;

    for (let arg of args) result += arg;

    console.log(result)
    return result
}

add(1) // returns 1
add(1, 2) // returns 3
add(1, 2, 3, 4, 5) // returns 15