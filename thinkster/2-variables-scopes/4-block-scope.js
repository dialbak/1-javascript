/**
 * - for name and name_3 => ReferenceError: Cannot access 'name_3' before initialization
 * - name_2 is just undefined thanks to "var"
 * _ hoisting not work in block scope
 */

function functionScope() {

    blockScope()

    // function scope

    // console.log(name)
    console.log(name_2)
    // console.log(name_3)

    let name = "bak"
    var name_2 = "bak"
    const name_3 = "bak"

    function blockScope() {
        let surname = "bak";
        console.log(surname)
    }

    // console.log(surname) // ReferenceError: surname is not defined
    blockScope()
}

functionScope()

function functionScope_2() {
    let surname = "4 - bak";
    return {surname}
}

functionScope_2()
console.log(functionScope_2().surname) // ReferenceError: surname is not defined