/**
 * callback, take parameter in the scope of parent function
 * @param num1
 * @param num2
 * @param num3
 * @param log
 */

function sumUpNumber(num1, num2, num3, log) {
    let sumValue
    setTimeout(() => {
        sumValue = num1 + num2 + num3
        log(sumValue)
    }, 3000)
}

const logValue = value => console.log(`Total ${value}`)
sumUpNumber(1, 2, 3, logValue)
