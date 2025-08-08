import Node from "./Node";

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

        const temp = this.root;

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
        this.root = this._removeNode(this.root, value);
    }

    // Still need to work on this
    _remove(node, value) {
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
}
