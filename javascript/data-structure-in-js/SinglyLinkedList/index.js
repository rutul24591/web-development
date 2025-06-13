import Node from './Node.js';

class LinkedList {
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    
    getLength () {
        console.log(`Length of Linked List: `, this.length);
    }

    printList() {
        let temp = this.head;

        while(temp != null){
            console.log(temp.value + '->');
            temp = temp.next;
        }
    }

    push(value){

    }

    pop(){

    }

    shift(){
        // 2 -> 4 -> null
        if(!this.head){
            return "Nothing to return" || undefined;
        }
        let temp = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        temp.next = null;
        return temp;
    }

    insert(index, value){

    }

    unshift(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){

    }

    set(index, value){

    }

    remove(index){

    }

    reverse(){

    }
}

const LL = new LinkedList(4);

LL.getLength();

const unshift2  = LL.unshift(2);
console.log(unshift2);

LL.printList();