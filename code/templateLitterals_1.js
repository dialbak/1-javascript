const bankAccount = {
    canSpendMoney(itemPrice) {
        return itemPrice < this.balance;
    },
    balance: 1342
}

const logInfo = (price, acct) => {
    return console.log(
        ` - Can you purchase : ${(acct.balance -= price) > 0}
          - You want to buy item witch cost ${price}
          - Your account balance is ${acct.balance}
          - You can purchase ${acct.canSpendMoney(price)}
          - Your new sold is ${acct.balance -= price}
            `
    )
}

const purchaseItem = (price, acct = bankAccount) => {
    acct.canSpendMoney(price) ? logInfo(price, acct) : logInfo(price, acct)
}

purchaseItem(11)






















