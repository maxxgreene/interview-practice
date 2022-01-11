
const binarySearch = require('../index-recursive');

describe('binarySearch()', () => {
    it('should find the num', () => {
        const data = [
            { nums: [1, 4, 6, 8, 90, 102], target: 90, index: 4 },
            { nums: [1, 4, 6, 8, 90, 102], target: 1, index: 0 },
            { nums: [1, 4, 6, 8, 90, 102], target: 6, index: 2 },
        ];
        data.forEach((i) => {
            expect(binarySearch(i.target, i.nums)).toBe(i.index);
        });
    });
    it('should return -1 when does not find the num', () => {
        const nums = [1, 4, 6, 8, 90, 102];
        const target = 190;
        expect(binarySearch(target, nums)).toBe(-1);
    });
});