const b = {
    name: "jay",
    say() {
        console.log("b", this);
    }
};

const c = {
    name: "jay",
    say() {
        return function () {
            console.log("c", this);
        };
    }
};

const d = {
    name: "jay",
    say() {
        return () => console.log("d", this);
    }
};

/**
 * b {name: 'jay', say()...}
 * b called the function
 */
//b.say();

/**
 * function() {console.log(this)}
 * returned a function that gets called later
 */
//c.say();

/**
 * Window {...}
 *  c.say() gets the function and the Window runs it
 */
//c.say()();

/**
 * returned the arrow function
 * () => console.log(this)
 */
//d.say();

/**
 * d {name: 'jay', say()...}
 * arrow function does not rebind this and inherits this from parent
 */
d.say()();
