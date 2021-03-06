



function generateDocument(characters, document) {
    for (const character of document) {
        const documentFrequency = countCharacterFrequency(character, document)
        const charactersFrequency = countCharacterFrequency(character, characters)
        if (documentFrequency > charactersFrequency) return false
    }
    return true
}

function countCharacterFrequency(character, target) {
    let frequency = 0
    for (const char of target) {
        if (char === character) frequency++;
    }

    return frequency
}



const characters = "Bste!hetsi ogEAxpelrt x "
const document = "AlgoExpert is the Best!"

console.log(generateDocument(characters, document))
