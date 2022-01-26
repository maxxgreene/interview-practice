const tokenize = require('../index');

describe('tokenize', () => {
    it('should tokenize an string', () => {
        expect(tokenize('abc def gh')).toEqual(['abc', 'def', 'gh']);
    });
    it('should tokenize an string with double quote', () => {
        expect(tokenize('abc "def gh" abc')).toEqual(['abc', '"def gh"', 'abc']);
    });
    it('should tokenize an string with double quote that not close at the end', () => {
        expect(tokenize('abc "def gh" "abc foo ')).toEqual(['abc', '"def gh"', '"abc foo ']);
    });
});