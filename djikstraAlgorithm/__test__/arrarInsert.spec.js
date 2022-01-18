const arrayInsert = require('../arrayInsert');

describe('arrayInsert()', () => {
    it('should insert the item in the desired index', () => {
        expect(arrayInsert([1,2,3,5], 4, 3)).toEqual([1,2,3,4,5]);
        expect(arrayInsert([2,3,4,5], 1, 0)).toEqual([1,2,3,4,5]);
    });
    it('should insert at the begining when array is empty', () => {
        expect(arrayInsert([], 5, 0)).toEqual([5]);
    });
    it('should insert at the end', () => {
        expect(arrayInsert([1,2,3,4], 5, 4)).toEqual([1,2,3,4,5]);
    });
});