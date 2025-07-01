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

    shift() {
        const temp = this.head;

        if (this.length === 0 || !this.head) {
            return "Nothing to shift" || undefined;
        }

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }

        this.length--;
        return temp;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return "Index out of bound";
        }

        let temp = this.head;

        if (index < this.length / 2) {
            for (let i = 0; i < index; i++) {
                temp = temp.next;
            }
        } else {
            temp = this.tail;
            for (let j = this.length - 1; j > index; j--) {
                temp = temp.prev;
            }
        }
        return temp;
    }

    set(index, newValue) {
        const temp = this.get(index);

        if (temp) {
            temp.value = newValue;
            return true;
        }
        return false;
    }

    insert(index, value) {}

    remove(index) {}

    reverse() {}
}

const DLL = new DoublyLinkedList(4);

DLL.getLength();
DLL.printList();
