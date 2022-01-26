const recoverSecret = require('../index');

describe('', () => {
    it('should return whatisup', () => {
        const triplets = [['t','u','p'],
            ['w','h','i'],
            ['t','s','u'],
            ['a','t','s'],
            ['h','a','p'],
            ['t','i','s'],
            ['w','h','s']];
        expect(recoverSecret(triplets)).toBe('whatisup');
    });
    it('should return mathisfun', () => {
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
        expect(recoverSecret(triplets)).toBe('mathisfun');    
    })
});