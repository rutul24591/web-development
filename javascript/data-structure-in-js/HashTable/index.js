class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size);
    }

    _hash(key) {
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }

        // console.log("hash:", hash);
        return hash;
    }

    get(key) {
        const index = this._hash(key);

        if (this.dataMap[index]) {
            for (let i = 0; i < this.dataMap[index].length; i++) {
                if (this.dataMap[index][i][0] === key) {
                    return this.dataMap[index][i][1];
                }
            }
        }

        return undefined;
    }

    set(key, value) {
        const index = this._hash(key);

        if (!this.dataMap[index]) this.dataMap[index] = [];

        // !!! this.dataMap[index].push([key, value]); // Bug for same key, simply update the value. Check below code for fix

        // Check for existing key and update
        for (let i = 0; i < this.dataMap[index].length; i++) {
            if (this.dataMap[index][i][0] === key) {
                this.dataMap[index][i][1] = value;
                return;
            }
        }
    }

    printTable() {
        for (let i = 0; i < this.dataMap.length; i++) {
            console.log(i, " : ", this.dataMap[i]);
        }
    }

    getKeys() {
        let objectKeys = [];

        for (let i = 0; i < this.dataMap.length; i++) {
            if (this.dataMap[i]) {
                for (let j = 0; j < this.dataMap[i].length; j++) {
                    objectKeys.push(this.dataMap[i][j][0]);
                }
            }
        }

        return objectKeys;
    }
}

const newHT = new HashTable(10);

console.log("KEYS: ", newHT.getKeys());

newHT.set("Books", 99);
newHT.set("Electronics", 999);
newHT.set("Mobile", 999);
newHT.set("Cars", 999999);
newHT.set("Stationary", 9);

console.log("KEYS 2: ", newHT.getKeys());

console.log("key(Cars)", newHT.get("Cars"));
console.log("key(Electronics)", newHT.get("Electronics"));

newHT.set("Mobile", 898);

console.log("KEYS 3: ", newHT.getKeys());

newHT.printTable();
