// function constructor
new Function("optionalArguments", "functionBody");

const sum = new Function("x", "y", "return x + y");

console.log(sum(2, 3)); // 5
