const sortIntervals = require('../sortIntervals');

describe('sortIntervals', () => {
    it('should sort the intervals first for the first number', () => {
        const intervals = [[1,3], [5,11], [2,3]];
        expect(sortIntervals(intervals)).toEqual([
            [1,3], [2,3], [5,11],
        ]);
    });
    it('should sort second for the second number', () => {
        const intervals = [[1,3], [2,3], [1,2],];
        expect(sortIntervals(intervals)).toEqual([
            [1,2], [1,3], [2,3],
        ]);
    });
});