
const Sudoku = function(data) {
    return {
        isValid: function() {
            const memo = [];
            const squareSize = Math.sqrt(data.length);
            if (squareSize === Math.floor(squareSize)) {
                return data.every((arr, indexY) => {
                    if (arr.length === data.length) {
                        return arr.every((item, indexX) => {
                            if (item >= 1 && item <= data.length)  {
                                const memoIndex = Math.floor(indexY/squareSize) * squareSize + Math.floor(indexX/squareSize);
                                console.log(memoIndex);
                                memo[memoIndex] = Array.isArray(memo[memoIndex])
                                    ? memo[memoIndex]
                                    : [];
                                if (memo[memoIndex].includes(item)) {
                                    return false;
                                }
                                memo[memoIndex].push(item);
                                return true;
                            }
                            return false;
                        });
                    }
                    return false;
                }); 
            } 
            return false;
        }
    };
};

module.exports = Sudoku;