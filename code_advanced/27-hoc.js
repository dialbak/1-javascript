// setting functions to variables
var setFuncToVar = function () {
}

// call function within another
function a(fn) {
    fn()
}

a(function () {
    console.log('a new function')
})

// return functions within another
function b() {
    return function c() {
        console.log('another func')
    }
}

