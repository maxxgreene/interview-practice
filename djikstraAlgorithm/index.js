const PriorityQueue = require('./priorityQueue');

const djikstraAlgorithm = (graph, startNode) =>  {
    let distances = {};
    let prev = {};
    let pq = new PriorityQueue();
 
    distances[startNode] = 0;
    pq.enqueue(startNode, 0);
    graph.nodes().forEach(node => {
        if (node !== startNode) distances[node] = Infinity;
        prev[node] = null;
    });
 
    while (!pq.isEmpty()) {
        let currNode = pq.dequeue();
        graph.getEdges(currNode).forEach(neighbor => {
            const { name, cost } = neighbor;
            let alt = distances[currNode] + cost;
            if (alt < distances[name]) {
                distances[name] = alt;
                prev[name] = currNode;
                pq.enqueue(name, distances[name]);
            }
        });
    }
    return {
        distances,
        prev
    }    
}

module.exports = djikstraAlgorithm;
