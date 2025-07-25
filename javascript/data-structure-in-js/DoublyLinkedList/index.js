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

        if (!this.head || this.length === 0) {
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
        if (!this.head || !this.tail || this.length === 0) {
            return "List is empty. Nothing to pop";
        }

        const temp = this.tail;

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
        if (this.length === 0 || !this.head) {
            return "Nothing to shift" || undefined;
        }

        const temp = this.head;

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

    insert(index, value) {
        if (index < 0 || index > this.length) {
            return false;
        }

        if (index === this.length) return this.push(value);
        if (index === 0) return this.unshift(value);

        const newNode = new Node(value);
        // Below is correct only
        const before = this.get(index - 1);
        const after = before.next;

        before.next = newNode;
        newNode.prev = before;
        newNode.next = after;
        after.prev = newNode;
        this.length++;

        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        if (index === this.length) return this.pop();
        if (index === 0) return this.shift();

        let temp = this.get(index);

        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
        temp.next = null;
        temp.prev = null;

        this.length--;
        return temp;
    }

    reverse() {
        let current = this.head;
        let temp = null;

        while (current) {
            // Swap prev and next pointers
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;

            //Move to the next node(which is now prev due to swap)
            current = current.prev;
        }

        //Update the head. Though need to verify this step
        if (temp) {
            this.head = temp.prev;
        }
    }
}

const DLL = new DoublyLinkedList(4);

DLL.getLength();
DLL.printList();
