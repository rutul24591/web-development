class Stack {
    constructor(capacity = 10) {
        this.stack = [];
        this.capacity = capacity;
    }

    push(value) {
        if (this.stack.length >= this.capacity) {
            throw new Error("Stack is full");
        }
        this.stack.push(value);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Popping from an empty stack");
        }
        return this.stack.pop();
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Peeking from an empty stack");
        }
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }

    toString() {
        return this.stack.toString();
    }

    makeEmpty() {
        this.stack = [];
    }

    printStack() {
        console.log(this.stack.join(" <- "));
    }
}

const newStack = new Stack(5);

newStack.push(48);
newStack.push(19);

newStack.printStack();

const peekResult = newStack.peek();
console.log("peekResult", peekResult);

newStack.push(5);
newStack.push(18);
newStack.push(99);

console.log("START PRINTING STACK");
newStack.printStack();
console.log("END PRINT STACK");

newStack.pop();

console.log("START PRINTING STACK 2");
newStack.printStack();
console.log("END PRINT STACK");

const stackLength = newStack.size();
console.log("stackLength =", stackLength);

console.log(newStack.peek());

newStack.makeEmpty();

console.log("START PRINTING STACK 3");
newStack.printStack();
console.log("END PRINT STACK");
