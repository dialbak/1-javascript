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

function nodeDepths(root, depth = 0) {
    let sumOfDepths = 0;

    const stack = [{
        node: root,
        depth: 0
    }]

    while (stack.length > 0) {
        const {node, depth} = stack.pop()
        if (node === null) continue;
        sumOfDepths += depth
        stack.push({node: node.left, depth: depth + 1})
        stack.push({node: node.right, depth: depth + 1})
    }

}

console.log(nodeDepths(root))


