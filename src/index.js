module.exports = function reverse (n) {
    let pos = Math.abs(n);
    let str = pos.toString();
    let arr = Number(str.split('').reverse().join(''));
    
    return arr;    
}
