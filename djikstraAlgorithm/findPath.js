
const findPath = (prev, origin, dest) => {
    const path = [];
    let currentNode = dest;
    while (currentNode !== origin) {
        path.unshift(currentNode);
        currentNode = prev[currentNode];
    }
    path.unshift(origin);
    return path;
}

(() => {
    const path = findPath({ A: null, B: 'A', C: 'D', D: 'A', E: 'D', F: 'E', G: 'B' }, 'A', 'G');
    console.log(path);
})()

module.exports = findPath;