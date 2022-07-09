let a = null
let x = a || 'some default'
console.log(x)

function add(a, b) {
    a = a ?? 4
    b = b ?? 0
    console.log(a,b)
    return a + b
}

add(null, 3)