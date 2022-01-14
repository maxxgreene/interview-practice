
const bfs = (tree) => {
    const out = [];
    const queue = [tree];
    while (queue.length > 0) {
        const node = queue.shift();
        out.push(node.v);
        if (node.l !== undefined) {
            queue.push(node.l);
        }
        if (node.r !== undefined) {
            queue.push(node.r);
        }
    }
    return out;
}

module.exports = bfs;