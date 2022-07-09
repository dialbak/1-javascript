const getNewLetter = (letter, key) => {
    const newLetterCode = letter.charCodeAt() + key
    return newLetterCode <= 122 ? String.fromCharCode(newLetterCode) :
        String.fromCharCode(96 + newLetterCode % 122)
}

console.log(getNewLetter("z", 2))


function caesarCipherEncryptor(string, key) {

    const newLetterCode = []
    const newKey = key % 26

    for (const letter of string) {
        newLetterCode.push(getNewLetter(letter, newKey))
    }

    return newLetterCode.join("")
}

console.log(caesarCipherEncryptor("xyz", 2))

