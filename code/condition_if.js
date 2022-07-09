const bankAccountBalance = 100
const costOfItem = 123
const hasCreditCard = true
const hasReachedCreditLimit = true

if(bankAccountBalance >= costOfItem){
    console.log("Congrats ! you can pay for this with cash")
} else if(hasCreditCard && !hasReachedCreditLimit){
    console.log("you can pay with credit")
} else {
    console.log("sorry you can not purchase this items ! :(")
}
