
const payevently = (payments) => {
    payments.sort((a,b) => a - b);
    const sum = payments.reduce((acc, num) => {
        return acc + num;
        
    }, 0);
    const avg = sum / payments.length;
    
}

(() => {
    payevently([20, 5, 5]);
})()

module.exports = payevently;