class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(value) {
        this.items.push(value);
    }

    dequeue() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items.shift();
    }

    front() {
        return this.isEmpty() ? "Queue is Empty" : this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    printQueue() {
        console.log(this.items.join(" <- "));
    }

    makeEmpty() {
        this.items = [];
    }
}

const newQueue = new Queue();

newQueue.enqueue(48);
newQueue.enqueue(19);

newQueue.printQueue();

const peekResult = newQueue.front();
console.log("peekResult", peekResult);

newQueue.enqueue(5);
newQueue.enqueue(18);
newQueue.enqueue(99);

console.log("START PRINTING QUEUE");
newQueue.printQueue();
console.log("END PRINT QUEUE");

newQueue.dequeue();

console.log("START PRINTING QUEUE 2");
newQueue.printQueue();
console.log("END PRINT QUEUE");

const queueLength = newQueue.size();
console.log("queueLength =", queueLength);

console.log(newQueue.front());

newQueue.makeEmpty();

console.log("START PRINTING QUEUE 3");
newQueue.printQueue();
console.log("END PRINT QUEUE");
