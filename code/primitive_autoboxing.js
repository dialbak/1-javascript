/**
 * Why ?? thanks to autoboxing, it's
 * happens automatically whenever we treat a primitive type like an object
 *
 * but foo have some object method !!??
 */
const foo = "isNotAnObject"
console.log(typeof foo + " " + foo)

console.log(foo.length)
console.log((10).toString().length)



