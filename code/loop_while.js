let numberOfLoops = 0;
while(numberOfLoops < 10) {
    console.log("I am looping!");
    numberOfLoops += 1;
}

let num1 = 0;
let num2 = 0;
while (num1 < 100) {
    num1 += 1;
    num2 += num1;

}
console.log("num2 " + num2);

const names = ["Chris", "Bob", "Joe", "Jane", "Amy", "Ashley", "Billy"];


function nameLooper(arr, userName) {
    let index = 0;
    while(index < arr.length){
        if (arr[index] === userName) {
            console.log(arr[index], index);
            break;
        }
        index += 1;
    }
}
nameLooper(names, "Joe")