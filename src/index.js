module.exports = function towelSort (matrix) {
    let strArr = matrix.join().split(',').sort((a, b) => a - b);
    return strArr.map(Number);
}
