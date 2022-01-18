const insert = require('./arrayInsert');

function PriorityQueue() {
    let queue = []; 
    return {
        enqueue(item, priority) {
            let index = 0;
            while (index <= queue.length - 1 && queue[index].priority < priority) {
                index += 1;
            }
            queue = insert(queue, { item, priority }, index);
        },
        dequeue() {
            if (!this.isEmpty()) {
                return queue.shift().item;
            }    
        },
        isEmpty() {
            return queue.length === 0;
        }
    }
}

module.exports = PriorityQueue;