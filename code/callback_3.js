const logSum = sum => console.log(`Squared and summed equal to = ${sum}`)

const square = (num1, num2, toSquareFunc) => {
    const squareValues = (num1 + num2) + (num1 + num2)
    toSquareFunc ? toSquareFunc(squareValues) : console.log("oups, missing params !!!")
}

square(4, 4, logSum)