import Node from "./Node.js";

class Trees {
    constructor() {
        this.root = null;
    }

    insert(value) {
        // 1. Create a new node
        const newNode = new Node(value);

        // 2. Check if the root is null
        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        // 3. Create a temporary variable to traverse the tree equal to root
        let temp = this.root;

        // 4. If the root is not null, traverse the tree
        while (true) {
            // 5. Check if the new node value is equal to the temp value
            if (newNode.value === temp.value) return undefined;

            // 6. Check if the new node value is less than the temp value
            if (newNode.value < temp.value) {
                // 7. Check if the left child is null
                if (temp.left === null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            } else {
                // 8. Check if the right child is null
                if (temp.right === null) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }

    contains(value) {
        // 1. Check if the root is null
        if (this.root === null) return false;

        // 2. Create a temporary variable to traverse the tree equal to root
        let temp = this.root;

        // 3. If the root is not null, traverse the tree
        while (temp) {
            // 4. Check if the value is less than the temp value
            if (value < temp.value) {
                temp = temp.left;
            } else if (value > temp.value) {
                // 5. Check if the value is greater than the temp value
                temp = temp.right;
            } else {
                // 6. Value found
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
