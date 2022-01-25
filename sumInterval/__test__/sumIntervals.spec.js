const sumIntervals = require('../index');

describe('sumIntervals', () => {
    it('should return the sum of overlaping intervals', () => {
        const intervals = [
            [1,5],
            [10, 20],
            [1, 6],
            [16, 19],
            [5, 11]
        ];    
        expect(sumIntervals(intervals)).toBe(19);
    });
    it('should return the sum of overlaping intervals 2', () => {
        const intervals = [
            [1,5],     
            [10, 20],  
            [1, 6],    
            [16, 19],  
            [5, 11],   
            [14, 16],  
            [15, 17],  
        ];    
        expect(sumIntervals(intervals)).toBe(19);
    });
});
