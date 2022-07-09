const isEquivalent = (a, b) => {
    const aProps = Object.getOwnPropertyNames(a) // 'hi'
    const bProps = Object.getOwnPropertyNames(b)

    // If their property lengths are different, they're different objects
    if (aProps.length !== bProps.length) return false

    for (let i = 0; i < aProps.length; i++) {
        let propName = aProps[i]
        console.log(propName)
        if (a[propName] !== b[propName]) return false;
    }

    // If everything matched, correct
    return true;
}

console.log(
    isEquivalent({'hi': 12}, {'hi': 12}) // returns true
)
