/**
 * Closure is a buzzword you'll hear in most of your programming interviews.
 * Some say that understanding what a closure is can affect the salary your offered tremendously.
 * So what the heck is a closure? At its simplest definition,
 * it's a nested function that has access to at least three levels of scopes (it's own scope,
 * the parent scope, and the global scope). Let's write out some code of a closure in action
 * and break down what makes it unique.
 *
 * Common implementation of closure is callback like map for exemple
 */

const globalScope = "javascript"

const parent = () => {
    const parentScope = "is fun"
    return function FunctionChild() {
        const ownScope = "dial's"
        console.log(globalScope, parentScope, ownScope)
    }
}

const me = parent()
me()