module.exports = function towelSort (matrix) {
    if ( matrix ) {
        let newArr = [];
        for(let i = 0; i < matrix.length; i++) {
            if (i % 2 === 0) {
                newArr=newArr.concat(matrix[i])
            }
        else {
            newArr=newArr.concat(matrix[i].reverse())
        }
    }
    return newArr;
    }
}
