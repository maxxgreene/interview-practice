
const createGraph = (triplets) => {
    return triplets.reduce((acc, triplet) => {
        triplet.reduceRight((_, ch, index) => {
            if (Array.isArray(acc[ch]) && acc[ch].indexOf(triplet[index + 1]) == -1) {
                acc[ch].push(triplet[index + 1]);
            } else {
                acc[ch] = [triplet[index + 1]];
            }
        });
        return acc;
    }, {});
}

const recoverSecret = (triplets) => {
    const graph = createGraph(triplets);
    const visited = [];
    let secret = '';
    Object.keys(graph).forEach((node) => {
        if (visited.indexOf(node) === -1) {
            const traverse = (n) => {
                visited.push(n);
                const neighbors = graph[n] || [];
                neighbors.forEach(child => {
                    if (visited.indexOf(child) === -1) {
                        traverse(child)
                    }
                });
                secret = n + secret;
            }
            traverse(node);
        }      
    });
    return secret;
}

(() => {
    // const triplets = [['t','u','p'],
    //     ['w','h','i'],
    //     ['t','s','u'],
    //     ['a','t','s'],
    //     ['h','a','p'],
    //     ['t','i','s'],
    //     ['w','h','s']];
    const triplets = [ [ 't', 's', 'f' ],
        [ 'a', 's', 'u' ],
        [ 'm', 'a', 'f' ],
        [ 'a', 'i', 'n' ],
        [ 's', 'u', 'n' ],
        [ 'm', 'f', 'u' ],
        [ 'a', 't', 'h' ],
        [ 't', 'h', 'i' ],
        [ 'h', 'i', 'f' ],
        [ 'm', 'h', 'f' ],
        [ 'a', 'u', 'n' ],
        [ 'm', 'a', 't' ],
        [ 'f', 'u', 'n' ],
        [ 'h', 's', 'n' ],
        [ 'a', 'i', 's' ],
        [ 'm', 's', 'n' ],
        [ 'm', 's', 'u' ], 
        ['s', 'f', 'n' ]];    
    console.log(recoverSecret(triplets));    
})();
module.exports = recoverSecret;