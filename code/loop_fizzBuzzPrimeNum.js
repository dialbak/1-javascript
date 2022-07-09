const tour = 101;

/**
 * In a for loop, this function take a for loop 'i' as parameter
 * and for ach iteration, return if it's a prime number
 * @param nbr
 */

function isPrime(num) {

    if (num === 2) {
        return true;
    } else if (num > 1) {
        for (let i = 2; i < num; i++) {

            if (num % i !== 0) {
                return true;
            } else if (num === i * i) {
                return false
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
}


/**
 * Fizz buzz loop
 */
for (let i = 1; i < tour; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " Fizz buzz")
    } else if (i % 3 === 0) {
        console.log(i + " Fizz")
    } else if (i % 5 === 0) {
        console.log(i + " Buzz")
    }
    console.log(
        `Is ${i} is a prime number  =====>   ` + isPrime(i)
    )
}


