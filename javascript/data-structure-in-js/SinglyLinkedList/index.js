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

        return this.head;
    }

    push(value){
        // 2 -> 4 -> null       7 
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length ++;
        return this;
    }

    pop(){
        // 2 -> 4 -> null
        if(!this.head){
            return "Nothing to pop";
        }

        let temp = this.head;
        let pre = this.head;

        while(temp.next){
            pre = temp;
            temp = temp.next;
        }

        
        this.tail = pre;
        pre.next = null;  // this.tail.next = null;
        this.length--;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        return temp;
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
        // 2 -> 4 -> 7 -> null      2
        if(index < 0 || index >= this.length){
            return "Index is out of bound";
        }
        
        let temp = this.head;

        for(let i = 0; i < index; i++){
            temp = temp.next;
        }
        return temp;
    }

    set(index, value){
        let temp = this.get(index);

        if(temp){
            temp.value = value;
            return true;
        }
        return false;
    }

    remove(index){
        // 2 -> 4 -> 7 -> null;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        if(index < 0 || index >= this.length) {
            return 'Index out of bound' || undefined;
        }

        const before = this.get(index - 1);
        const temp = before.next;

        before.next = temp.next;
        temp.next = null;
        this.tail = before;     // Not in notes, but think it is required
        return temp;
    }

    reverse(){
        // 2 -> 4 -> 7 -> null          7 -> 4 -> 2 -> null
        // Switch head and tail pointers
        let temp = this.head;       // temp 2
        this.head = this.tail;      // head 7
        this.tail = temp;           // tail 2

        // Initialize 2 variables for next and prev of temp.
        let next = temp.next;       // next 4
        let prev = null;            // prev null

        // Loop over the LL till end of list
        for(let i = 0; i < this.length; i++){
            next = temp.next;       // Same for 1st iteration
            temp.next = prev;       // This is why prev is needed to fill the gap
            prev = temp;
            temp = next;               
        }
    }
}

const LL = new LinkedList(4);

LL.getLength();

const unshift2  = LL.unshift(2);
const push7  = LL.push(7);

const get2 = LL.get(-1);
console.log(`GET idx 2`, get2);

const printLL = LL.printList();
console.log(printLL);