let anotherName = "Joelle";
let myOtherArray = [true, false, true, 100];
let myOtherObj = {a: 100, b: 200};

const yetAnotherName = "Joey";
const yetAnotherArr = ["yes", "no", "maybe"];
const yetAnotherObj = {id: 1212132, username: "es6dude"};

const myName = "chris global scope "

function whatName() {
    const myName = "bob"
    console.log(myName)
}

whatName()

function sayHi() {
    const shouldSayHi = true;
    const reallySayHi = true;
    if (shouldSayHi === true) {
        let myName = "Chris function scope";
        console.log("Hi " + myName)
    }
    console.log(myName)
}

sayHi()

// Example of let in a function - let is block-scoped
function sayHiAgain() {
    let shouldSayHi = true;
    let myName;
    if (shouldSayHi === true) {
        myName = "Chris";
        console.log("Hi" + " " + myName)
    } else {
        myName = "Bob";
        console.log("Hi" + " " + myName)
    }
}

sayHiAgain()

const myArray = [1, 2, 3]
// const example - const cannot be reassigned
// myArray = rr;// error