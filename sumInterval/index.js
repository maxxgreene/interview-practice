const sortIntervals = require('./sortIntervals');

const sumIntervals = (intervals) => {
    const sorted = sortIntervals(intervals);
    const withoutOverlap = sorted.reduce((acc, inter)  => {
        if (acc.length > 0 && inter[0] < acc[acc.length - 1][1]) {
            acc[acc.length - 1][1] = Math.max(acc[acc.length  - 1][1], inter[1]);
        } else {
            acc.push(inter);
        }    
        return acc;
    }, []);
    return withoutOverlap.reduce((acc, inter) => {
        return acc += inter[1] - inter[0];
    }, 0);
}





module.exports = sumIntervals;
