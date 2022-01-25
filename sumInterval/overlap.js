
const overlap = (interA, interB) => {
    return interB[0] < interA[1] && interB[0] > interA[0] 
        || interB[1] < interA[1] && interB[1] > interA[0];
}

module.exports = overlap;