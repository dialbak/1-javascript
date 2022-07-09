const genCharArray = (charA, charZ) => {
    let a = []
    let i = charA.charCodeAt(0)
    let j = charZ.charCodeAt(0);

    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}

console.log(genCharArray('a', 'z'))




