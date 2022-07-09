function longestPeak(array) {
    let longestPeakLength = 0
    let i = 1

    while (i < array.length - 1) {
        const isPeak = array[i - 1] < array[i] && array[i + 1] < array[i]

        if (!isPeak) {
            i++
            continue;
        }

        let leftIdx = i - 2;
        while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
            leftIdx--
        }

        let rightIdx = i + 2
        while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
            rightIdx++
        }

        const currentPeakLength = rightIdx - leftIdx - 1
        longestPeakLength = Math.max(longestPeakLength, currentPeakLength)
        i = rightIdx
    }
    return longestPeakLength
}
const array = [5, 4, 3, 2, 1, 2, 10, 12, -3, 5, 6, 7, 10]

console.log(longestPeak(array))
