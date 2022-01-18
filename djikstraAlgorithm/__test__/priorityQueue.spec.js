const PriorityQueue = require('../priorityQueue');

describe('priorityQueue', () => {
    it('should enqueue & dequeue using priorities', () => {
        const queue = new PriorityQueue();
        expect(queue.isEmpty()).toBe(true);
        queue.enqueue('A', 5);
        queue.enqueue('B', 3);
        queue.enqueue('C', 10);
        queue.enqueue('D', 1);
        expect(queue.isEmpty()).toBe(false);
        expect(queue.dequeue()).toBe('D');
        expect(queue.dequeue()).toBe('B');
        expect(queue.dequeue()).toBe('A');
        expect(queue.dequeue()).toBe('C');
    });
});