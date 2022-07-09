/**
 * what we did before optional chaining:
 *
 * let streetName = user && user.address && user.address.street.name
 *
 *  what we can do now:
 */
const user = {
    /*address: {
        street: {
            name: "dial bak"
        }
    }*/

}
let streetName = user?.address?.street?.name
console.log("streetName", streetName)

/**
 * this will run even if options is undefined (in which case, onSuccess would be undefined as well)
 * however, it will still fail if options was never declared,
 * since optional chaining cannot be used on a non-existent root object.
 * optional chaining does not replace checks like if (typeof options == "undefined")
 */
const options = {
    /*onSuccess: function (param) {
        console.log(param)
        return {
            data: 'yay'
        }
    }*/
}

/**
 * this will run without error even if onSuccess is undefined (in which case, no function will be called)
 * and we can combine those things into a single line:
 */
options?.onSuccess?.({data: 'yay'})


