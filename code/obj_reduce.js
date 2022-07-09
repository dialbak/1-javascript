const votes = [
    "angular", "angular", "angular", "angular",
    "react", "react", "react",
    "ember",
    "vanilla",
    "amber", "amber",
    "vue"
]

const initialValue = {}

const reducer = function (tally, vote) {
    console.log("tally", tally,"\n","vote", vote)
    if (!tally[vote]) {
        tally[vote] = 1
    } else {
        tally[vote] = tally[vote] + 1
    }

    return tally
}

const result = votes.reduce(reducer, initialValue)
console.log("angular: ", result.angular)
console.log("react: ", result.react)
console.log("ember: ", result.ember)
console.log("vanilla: ", result.vanilla)
console.log(result)