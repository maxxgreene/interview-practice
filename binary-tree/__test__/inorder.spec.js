const inorder = require('../inorder');

describe('inorder', () => {
    it('should return the in order array of the tree', () => {
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
        expect(inorder(tree)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
});