run()

/**
 * - Hoisting happens under the covers in JavaScript.
 * When a variable declared with the var keyword is declared,
 * the declaration is moved to the top of the variable's scope.
 * - The initialization still occurs in the same location that you entered it.
 * This means that these variables can be used before they're declared.
 * - However, if you use the variable before it's been declared and/or initialized,
 * the value will be undefined and your application may produce a bug because of this.
 * Something similar happens with functions. You can use functions in JavaScript before they're defined because of hoisting.
 */

function run() {
    let name = "hosting"

    function sayHi() {
        console.log(name)
    }
    sayHi()
}