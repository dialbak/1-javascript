// Big o is a language, used to talk about a long it take for a function for running

const nemo = ["nemo"]
const everyOne = ["bak", "kady", "titi", "martin", "guilia", "aurore", "mama", "papi", "maman", "nemo",]
const largeArr = new Array(100).fill("nemo")

const findNemo = (nemo) => {
    const t0 = performance.now()
    for (let i = 0; i < nemo.length; i++) {
        if (nemo[i] === "nemo") console.log("We found nemo")
    }
    const t1 = performance.now()
    console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds")
}

// findNemo(nemo) // 0(n) --> Linear Time

const anotherFunction = () => {}

function funChallenge(input) {
    let a = 10; //O(1)
    a = 50 + 3; //O(1)

    for (let i = 0; i < input.length; i++) {
        anotherFunction(); //O(n)
        let stranger = true; //O(n)
        a++ //O(n)
    }
    console.log(a)
    return a //O(1)
}

funChallenge([3, 3, 3])// Big O (3 + 3n)

