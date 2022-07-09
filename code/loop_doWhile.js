let totalMoney = 1000;

function checkIfCanPurchase() {
    if (totalMoney > 500) {
        console.log("Can purchase :)");
        // break loop
        totalMoney = 0
    } else {
        console.log("Cannot purchase :(");
    }
}

do {
    checkIfCanPurchase();
} while (totalMoney > 500);
