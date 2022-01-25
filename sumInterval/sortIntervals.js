
const sortIntervals = (intervals) => {
    return intervals.sort((a, b) => {
        if (a[0] - b[0] === 0) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });
}

module.exports = sortIntervals;