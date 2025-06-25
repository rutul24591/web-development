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

    push(value) {}

    pop() {}

    unshift(value) {}

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
