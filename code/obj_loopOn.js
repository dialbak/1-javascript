const obj = {a: 1, b: 2, c: 4};

for (const prop in obj) {
    console.log(prop);
    console.log(`${prop}: ${obj[prop]}`)
}

console.log("object value", Object.values(obj));
console.log("Object keys",Object.keys(obj));

const objKeys = Object.keys(obj)
console.log(objKeys)

for(let i = 0; i < objKeys.length; i++) {
    console.log("boucle sur un objet", i)
}

 // [["a", 1], ["b", 2], ["c", 4]]
console.log("object entries", Object.entries(obj))



