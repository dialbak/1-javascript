/**
 * Chaque fonctions à accès au scope de parent, mais pas de son l'enfant
 */

function sayMyName() {
    const a = "a";
    // console.log(b, c); // returns error
    return function findName() {
        const b = "b";
        console.log(a); // a
        // console.log(c); // returns error
        return function printName() {
            const c = "c";
            console.log(a, b); // a, b
        };
    };
}

sayMyName()()(); //each function is returned and has to be called
