const family = ["bakary", "aurore", "kady", "tidiane", [36, 35, 11, 8]]
const familyTwo = ["bakary", "aurore", "kady", "tidiane", [36, 35, 11, 8]]

const newArray = family.concat(familyTwo)

for (let i = 0; i < newArray.length; i++) {
    console.log(newArray[i])
}

newArray.push("pipi", "popo")
console.log(newArray)

newArray.pop()
console.log(newArray)

const shiftIndex = newArray.shift()
console.log(shiftIndex)
