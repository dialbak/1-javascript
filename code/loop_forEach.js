/***
 * Array of mortal mens
 * @type {({mortal: string}|{mortal: string}|{mortal: string}|{immortal: string})[]}
 */
const mens = [
    {mortal: 'Socrates'},
    {mortal: 'Chris'},
    {mortal: 'Lenna'},
    {immortal: 'God'}
]

const cakes = [
    {chocolate: 'Cookie'},
    {chocolate: 'Pudding'},
    {vanilla: 'Butter cake'},
    {lemon: 'Lemon cake'}
]

function whatAbout(arrMens, category, whoName) {
    if (typeof category === "string" && typeof whoName === "string") {
        for (let i = 0; i < arrMens.length; i++) {
            //console.log("===========", Object.entries((arrMens[i])))
            Object.entries((arrMens[i]))
                .forEach(([key, value]) => {
                    if (key === category && value === whoName) {
                        console.log(`${whoName} is a ${key}`)
                    }
                })
        }
    } else console.log(`Please enter a valid type "${whoName}" is not a string`)
}

whatAbout(mens, "mortal", "Socrates")
whatAbout(cakes, "chocolate", "Pudding")
whatAbout(cakes, "chocolate", 2)

