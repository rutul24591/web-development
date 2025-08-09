/**
 * TC: O(log n) - INsertion, deletion, find priority all would depend on height of tree, where n is the layers. Very efficient
 *
 * Heaps are the go to choice for implementing Proirity queue.
 */

class Heap {
    #heap = []; //Private varible

    getHeap() {
        return [...this.#heap];
    }

    #leftChild(index) {
        return 2 * index + 1;
    }

    #rightChild(index) {
        return 2 * index + 2;
    }

    #parent(index) {
        return Math.floor((index - 1) / 2);
    }

    #swap(index1, index2) {
        [this.#heap[index1], this.#heap[index2]] = [
            this.#heap[index2],
            this.#heap[index1],
        ];
    }

    insert(value) {
        // Push to end of array
        this.#heap.push(value);

        // Bubble up in array
        let current = this.#heap.length - 1; // index of Last element where insert was made

        /**
         * Two conditions to exit:
         * 1. current should be greater than 0
         * 2. Parent should be greater than child
         */
        while (
            current > 0 &&
            this.#heap[current] > this.#heap[this.#parent(current)]
        ) {
            this.#swap(current, this.#parent(current)); // Swap parent and current
            current = this.#parent(current); // Bubble current up the array(Towards left) or up in tree
        }
    }
    // We only remove one item i.e the root
    remove() {
        // 1. Empty heap check
        if (this.#heap.length === 0) return null;

        // 2. If heap has only one item
        if (this.#heap.length === 1) {
            return this.#heap.pop();
        }

        // 3. If heap has 2 or more items
        const maxValue = this.#heap[0]; // root

        this.#heap[0] = this.#heap.pop(); // Take the last element and assign it as root(as we want to maintain complete tree property of heap)

        // Readjust the array from root to maintain HEAP property.
        this.#sinkDown(0);

        return maxValue; // Return root
    }

    #sinkDown(index) {
        let maxIndex = index; // maxIndex is also pointing to root. Will change this maxIndex to childIndex of index.
        let size = this.#heap.length;

        while (true) {
            let leftIndex = this.#leftChild(index);
            let rightIndex = this.#rightChild(index);

            // Compare if left child is greater than parent, move maxIndex to leftChild. We need to make sure any child is not empty
            if (
                leftIndex < size &&
                this.#heap[leftIndex] > this.#heap[maxIndex]
            ) {
                maxIndex = leftIndex;
            }

            // Compare if right child is greater than parent, move maxIndex to rightChild. We need to make sure any child is not empty
            if (
                rightIndex < size &&
                this.#heap[rightIndex] > this.#heap[maxIndex]
            ) {
                maxIndex = rightIndex;
            }

            // If maxIndex has changed, swap the elements at index and maxIndex. Then point index to maxIndex(bubble down)
            if (maxIndex !== index) {
                this.#swap(index, maxIndex);
                index = maxIndex;
            } else {
                return;
            }
        }
    }
}

const myHeap = new Heap();

myHeap.insert(99);
myHeap.insert(75);
myHeap.insert(80);
myHeap.insert(55);
myHeap.insert(60);
myHeap.insert(50);
myHeap.insert(65);

console.log(myHeap.getHeap());

myHeap.remove();

console.log(myHeap.getHeap());

myHeap.remove();

console.log(myHeap.getHeap());
