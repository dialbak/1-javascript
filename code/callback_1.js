/**
 * Callbacks
 *
 * Callback:
 * A callback function is a function that is passed to another function
 * as a parameter. This inner function is called at some point during
 * the execution of the containing function
 * In other words, it's "called back" at
 * some specified point inside the containing function's body
 */

/**
 * Execute the callback function after time out
 * @param callback
 */
function shouldGoFirst(callback) {
    setTimeout(() => {
        callback()
    }, 3000)
}

const shouldGoSecond = () => console.log("call after time out ")
shouldGoFirst(shouldGoSecond)

