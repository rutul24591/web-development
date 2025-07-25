class Node {
    constructor(value) {
        // Specifically we are saying that this is the value for this node.
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

export default Node;
