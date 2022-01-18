const Graph = require('../graph');
const djikstra = require('../index');

describe('djikstraAlgo', () => {
    it('should compute the min path to all nodes', () => {
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
        expect(djikstra(g, 'A').distances).toEqual({ A: 0, B: 3, C: 7, D: 4, E: 12, F: 22, G: 12 });
        expect(djikstra(g, 'A').prev).toEqual({ A: null, B: 'A', C: 'D', D: 'A', E: 'D', F: 'E', G: 'B' });
    });
});