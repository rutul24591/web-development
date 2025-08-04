import Node from "./Node.js";

/**     LIFO
 *
 *         top
 *          |
 *          5 -> 2 -> 3 -> 14 -> 11 -> null
 *
 */
class Stack {
    constructor(value) {
        const newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }

    printStack() {
        let temp = this.top;

        while (temp !== null) {
            console.log(temp.value + " -> ");
            temp = temp.next;
        }
    }

    isEmpty() {
        return this.length === 0;
    }

    getLength() {
        return this.length;
    }

    makeEmpty() {
        this.top = null;
        this.length = 0;
    }

    /** Get Top */
    peek() {
        if (this.isEmpty()) return "stack is empty";
        else {
            return this.top.value;
        }
    }

    /** Remove an element from end of stack */
    pop() {
        const temp = this.top;

        if (this.length === 0) return undefined;
        else {
            this.top = temp.next;
            temp.next = null;
        }

        this.length--;
        return temp;
    }

    /** Push an element to end of stack */
    push(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }

        this.length++;
    }
}

const newStack = new Stack(4);

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

const stackLength = newStack.getLength();
console.log("stackLength =", stackLength);

console.log(newStack.peek());

newStack.makeEmpty();

console.log("START PRINTING STACK 3");
newStack.printStack();
console.log("END PRINT STACK");
