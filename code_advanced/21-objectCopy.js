// objects are passed by reference
let obj = {};
name: "object 1"

// points to same place in memory as obj
let newObj = obj;

// modifies the memory
newObj.name = "newObj";

// Since both point to the same place...
console.log(obj); // {name: newObj}
console.log(newObj); // {name: newObj}

// They are both modified.
let arr = [1, 2, 3];
let newArr = arr;

newArr.push(4);

// [1, 2, 3, 4]
console.log(arr);

// [1, 2, 3, 4]
console.log(newArr);
arr.push(...newArr)
console.log(arr)
