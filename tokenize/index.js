
const tokenize = (str) => {
    let newToken = true;
    let inside = false;
    return str.split('').reduce((acc, ch) => {
        if (ch === ' ' && !inside) {
            newToken = true;
        } else {
            if (ch === '"') {
                inside = !inside;
            }
            if (newToken) {
                acc.push(ch);
                newToken = false;
            } else {
                acc[acc.length - 1] += ch;
            }
        }
        return acc;
    }, []);
}

module.exports = tokenize;