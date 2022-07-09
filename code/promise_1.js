/**
 * Promises
 * A Promise is a proxy for a value not necessarily known
 * when the promise is created
 *
 * Promises (similar to callbacks) are used for async computations
 * Think of a promise as representing as a value that may be available now, later, or never
 * You Can associate a handler with an async action
 * A promise exists in three states: Pending: initial state, not fulfilled
 * Fulfilled: OK! Got it
 * Rejected: failed
 *
 */

const testPromise = new Promise((resolve, reject) => {
    const num = Math.random()
    num > 0.5 && reject("promise no good !! Rejected")
    setTimeout(() => {
        resolve(`promise ok ${num}`)
    }, 2000)
})

testPromise
    .then(resolveMessage => console.log(`look like ${resolveMessage}`))
    .then(() => console.log("I should run after the promise is resolved"))
    .catch(rejectedMessage => console.log(`Error: ${rejectedMessage}`))