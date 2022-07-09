const list = new Array(600000).join('1.1').split('.');
let count = 1

/**
 * Sans count <= 10, on a un stackOverflow
 */
const removeItemsFromList = () => {
    const item = list.pop();
    count++
    if (item && count <= 10) {
        console.log("run")
        // Récursivité => une fonction s'appel elle même
        removeItemsFromList();
    }
}

removeItemsFromList();

