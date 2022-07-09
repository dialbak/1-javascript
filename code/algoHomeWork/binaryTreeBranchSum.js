class Bst {
    constructor(value) {
        this.value = value;
        this.left = null
        this.right = null
    }
}

const root = new Bst(1);
root.left = new Bst(2);
root.left.right = new Bst(5);
root.left.right.left = new Bst(10);
root.left.left = new Bst(4);
root.left.left.right = new Bst(9);
root.left.left.left = new Bst(8);
root.right = new Bst(3);
root.right.right = new Bst(7);
root.right.left = new Bst(6);

function calculateBranchSums(node, runningSum, sums){
    if(!node) return
    const newRunningSum = runningSum + node.value
    if(!node.left && !node.right){
        sums.push(newRunningSum)
        return
    }
    calculateBranchSums(node.left, newRunningSum, sums)
    calculateBranchSums(node.right, newRunningSum, sums)
}

function branchSums(root) {
    const sums = []
    calculateBranchSums(root, 0, sums)
    return sums
}

console.log(branchSums(root))

