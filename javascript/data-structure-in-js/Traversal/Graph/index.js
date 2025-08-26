class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    printGraph() {
        if (Object.keys(this.adjacencyList).length !== 0) {
            console.log("{");
            for (const [key, value] of Object.entries(this.adjacencyList)) {
                console.log(" ", `${key} : ${value}`);
            }
            console.log("}");
        } else {
            console.log("{}");
        }
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            return true;
        }

        return false;
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
            return true;
        }

        return false;
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
                (vertex) => vertex !== vertex2
            );
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
                (vertex) => vertex !== vertex1
            );

            return true;
        }

        return false;
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return undefined;

        while (this.adjacencyList[vertex].length) {
            let temp = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, temp);
        }

        delete this.adjacencyList[vertex];

        return this;
    }

    bfs(start) {
        let visited = new Set();
        let queue = [start];
        let results = [];

        while (queue.length) {
            let vertex = queue.shift();

            if (!visited.has(vertex)) {
                visited.add(vertex);
                results.push(vertex);
                queue.push(
                    ...this.adjacencyList[vertex].filter(
                        (neighbour) => !visited.has(neighbour)
                    )
                );
            }
        }

        return results;
    }

    // Generic Depth-First Search (recursive)
    dfsRecursive(start) {
        if (!this.adjacencyList[start]) return [];
        const visited = new Set();
        const results = [];
        const traverse = (vertex) => {
            if (!vertex || visited.has(vertex)) return;
            visited.add(vertex);
            results.push(vertex);
            for (const neighbor of this.adjacencyList[vertex] || []) {
                if (!visited.has(neighbor)) traverse(neighbor);
            }
        };
        traverse(start);
        return results;
    }

    // No DFS-Inorder, postorder, preorder for graphs. It will be for trees only.
    // For graphs it should be more generic.
}

// Manual tests for Graph methods
const g = new Graph();

// addVertex
console.log("addVertex A:", g.addVertex("A"));
console.log("addVertex B:", g.addVertex("B"));
console.log("addVertex C:", g.addVertex("C"));
console.log("addVertex D:", g.addVertex("D"));
console.log("addVertex A again (should be false):", g.addVertex("A"));
g.printGraph();

// addEdge
console.log("addEdge A-B:", g.addEdge("A", "B"));
console.log("addEdge A-C:", g.addEdge("A", "C"));
console.log("addEdge B-D:", g.addEdge("B", "D"));
console.log("addEdge C-D:", g.addEdge("C", "D"));
console.log(
    "addEdge X-Y (non-existent vertices, should be false):",
    g.addEdge("X", "Y")
);
g.printGraph();

// bfs
console.log("bfs from A:", g.bfs("A"));
console.log("dfsRecursive from A:", g.dfsRecursive("A"));

// removeEdge
console.log("removeEdge C-D:", g.removeEdge("C", "D"));
g.printGraph();

// removeVertex
console.log("removeVertex B:");
g.removeVertex("B");
g.printGraph();

// bfs after removals
console.log("bfs from A after removals:", g.bfs("A"));
