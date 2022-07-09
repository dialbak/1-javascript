const redShirtHeights = [6, 9, 2, 4, 5, 1]
const blueShirtHeights = [5, 8, 1, 3, 4, 9]

function classPhotos(redShirtHeights, blueShirtHeights) {

    redShirtHeights.sort((a, b) => b - a)
    blueShirtHeights.sort((a, b) => b - a)

    const shirtColorInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? "Red" : "Blue"

    for (let idx = 0; idx < redShirtHeights.length; idx++) {
        const redShirtHeight = redShirtHeights[idx]
        const blueShirtHeight = blueShirtHeights[idx]

        if (shirtColorInFirstRow === "Red") {
            if (redShirtHeight >= blueShirtHeight) return false
        } else if (blueShirtHeight >= redShirtHeight) return false
    }

    return true
}

console.log(classPhotos(redShirtHeights, blueShirtHeights))

