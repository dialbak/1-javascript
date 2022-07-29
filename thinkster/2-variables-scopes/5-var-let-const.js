/**
 * - var => generally not recommended
 * - let => can not be used without declared, can be reassigned
 * - const => can not be used without declared, can not be reassigned
 * - Best practices => never used var, and always declare variables and initialize them before use
 * - Always use cost, if never you want to reassign new value, use let
 */

// var and let can be reassigned

var dog = "dog"
dog = "cat1"
console.log(dog)

let dog_2 = "dog"
dog_2 = "cat2"
console.log("1", dog_2)

const dog_3 = "dog3"
// dog_3 = "cat" // can not be reassign
console.log("2", dog)

// objects const can be reassigned, due to memory reference
const dog_4 = {
    name: "dog4"
}
dog_4.name = "change name of dog 4"
console.log("3", dog_4.name)

obj = JSON.parse(JSON.stringify(dog_4))
console.log("4 obj", obj)

obj["name_2"] = dog_4.name
console.log("5 obj", obj)

obj.name_2 = "try to fuck all by it's ok"
console.log("6", dog_4, obj)

obj["name_3"] = dog_4
console.log("7", obj)

obj.name_3.name = "now fuck all"
console.log("8", obj, dog_4)