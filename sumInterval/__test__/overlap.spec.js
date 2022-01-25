const overlap = require('../overlap');

describe('sortIntervals', () => {
    it('should return true for overlap intervals', () => {
        const data = [
            { intervals: [[1,5], [3, 7]] },
            { intervals: [[5, 17], [3, 7]] },
            { intervals: [[10, 20], [11, 14]] }
        ];
        data.forEach((item) => {
            expect(overlap(...item.intervals)).toBe(true);
        });
    });
    it('should return false for non overlap intervals', () => {
        const data = [
            { intervals: [[1,5], [7, 10]] },
            { intervals: [[5, 17], [1, 3]] },
            { intervals: [[10, 20], [21, 20]] }
        ];
        data.forEach((item) => {
            expect(overlap(...item.intervals)).toBe(false);
        });
    });
});    