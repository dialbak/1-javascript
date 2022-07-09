const men = [
    {mortal: 'Socrates'},
    {mortal: 'Me'},
    {mortal: 'Gog'},
    {immortal: 'God'}
]


for (let i = 0; i < men.length; i++) {
    Object.entries(men[i])
        .forEach(([key, value]) => {

                if (!(key === "mortal")) {
                    console.log(`error !!! all in collection are not mortal ${value} is ${key}`)
                } else {
                    key === "mortal" &&
                    value === "Socrates" &&
                    console.log(`All men with ${key} key, are mortal, ${value} is a men, there for Socrates is ${key}`)
                }
            }
        )
}

const cake = {
    vanilla: true
}

function isVanillaOrChocolate(thisCake) {
    thisCake.vanilla ? console.log(`this cake is either vanilla`) : console.log(`this cake is either vanilla`)
}

console.log(`This cake is either vanilla or chocolate ?`)
isVanillaOrChocolate(cake)

