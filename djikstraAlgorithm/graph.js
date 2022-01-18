

function Graph() {
    const graph = {};
    return {
        addNode(name) {
            if (!Array.isArray(graph[name])) {
                graph[name] = [];
            }
        },  
        addDirectedEdge(origin, dest, cost) {
            this.addNode(origin);
            this.addNode(dest);
            graph[origin].push({ name: dest, cost });
        },
        getEdges(name) {
            return graph[name];
        },
        nodes() {
            return Object.keys(graph);
        },
        print() {
            console.log(graph);
        }
    }
} 

module.exports = Graph;

(() => {
    const g = new Graph();
    g.addNode("A");
    g.addNode("B");
    g.addNode("C");
    g.addNode("D");
    g.addNode("E");
    g.addNode("F");
    g.addNode("G");

    g.addDirectedEdge("A", "C", 100);
    g.addDirectedEdge("A", "B", 3);
    g.addDirectedEdge("A", "D", 4);
    g.addDirectedEdge("D", "C", 3);
    g.addDirectedEdge("D", "E", 8);
    g.addDirectedEdge("E", "F", 10);
    g.addDirectedEdge("B", "G", 9);
    g.addDirectedEdge("E", "G", 50);
    g.print();
    console.log(g.getEdges('A'));
})()