import Node from "./Node.js";

class Trees {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let temp = this.root;

        while (true) {
            if (newNode.value === temp.value) return undefined;

            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            } else {
                if (temp.right === null) {
                    temp.right = newNode;
                    return this;
                }
            }
        }
    }

    contains(value) {
        if (this.root === null) return false;

        let temp = this.root;

        while (temp) {
            if (value < temp.value) {
                temp = temp.left;
            } else if (value > temp.value) {
                temp = temp.right;
            } else {
                // Value found
                return true;
            }
        }
    }

    remove(value) {
        this.root = this._removeNode(value, this.root);
    }

    // Still need to work on this. Ignore for now
    _remove(value, node) {
        if (node === null) return null;

        if (value < node.value) {
            node.left = this._removeNode(node.left, value);
        } else if (value > node.value) {
            node.right = this._removeNode(node.right, value);
        } else {
            // Got the node to be deleted

            // Node with only one child or no child
            if (node.left === null) return node.right;
            if (node.right === null) return node.left;

            // Node with 2 children: Get the inorder successor(smallest in the right subtree)
            let minLargerNode = node.right;

            while (minLargerNode.left !== null) {
                minLargerNode = minLargerNode.left;
            }

            node.value = minLargerNode.value;
            node.right = this._removeNode(node.right, minLargerNode.value);
            return node;
        }
    }

    printTree(currentNode = this.root) {
        return currentNode;
    }
}

const myTree = new Trees();

myTree.insert(47);
myTree.insert(21);
myTree.insert(29);
myTree.insert(32);
myTree.insert(42);
myTree.insert(8);
myTree.insert(12);
myTree.insert(2);
myTree.insert(24);
myTree.insert(87);
myTree.insert(54);
myTree.insert(69);

console.log(myTree.printTree());

console.log(myTree.contains(32));

myTree.remove(87);

console.log(myTree.printTree());
