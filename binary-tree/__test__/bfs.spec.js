const bfs = require('../bfs');

describe('bfs', () => {
    it('should return the bfs array of the tree', () => {
        const tree = {
            v: 7,
            r: {
                v: 9,
                r: {
                    v: 10,
                },
                l: {
                    v: 8,
                },
            },
            l: {
                v: 4,
                r: {
                    v: 6,
                    l: {
                        v: 5,
                    },  
                },
                l: {
                    v: 2,
                    r: {
                        v: 3,
                    },
                    l: {
                        v: 1,
                    },
                }
            }
        };
        expect(bfs(tree)).toEqual([7, 4, 9, 2, 6, 8, 10, 1, 3, 5]);
    });
});