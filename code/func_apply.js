const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.log(array); // ["a", "b", 0, 1, 2]


const arr = [5, 6, 8, 4, 9]

console.log(
    Math.max(...arr),
    Math.max.apply(null, arr)
)