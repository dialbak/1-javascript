/**
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Map
 * @type {Map<any, any>}
 */
const myMap = new Map()
const objectKey = {}
const functionKey = () => 2

/**
 * define value key
 */
myMap.set("stringKey", "a string")
myMap.set("objectKey", {name:"dialbak"})
myMap.set( "3", functionKey())

console.log(myMap.size, typeof myMap)
console.log(myMap.get("stringKey"))
console.log(myMap.get("objectKey").name)
console.log(myMap.get("3"))
