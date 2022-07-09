const obj_1 = {a: "a"}
const obj_2 = {a: "a"}

// Parce que l'emplacement mémoire est différent
console.log(obj_1 == obj_2)
console.log(JSON.stringify(obj_1) === JSON.stringify(obj_2))
