
const arrayInsert = (arr, item, index) => {
    return arr
        .slice(0, index)
        .concat([item])
        .concat(arr.slice(index,arr.length));    
}

module.exports = arrayInsert;