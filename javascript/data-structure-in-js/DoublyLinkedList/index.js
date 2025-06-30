import Node from "./Node.js";

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    getLength() {
        console.log(`The length of Linked List is ${this.length}`);
    }

    printList() {
        let temp = this.head;

        while (temp !== null) {
            console.log(temp.value + " -> ");
            temp = temp.next;
        }
        return this.head;
    }
    //4 -> null      Add 2

    push(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this.head;
    }

    pop() {
        const temp = this.tail;

        if (!this.head || !this.tail) {
            return "List is empty. Nothing to pop";
        }

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }

        this.length--;
        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {}

    insert(index, value) {}

    remove(index) {}

    set(index, newValue) {}

    get(index) {}

    reverse() {}
}

const DLL = new DoublyLinkedList(4);

DLL.getLength();
DLL.printList();
