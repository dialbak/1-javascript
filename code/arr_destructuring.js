// Array destructuring
const myArray = [1, 2, 3, 4, 5];
const [x, y, z, a, b] = myArray;

const mySecondArray = ["Jane Doe", "John Doe", "Billy Bob"];
let name1, name2, name3, name4;
[name1, name2, name3, name4 = "I'm a default :D"] = mySecondArray;

// Swap two variables
let aa = 100;
let bb = 250;
let cc = 500;
// console.log(aa, bb, cc);
[bb, cc] = [cc, bb];

// Use with functions
function foodFilter(arr, term) {
    return arr.filter((t) => t === term)
}

const [result] = foodFilter(["chicken", "fish", "tofu"], "tofu");
const [result2] = foodFilter(["pizza", "donut", "ice cream"], "pizza");
console.log(result, result2)

// Can ignore some values
const anotherArr = [10, 20, 50, 100, 1000, 30];
const [numA, , , , numD,] = anotherArr;
console.log(`First: ${numA}, second: ${numD}`);

// Can use rest pattern
const yetAnotherArr = ["dogs", "cats", "birds", "snakes", "hedgehogs"];
const [dogString, ...otherAnimals] = yetAnotherArr;
console.log(dogString, otherAnimals)
