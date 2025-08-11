import Node from "./Node.js";

class RecusiveBST {
    constructor() {
        this.root = null;
    }

    //Helper function
    minValue(currentNode) {
        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        // Return the value of min node and not the pointer to current node
        return currentNode.value;
    }

    rContains(value, currentNode = this.root) {
        if (currentNode === null) return false;

        if (value === currentNode.value) return true;

        if (value < currentNode.value) {
            return this.rContains(value, currentNode.left);
        } else {
            return this.rContains(value, currentNode.right);
        }
    }

    // This method is private (#)
    #rInsert(value, currentNode = this.root) {
        if (currentNode === null) return new Node(value);

        if (value < currentNode.value) {
            currentNode.left = this.#rInsert(value, currentNode.left);
        } else if (value > currentNode.value) {
            currentNode.right = this.#rInsert(value, currentNode.right);
        }
        return currentNode;
    }

    rInsert(value) {
        // this will take care when root is null and not the null check in #rInsert(it is meant if we have reached leaf node and check for empty space)
        if (this.root === null) this.root = new Node(value);
        this.#rInsert(value);
    }

    #deleteNode(value, currentNode) {
        if (currentNode === null) return null;

        if (value < currentNode.value) {
            currentNode.left = this.#deleteNode(value, currentNode.left);
        } else if (value > currentNode.value) {
            currentNode.right = this.#deleteNode(value, currentNode.right);
        } else {
            // Four cases here for the node to be deleted

            // 1. It is a leaf node with no children
            if (currentNode.left === null && currentNode.right === null) {
                return null;
            }

            // 2. Leaf node has right child and empty left child
            else if (currentNode.left === null) {
                currentNode = currentNode.right;
            }
            // 3. Leaf node has left child and empty right child
            else if (currentNode.right === null) {
                currentNode = currentNode.left;
            }
            // 4. Leaf node has both left and right children.
            else {
                let subMinTree = this.minValue(currentNode.right); // Remember minValue returns the value and not pointer
                currentNode.value = subMinTree;
                currentNode.right = this.#deleteNode(
                    subMinTree,
                    currentNode.right
                );
            }
        }

        return currentNode;
    }

    deleteNode(value) {
        this.root = this.#deleteNode(value, this.root);
    }

    printTree(currentNode = this.root) {
        return currentNode;
    }
}

const myTree = new RecusiveBST();

myTree.rInsert(47);
myTree.rInsert(21);
myTree.rInsert(29);
myTree.rInsert(32);
myTree.rInsert(42);
myTree.rInsert(8);
myTree.rInsert(12);
myTree.rInsert(2);
myTree.rInsert(24);
myTree.rInsert(87);
myTree.rInsert(54);
myTree.rInsert(69);

console.log(myTree.printTree());

console.log(myTree.rContains(32));

myTree.deleteNode(87);

console.log(myTree.printTree());
