module.exports = function towelSort (matrix) {
    return matrix.join().split(',').sort((a, b) => a - b);
}
