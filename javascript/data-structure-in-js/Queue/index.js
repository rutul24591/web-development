import Node from "./Node.js";

class Queue {
    constructor(value) {
        const newNode = new Node(value);
        this.length = 1;
        this.first = newNode;
        this.last = newNode;
    }

    printQueue() {
        let temp = this.first;
        while (temp != null) {
            console.log(temp.value + "->");
            temp = temp.next;
        }
    }

    isEmpty() {
        return this.length === 0;
    }

    enqueue(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;
    }

    dequeue() {
        const temp = this.first;

        if (!this.first || !this.last) {
            return undefined;
        }

        if (this.length === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
            temp.next = null;
        }

        this.length--;
        return temp;
    }

    getFirst() {
        if (this.first === null) {
            console.log("First is null");
        } else {
            console.log("First: ", this.first.value);
        }
    }

    getLast() {
        if (this.last === null) {
            console.log("Last is null");
        } else {
            console.log("Last: ", this.last.value);
        }
    }

    makeEmpty() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    size() {
        return this.length;
    }
}

const newQueue = new Queue(5);

newQueue.enqueue(48);
newQueue.enqueue(19);

newQueue.printQueue();

newQueue.enqueue(59);
newQueue.enqueue(18);
newQueue.enqueue(99);

newQueue.getFirst();
newQueue.getLast();

console.log("START PRINTING QUEUE");
newQueue.printQueue();
console.log("END PRINT QUEUE");

newQueue.dequeue();

console.log("START PRINTING QUEUE 2");
newQueue.printQueue();
console.log("END PRINT QUEUE");

const queueLength = newQueue.size();
console.log("queueLength =", queueLength);

newQueue.getFirst();

newQueue.makeEmpty();

console.log("START PRINTING QUEUE 3");
newQueue.printQueue();
console.log("END PRINT QUEUE");
